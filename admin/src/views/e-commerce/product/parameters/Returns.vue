<script setup>
import ItemCrud from '../../../../components/ItemCrud.vue';
import { useFormEditWithFileUpload } from '../../../../composables/useFormEditWithFileUpload';

const collectionName = 'returns';
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
        fieldName: 'description',
        headerName: 'Description',
        sortable: false,
        extarea: true,
        required: true,
        headerStyle: 'width:100%; min-width:10rem;'
    }
];
const messages = {
    title: `Gestion des modes de retour`,
    updated: 'a été modifié',
    added: 'a été ajouté',
    deleted: 'a été supprimé',
    deleteds: `Les  modes de retour selectionnés ont été supprimés`,
    name: {
        single: `Mode de retour`,
        plural: `Mode de retour`
    }
};
</script>

<template>
    <ItemCrud :messages="messages" :items="items" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>