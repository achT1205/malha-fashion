<script setup>
import ItemCrud from '../../../components/ItemCrud.vue';
import { ColorService } from '@/service/ColorService';
import { ref, onMounted } from 'vue';
const colors = ref(null);
const colorService = new ColorService();
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
    title: 'Gestion des tailles',
    updated: 'a été modifiée',
    added: 'a été ajoutée',
    deleted: 'a été supprimée',
    deleteds: 'Les occations selectionnées ont été supprimées'
};
const name = {
    single: 'Taiile',
    plural: 'Taiiles'
};
onMounted(() => {
    colorService.getColors().then((data) => (colors.value = data));
});

const saveOccasion = (oc) => {
    console.log('Added : ', oc);
};
const updateOccasion = (oc) => {
    console.log('Updated : ', oc);
};
const deleteOccasion = (oc) => {
    console.log('Deleted : ', oc);
};
</script>

<template>
    <ItemCrud :messages="messages" :name="name" v-if="colors && colors.length" :items="colors" :headers="headers" @save="saveOccasion" @update="updateOccasion" @delete="deleteOccasion" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>