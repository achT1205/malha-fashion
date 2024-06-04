<script setup>
import ItemWithImageCrud from '../../../components/ItemWithImageCrud.vue';
import { useFirestore, useCollection } from 'vuefire';
import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

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

const saveItem = async (item) => {
    const docRef = await addDoc(collection(db, 'collections'), { ...item.value });
    console.log(docRef);
};
const updateItem = async (item) => {
    const docRef = doc(db, 'collections', item.value.id);
    const updateRef = await updateDoc(docRef, { ...item.value });
    console.log('Updated : ', updateRef);
};
const deleteItem = async (item) => {
    await deleteDoc(doc(db, 'collections', item.value.id));
};
</script>

<template>
    <Suspense>
        <ItemWithImageCrud :messages="messages" :name="name" v-if="collections && collections.length" :items="collections" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem" />
    </Suspense>
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>