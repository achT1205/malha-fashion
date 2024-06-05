<script setup>
import ItemCrud from '../../../../components/ItemCrud.vue';
import { useFormEdit } from '../../../../composables/useFormEdit';

const collectionName = 'materials';
const { items, saveItem, updateItem, deleteItem } = useFormEdit(collectionName);

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
    title: 'Gestion des matières',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées',
    name: {
        single: 'Matière',
        plural: 'Matières'
    }
};
</script>

<template>
    <Suspense>
        <ItemCrud :messages="messages" :items="items" :headers="headers" @save="saveItem" @update="updateItem" @delete="deleteItem" />
    </Suspense>
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>