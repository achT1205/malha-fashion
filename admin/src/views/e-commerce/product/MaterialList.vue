<script setup>
import ItemCrud from '../../../components/ItemCrud.vue';
import { MaterialService } from '@/service/MaterialService';
import { ref, onMounted } from 'vue';
const materials = ref(null);
const materialService = new MaterialService();
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
    title: 'Gestion des matière',
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
    materialService.getMaterials().then((data) => (materials.value = data));
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
    <ItemCrud :messages="messages" :name="name" v-if="materials && materials.length" :items="materials" :headers="headers" @save="saveOccasion" @update="updateOccasion" @delete="deleteOccasion" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>