<script setup>
import ProductList from '../../../components/ProductList.vue';
import { useFormEditWithFileUpload } from '../../../composables/useFormEditWithFileUpload';

const collectionName = 'products';
const { items, saveItem, updateItem, deleteItem } = useFormEditWithFileUpload(collectionName);

const headers = [
    {
        fieldName: 'name',
        headerName: 'Nom',
        sortable: true,
        extarea: false,
        required: true,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'image',
        headerName: 'Image',
        sortable: false,
        extarea: false,
        required: true,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'price',
        headerName: 'Prix',
        sortable: false,
        extarea: false,
        required: true,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'category',
        headerName: 'Catégorie',
        sortable: false,
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
        fieldName: 'status',
        headerName: 'Statu',
        sortable: false,
        extarea: false,
        headerStyle: 'width:16%; min-width:10rem;'
    },
    {
        fieldName: 'stock',
        headerName: 'Stock',
        sortable: false,
        extarea: true,
        required: true,
        headerStyle: 'width:100%; min-width:10rem;'
    }
];
const messages = {
    title: 'Gestion des produits',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées',
    name: {
        single: 'Produits',
        plural: 'Produits'
    }
};
</script>

<template>
    <ProductList :messages="messages" :items="items" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>