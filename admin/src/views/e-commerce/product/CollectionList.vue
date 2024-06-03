<script setup>
import ItemWithImageCrud from '../../../components/ItemWithImageCrud.vue';
import { CollectionService } from '@/service/CollectionService';
import { ref, onMounted } from 'vue';
const collections = ref(null);
const collectionService = new CollectionService();
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
onMounted(() => {
    collectionService.getCollections().then((data) => (collections.value = data));
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
    <div>
        <ItemWithImageCrud :messages="messages" :name="name" v-if="collections && collections.length" :items="collections" :headers="headers" @save="saveOccasion" @update="updateOccasion" @delete="deleteOccasion" />
    </div>
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>