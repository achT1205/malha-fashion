<script setup>
import ItemCrud from '../../../../components/ItemCrud.vue';
import { useFormEditWithFileUpload } from '../../../../composables/useFormEditWithFileUpload';

const collectionName = 'models';
const { items, saveItem, updateItem, deleteItem, saveParssedData, deleteSelectedItems } = useFormEditWithFileUpload(collectionName);

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
        fieldName: 'value',
        headerName: 'Valeur',
        sortable: true,
        required: true,
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
    title: 'Gestion des modèles',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées',
    name: {
        single: 'Modèles',
        plural: 'Modèles'
    }
};
</script>

<template>
    <ItemCrud :messages="messages" :items="items" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem"  @saveall="saveParssedData" @deleteSelectedItems="deleteSelectedItems"  />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>