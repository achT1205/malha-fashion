import { useFirestore, useCollection, useFirebaseStorage } from 'vuefire';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { ref, watch } from 'vue';

export function useFormEditWithFileUpload(collectionName) {
    const storage = useFirebaseStorage();
    const db = useFirestore();
    const items = useCollection(collection(db, collectionName));
    const currentItem = ref(null);

    const removeFileByPath = async (path) => {
        const desertRef = storageRef(storage, path);
        deleteObject(desertRef)
            .then(async () => {
            })
            .catch((error) => {});
    };

    const createProductWithFiles = async (product, coverFile, others) => {

        const localProduct = JSON.parse(JSON.stringify(product));
        const otherFiles = others;
         
        const updateColorFiles = ()=>{
            let totalImage = otherFiles.flatMap(fileArray=>fileArray).length;
            let count = 0;
            otherFiles.flatMap((fileArray , fileArrayIndex)=>{
                fileArray.map(async(file)=>{
                    let path =''
                    const color   = localProduct.colors[fileArrayIndex]
                    path = `${collectionName}/others/${color.name.toLowerCase()}_${Date.now()}_${file.name}`;
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
                              const newImage = {path: path, src: url}
                              localProduct.colors[fileArrayIndex].images.push(newImage)
                              count++
                              if(count === totalImage)
                                {
                                    await addDoc(collection(db, collectionName), localProduct);
                                }
                            } catch (error) {
                                console.error('Error getting download URL or saving product: ', error);
                            }
                        }
                    );
                })
            })
        }

        const path = `${collectionName}/covers/${localProduct.name}_${coverFile.name}`;
        const itemFileRef = storageRef(storage, path);
         const uploadTask = uploadBytesResumable(itemFileRef, coverFile);
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
                  const newImage = { path: path, src: url }
                  localProduct.image = newImage
                  updateColorFiles()
                } catch (error) {
                    console.error('Error getting download URL or saving product: ', error);
                }
            }
        );
        
    }

    const updateProductWithFiles = async (id, product, coverFile, others, imagesToBeDeletedFromStograge) => {
        const localProduct = JSON.parse(JSON.stringify(product));
        const otherFiles = others;

        const deleteFilesPromises = imagesToBeDeletedFromStograge.map( async(path)=>{
            return await removeFileByPath(path)
        })
        if(deleteFilesPromises && deleteFilesPromises.length)
        {
            await Promise.all(deleteFilesPromises)
        }
        const updateColorFiles = ()=>{
            let totalImage = otherFiles.flatMap(fileArray=>fileArray).length;
            let count = 0;
            otherFiles.flatMap((fileArray , fileArrayIndex)=>{
                fileArray.map(async(file)=>{
                    let path =''
                    const color   = localProduct.colors[fileArrayIndex]
                    path = `${collectionName}/others/${color.name.toLowerCase()}_${Date.now()}_${file.name}`;
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
                              const newImage = {path: path, src: url}
                              localProduct.colors[fileArrayIndex].images.push(newImage)
                              count++
                              if(count === totalImage)
                                {
                                    const docRef = doc(db, collectionName, id);
                                    await updateDoc(docRef, { ...localProduct});
                                }
                            } catch (error) {
                                console.error('Error getting download URL or saving product: ', error);
                            }
                        }
                    );
                })
            })
    
        }

        if(coverFile && coverFile.name){
            const path = `${collectionName}/covers/${localProduct.name}_${coverFile.name}`;
            const itemFileRef = storageRef(storage, path);
             const uploadTask = uploadBytesResumable(itemFileRef, coverFile);
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
                      const newImage = { path: path, src: url }
                      localProduct.image = newImage
                      if(otherFiles && otherFiles.length){
                        updateColorFiles()
                      }else{
                        const docRef = doc(db, collectionName, id);
                        await updateDoc(docRef, { ...localProduct});
                      }
                      
                    } catch (error) {
                        console.error('Error getting download URL or saving product: ', error);
                    }
                }
            );
        }else if(otherFiles && otherFiles.length){
            updateColorFiles()
        }
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
        await addDoc(collection(db, collectionName), { ...currentItem.value });
    };    
    const updateItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        const docRef = doc(db, collectionName, currentItem.value.id);
        await updateDoc(docRef, { ...currentItem.value });
    };
    const deleteItem = async (item) => {
        currentItem.value = { ...item.value };
        currentItem.value.id = item.value.id;
        await deleteDoc(doc(db, collectionName, currentItem.value.id));
    };

    const saveParssedData = async(items) =>{
        items.forEach(async (item) => {
            if(item && item.name)
            await addDoc(collection(db, collectionName), { ...item });
        });
    }

    const deleteSelectedItems =(items)=>{
        items.forEach( async (item) => {
            await deleteDoc(doc(db, collectionName, item.value.id));
        });
    }



  return {
    items,
    saveItemWithFile,
    updateItemWithFile,
    deleteItemWithFile,
    saveItem,
    updateItem,
    deleteItem,
    createProductWithFiles,
    removeFile,
    updateProductWithFiles,
    saveParssedData,
    deleteSelectedItems
  };
}