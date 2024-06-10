import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { ref } from 'vue';

export function useFormEditWithFileUpload(collectionName) {
    const storage = useFirebaseStorage();
    const db = useFirestore();
    const items = useCollection(collection(db, collectionName));
    const currentItem = ref(null);

    let uploadedURLs =[]


    const createProductWithFiles = async (product, coverFile, others) => {
       const localProduct = JSON.parse(JSON.stringify(product));
       const otherFiles = others;
        
        const uploadFile = async (path, file, colorIndex, fileIndex) => {
            const itemFileRef = storageRef(storage, path);
            const uploadTask = uploadBytesResumable(itemFileRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('progress ', progress);
                },
                (error) => {
                    console.error('Upload failed', error);
                },
                async () => {
                    try {
                      const url =  await getDownloadURL(uploadTask.snapshot.ref);
                      uploadedURLs.push(url)
                      if(colorIndex !== null)
                        {
                            localProduct.colors[colorIndex].images[fileIndex].src = url
                            if((colorIndex === localProduct.colors.length -1 &&  fileIndex )=== (localProduct.colors[colorIndex].images.length -1)){
                                await addDoc(collection(db, collectionName), localProduct);
                            }
                        }
                        else {
                            localProduct.image.src = url
                        }
                    } catch (error) {
                        console.error('Error getting download URL or saving product: ', error);
                    }
                }
            );
        };

        const uploadOtherPromises = otherFiles.flatMap((fileArray, fileArrayIndex)=>{
            fileArray.map(async(file, fileIndex)=>{
                let path =''
                const color   = localProduct.colors[fileArrayIndex]
                path = `${collectionName}/others/${color.name.toLowerCase()}_${file.name}`;
                localProduct.colors[fileArrayIndex].images.push({path: path, src:null})
                const url = await uploadFile(path, file, fileArrayIndex, fileIndex);
                return url;
            })
        })

        const path = `${collectionName}/covers/${localProduct.name}_${coverFile.name}`;
        localProduct.image = {path: path, src:null}
        await uploadFile(path, coverFile, null, null)
        .then(async()=>{
            await Promise.all(uploadOtherPromises)
        }).catch((error)=>{
            debugger
        })

        
    }


    
    const saveItemWithFile = async (item, file) => {
        currentItem.value = { ...item.value };
        if (file) {
            currentItem.value.imagePath = `${collectionName}/${Date.now()}_${file.name}`;
            await uploadItemFile(file, 'add');
        } else await createDoc(null);
    };
    
    const uploadItemFile = async (file, action) => {
        const itemFileRef = storageRef(storage, currentItem.value.imagePath);
        const uploadTask = uploadBytesResumable(itemFileRef, file);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('progress ', progress);
            },
            (error) => {
                console.error('Upload failed', error);
            },
            async () => {
                try {
                    const url = await getDownloadURL(uploadTask.snapshot.ref);
                    if (action === 'add') await createDoc(url);
                    else await putDoc(url);
                } catch (error) {
                    console.error('Error getting download URL or saving product: ', error);
                }
            }
        );
    };
    
    const createDoc = async (url) => {
        if (url) currentItem.value.imageSrc = url;
        const addRef = await addDoc(collection(db, collectionName), { ...currentItem.value });
        console.log('added : ', addRef);
    };
    
    const putDoc = async (url) => {
        if (url) currentItem.value.imageSrc = url;
        const docRef = doc(db, collectionName, currentItem.value.id);
        const updateRef = await updateDoc(docRef, { ...currentItem.value });
        console.log('Updated : ', updateRef);
    };
    
    const updateItemWithFile = async (item, file) => {
        currentItem.value = { ...item.value };
        if (file) {
            await removeItemFile('update');
    
            currentItem.value.imagePath = `${collectionName}/${Date.now()}_${file.name}`;
            await uploadItemFile(file, 'update');
        } else putDoc(null);
    };
    const deleteItemWithFile = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        await removeItemFile('delete');
    };
    
    const removeDoc = async () => {
        await deleteDoc(doc(db, collectionName, currentItem.value.id));
    };
    
    const removeItemFile = async (action) => {
        const desertRef = storageRef(storage, currentItem.value.imagePath);
        deleteObject(desertRef)
            .then(async () => {
                if (action === 'delete') await removeDoc();
            })
            .catch((error) => {});
    };

    const removeFile = async () => {
        const desertRef = storageRef(storage, currentItem.value.imagePath);
        deleteObject(desertRef)
            .then(async () => {
            })
            .catch((error) => {});
    };


    const saveItem = async (item) => {
        currentItem.value = { ...item.value };
        const addRef = await addDoc(collection(db, collectionName), { ...currentItem.value });
        console.log('added : ', addRef);
    };    
    const updateItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        const docRef = doc(db, collectionName, currentItem.value.id);
        const updateRef = await updateDoc(docRef, { ...currentItem.value });
        console.log('Updated : ', updateRef);
    };
    const deleteItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        await deleteDoc(doc(db, collectionName, currentItem.value.id));
    };



  return {
    items,
    saveItemWithFile,
    updateItemWithFile,
    deleteItemWithFile,
    saveItem,
    updateItem,
    deleteItem,
    createProductWithFiles,
    removeFile
  };
}