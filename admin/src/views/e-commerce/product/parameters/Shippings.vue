<script setup>
import ItemCrud from '../../../../components/ItemCrud.vue';
import { useFormEditWithFileUpload } from '../../../../composables/useFormEditWithFileUpload';

const collectionName = 'shippings';
const { items, saveItem, updateItem, deleteItem , saveParssedData, deleteSelectedItems} = useFormEditWithFileUpload(collectionName);

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
        fieldName: 'description',
        headerName: 'Description',
        sortable: false,
        extarea: true,
        required: true,
        headerStyle: 'width:100%; min-width:10rem;'
    }
];
const messages = {
    title: `Gestion des modes d'expédition`,
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: `Les  modes d'expédition selectionnées ont été supprimées`,
    name: {
        single: `Mode d'expédition`,
        plural: `Mode d'expédition`
    }
};
</script>

<template>
    <ItemCrud :messages="messages" :items="items" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem"  @saveall="saveParssedData" @deleteSelectedItems="deleteSelectedItems" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>