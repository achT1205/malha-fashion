<script setup>
import ItemCrud from '../../components/ItemCrud.vue';
import { TagService } from '@/service/TagService';
import { ref, onMounted } from 'vue';
const tags = ref(null);
const tagService = new TagService();
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
    title: 'Gestion des tags',
    updated: 'a été modifié',
    added: 'a été ajouté',
    deleted: 'a été supprimé',
    deleteds: 'Les occations selectionnées ont été supprimés'
};
const name = {
    single: 'Taiile',
    plural: 'Taiiles'
};
onMounted(() => {
    tagService.getTags().then((data) => (tags.value = data));
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
    <ItemCrud :messages="messages" :name="name" v-if="tags && tags.length" :items="tags" :headers="headers" @save="saveOccasion" @update="updateOccasion" @delete="deleteOccasion" />
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>