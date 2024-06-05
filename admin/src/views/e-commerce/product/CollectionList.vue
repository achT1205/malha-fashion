<script setup>
import ItemWithImageCrud from '../../../components/ItemWithImageCrud.vue';
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { useFirebaseStorage } from 'vuefire';
import { ref } from 'vue';

const storage = useFirebaseStorage();
const db = useFirestore();
const collections = useCollection(collection(db, 'collections'));

const headers = [
    {
        fieldName: 'image',
        headerName: 'Image',
        sortable: false,
        extarea: false,
        required: true,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'name',
        headerName: 'Nom',
        sortable: true,
        extarea: false,
        required: true,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'rating',
        headerName: 'Rating',
        sortable: false,
        extarea: false,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'description',
        headerName: 'Description',
        sortable: false,
        extarea: true,
        required: true,
        headerStyle: 'width:100%; min-width:10rem;'
    }
];
const messages = {
    title: 'Gestion des collections',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées'
};
const name = {
    single: 'Collection',
    plural: 'Collections'
};
const currentItem = ref(null);

const saveItem = async (item, file) => {
    currentItem.value = { ...item.value };
    if (file) {
        currentItem.value.imagePath = `collections/${Date.now()}_${file.name}`;
        await uploadCollectionFile(file, 'add');
    } else await createDoc(null);
};

const uploadCollectionFile = async (file, action) => {
    const collectionFileRef = storageRef(storage, currentItem.value.imagePath);
    const uploadTask = uploadBytesResumable(collectionFileRef, file);
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
    const addRef = await addDoc(collection(db, 'collections'), { ...currentItem.value });
    console.log('added : ', addRef);
};

const putDoc = async (url) => {
    if (url) currentItem.value.imageSrc = url;
    const docRef = doc(db, 'collections', currentItem.value.id);
    const updateRef = await updateDoc(docRef, { ...currentItem.value });
    console.log('Updated : ', updateRef);
};

const updateItem = async (item, file) => {
    currentItem.value = { ...item.value };
    if (file) {
        await removeCollectionFile('update');

        currentItem.value.imagePath = `collections/${Date.now()}_${file.name}`;
        await uploadCollectionFile(file, 'update');
    } else putDoc(null);
};
const deleteItem = async (item) => {
    currentItem.value = { ...item.value };
    currentItem.value.id = item.value.id;
    await removeCollectionFile('delete');
};

const removeDoc = async () => {
    await deleteDoc(doc(db, 'collections', currentItem.value.id));
};

const removeCollectionFile = async (action) => {
    const desertRef = storageRef(storage, currentItem.value.imagePath);
    // Delete the file
    deleteObject(desertRef)
        .then(async () => {
            if (action === 'delete') await removeDoc();
        })
        .catch((error) => {
            // Uh-oh, an error occurred!
        });
};
</script>

<template>
    <Suspense>
        <ItemWithImageCrud :messages="messages" :name="name" :items="collections" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem" />
    </Suspense>
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>