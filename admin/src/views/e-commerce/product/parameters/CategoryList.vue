<script setup>
import ItemWithImageCrud from '../../../../components/ItemWithImageCrud.vue';
import { useFormEditWithFileUpload } from '../../../../composables/useFormEditWithFileUpload';

const collectionName = 'categories';
const { items, saveItemWithFile, updateItemWithFile, deleteItemWithFile } = useFormEditWithFileUpload(collectionName);

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
    title: 'Gestion des categories',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées',
    name: {
        single: 'Categorie',
        plural: 'Categories'
    }
};
</script>

<template>
    <ItemWithImageCrud :messages="messages" :items="items" :headers="headers" @save="saveItemWithFile" @update="updateItemWithFile" @delete="deleteItemWithFile" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>