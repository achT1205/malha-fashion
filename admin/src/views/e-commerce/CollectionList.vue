<script setup>
import { FilterMatchMode } from 'primevue/api';
import { ref, onMounted, onBeforeMount } from 'vue';
import { CollectionService } from '@/service/CollectionService';
import { useToast } from 'primevue/usetoast';
import { FileService } from '@/service/FileService';

const fileUploaderRef = ref(null);
const uploadFile = ref();

const toast = useToast();

const collections = ref(null);
const collectionDialog = ref(false);
const deletecollectionDialog = ref(false);
const deleteCollectionsDialog = ref(false);
const collection = ref({});
const selectedCollections = ref(null);
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);

const collectionService = new CollectionService();

onBeforeMount(() => {
    initFilters();
});
onMounted(() => {
    collectionService.getCollections().then((data) => (collections.value = data));
});
const openNew = () => {
    collection.value = {};
    submitted.value = false;
    collectionDialog.value = true;
    uploadFile.value = null;
};

const hideDialog = () => {
    collectionDialog.value = false;
    submitted.value = false;
};

const saveCollection = () => {
    submitted.value = true;
    if (collection.value.name && collection.value.name.trim() && collection.value.price) {
        if (collection.value.id) {
            collections.value[findIndexById(collection.value.id)] = collection.value;
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Collection mise à jour', life: 3000 });
        } else {
            collection.value.id = createId();
            collection.value.code = createId();
            collection.value.image = 'collection-placeholder.svg';
            collections.value.push(collection.value);
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Collection Créée', life: 3000 });
        }
        collectionDialog.value = false;
        collection.value = {};
    }
};

const editCollection = (editCollection) => {
    uploadFile.value = null;
    collection.value = { ...editCollection };
    collectionDialog.value = true;
};

const confirmDeleteCollection = (editCollection) => {
    collection.value = editCollection;
    deletecollectionDialog.value = true;
};

const deleteCollection = () => {
    collections.value = collections.value.filter((val) => val.id !== collection.value.id);
    deletecollectionDialog.value = false;
    collection.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Collection Deleted', life: 3000 });
};

const findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < collections.value.length; i++) {
        if (collections.value[i].id === id) {
            index = i;
            break;
        }
    }
    return index;
};

const createId = () => {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
};

const exportCSV = () => {
    dt.value.exportCSV();
};

const confirmDeleteSelected = () => {
    deleteCollectionsDialog.value = true;
};
const deleteSelectedCollections = () => {
    collections.value = collections.value.filter((val) => !selectedCollections.value.includes(val));
    deleteCollectionsDialog.value = false;
    selectedCollections.value = null;
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Collections Deleted', life: 3000 });
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};

/*-------------------------------------------new */

const onChooseUploadFiles = () => {
    fileUploaderRef.value.choose();
};
const onSelectedFiles = (event) => {
    uploadFile.value = event.files[0];
};
const onRemoveFile = () => {
    collection.value.image = null;
    uploadFile.value = null;
};
</script>

<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button label="Ajout" icon="pi pi-plus" class="mr-2" severity="success" @click="openNew" />
                            <Button label="Suppression" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedCollections || !selectedCollections.length" />
                        </div>
                    </template>

                    <template v-slot:end>
                        <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                        <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" />
                    </template>
                </Toolbar>

                <DataTable
                    ref="dt"
                    :value="collections"
                    v-model:selection="selectedCollections"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25]"
                    currentPageReportTemplate=" Collections {first} à {last} sur {totalRecords} "
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">Gestion des Collections</h5>
                            <IconField iconPosition="left" class="block mt-2 md:mt-0">
                                <InputIcon class="pi pi-search" />
                                <InputText class="w-full sm:w-auto" v-model="filters['global'].value" placeholder="Search..." />
                            </IconField>
                        </div>
                    </template>

                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                    <Column field="name" header="Nom" :sortable="true" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Nom</span>
                            {{ slotProps.data.name }}
                        </template>
                    </Column>
                    <Column header="Image" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Image</span>
                            <img :src="slotProps.data.image.src" :alt="slotProps.data.image.alt" class="shadow-2" width="100" />
                        </template>
                    </Column>
                    <Column field="rating" header="Notes" headerStyle="width:14%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Notes</span>
                            <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                        </template>
                    </Column>
                    <Column field="Description" header="Description" headerStyle="width:100%; min-width:10rem;">
                        <template #body="slotProps">
                            <span class="p-column-title">Description</span>
                            {{ slotProps.data.description }}
                        </template>
                    </Column>
                    <Column headerStyle="min-width:10rem;">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="editCollection(slotProps.data)" />
                            <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteCollection(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>

                <Dialog v-model:visible="collectionDialog" :style="{ width: '450px' }" header="Collection Details" :modal="true" class="p-fluid">
                    <div class="card p-0">
                        <div class="card">
                            <FileUpload
                                ref="fileUploaderRef"
                                id="files-fileupload"
                                name="demo[]"
                                url="./upload.php"
                                accept="image/*"
                                customUpload
                                auto
                                class="upload-button-hidden w-full"
                                invalidFileSizeMessage="Invalid File Size"
                                invalidFileTypeMessage="Invalid File Type"
                                :maxFileSize="5000000"
                                @select="onSelectedFiles"
                                :pt="{
                                    buttonbar: { class: 'hidden' },
                                    content: { class: 'border-none' }
                                }"
                            >
                                <template #content>
                                    <div v-if="uploadFile || (collection && collection.image)" class="w-full py-3" :style="{ cursor: '' }">
                                        <div class="flex flex-wrap">
                                            <div class="remove-file-wrapper h-full relative w-12rem h-12rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto" :style="{ padding: '1px' }">
                                                <img
                                                    :src="uploadFile && uploadFile.objectURL ? uploadFile.objectURL : collection.image.src"
                                                    :alt="uploadFile && uploadFile ? uploadFile.name : collection.name"
                                                    class="w-full h-full border-round shadow-2"
                                                />

                                                <Button
                                                    icon="pi pi-times"
                                                    :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    @click="onRemoveFile()"
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #empty>
                                    <div v-if="!uploadFile && (!collection || !collection.image)" @click="onChooseUploadFiles" class="w-full py-3" :style="{ cursor: 'copy' }">
                                        <div class="h-full flex flex-column justify-content-center align-items-center">
                                            <i class="pi pi-upload text-900 text-2xl mb-3"></i>
                                            <span class="font-bold text-900 text-xl mb-3">Charger une image</span>
                                            <span class="font-medium text-600 text-md text-center">Déposer ou sélectionner une image</span>
                                        </div>
                                    </div>
                                </template>
                            </FileUpload>
                        </div>
                    </div>
                    <div class="field">
                        <label for="name">Nom</label>
                        <InputText id="name" v-model.trim="collection.name" required="true" autofocus :invalid="submitted && !collection.name" />
                        <small class="p-invalid" v-if="submitted && !collection.name">Name is required.</small>
                    </div>
                    <div class="field">
                        <label for="description">Description</label>
                        <Textarea id="description" v-model="collection.description" required="true" rows="3" cols="20" />
                    </div>

                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
                        <Button label="Save" icon="pi pi-check" text="" @click="saveCollection" />
                    </template>
                </Dialog>

                <Dialog v-model:visible="deletecollectionDialog" :style="{ width: '450px' }" header="Confirmation" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="collection"
                            >Etes-vous sûr de vouloir supprimer <b>{{ collection.name }}</b
                            >?</span
                        >
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" text @click="deletecollectionDialog = false" />
                        <Button label="Yes" icon="pi pi-check" text @click="deleteCollection" />
                    </template>
                </Dialog>

                <Dialog v-model:visible="deleteCollectionsDialog" :style="{ width: '450px' }" header="Confirmation" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="collection">Etes-vous sûr de vouloir supprimer les collections selectionnées ?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" text @click="deleteCollectionsDialog = false" />
                        <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedCollections" />
                    </template>
                </Dialog>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.remove-file-wrapper:hover {
    .remove-button {
        display: flex !important;
    }
}
</style>