<script setup>
import { FilterMatchMode } from 'primevue/api';
import { ref, onBeforeMount } from 'vue';
import { useToast } from 'primevue/usetoast';
import Papa from 'papaparse';

const toast = useToast();
const itemDialog = ref(false);
const deleteItemDialog = ref(false);
const deleteItemsDialog = ref(false);
const item = ref({});
const selectedLocalItems = ref(null);
const dt = ref(null);
const filters = ref({});
const submitted = ref(false);
const valid = ref(true);

const props = defineProps({
    messages: { type: Object, required: true },
    items: {
        type: [Array, null],
        required: true,
        default: () => []
    },
    headers: {
        type: Array,
        required: true
    }
});
const emit = defineEmits(['save', 'update', 'delete', 'saveall', 'deleteSelectedItems']);

onBeforeMount(() => {
    initFilters();
});

const openNew = () => {
    item.value = {};
    submitted.value = false;
    itemDialog.value = true;
};

const hideDialog = () => {
    itemDialog.value = false;
    submitted.value = false;
};

const saveItem = () => {
    submitted.value = true;
    valid.value = props.headers.some((header) => header.required && (!item.value || !item.value[header.fieldName]));
    if (valid.value) {
        toast.add({ severity: 'error', summary: 'Saisie incorrecte !', detail: `Les champs saisis sont incorrects`, life: 3000 });
        return;
    }
    if (item.value.id) {
        emit('update', item);
        toast.add({ severity: 'success', summary: 'Successful', detail: `${item.value.name} ${props.messages.updated}`, life: 3000 });
    } else {
        emit('save', item);
        toast.add({ severity: 'success', summary: 'Successful', detail: `${item.value.name} ${props.messages.added}`, life: 3000 });
    }
    itemDialog.value = false;
    item.value = {};
};

const editItem = (editItem) => {
    item.value = { ...editItem };
    item.value.id = editItem.id;
    itemDialog.value = true;
};

const confirmDeleteItem = (editItem) => {
    item.value = editItem;
    deleteItemDialog.value = true;
};

const deleteItem = () => {
    emit('delete', item);
    deleteItemDialog.value = false;
    item.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: `${item.value.name} ${props.messages.deleted}`, life: 3000 });
};

const exportCSV = () => {
    dt.value.exportCSV();
};

const onSelectedCsvFile = (event) => {
    const file = event.files[0];
    if (file) {
        Papa.parse(file, {
            complete: (results) => {
                emit('saveall', results.data);
                toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
            },
            header: true
        });
    }
};

const confirmDeleteSelected = () => {
    deleteItemsDialog.value = true;
};
const deleteSelectedLocalItems = () => {
    //emit('deleteSelectedItems', selectedLocalItems.value);
    selectedLocalItems.value.forEach(item => {
        emit('delete', item)
    });
    deleteItemsDialog.value = false;
    selectedLocalItems.value = null;
    toast.add({ severity: 'success', summary: 'Successful', detail: ` ${props.messages.deleteds}`, life: 3000 });
};

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
</script>

<template>
    <div class="grid">
    {{selectedLocalItems}}
        <div class="col-12">
            <div class="card">
                <Toolbar class="mb-4">
                    <template v-slot:start>
                        <div class="my-2">
                            <Button label="Ajout" icon="pi pi-plus" class="mr-2" severity="success" @click="openNew" />
                           <!-- <Button label="Suppression" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedLocalItems || !selectedLocalItems.length" />-->
                        </div>
                    </template>

                    <template v-slot:end>
                        <FileUpload mode="basic" :auto="true" name="demo[]" accept=".csv" :maxFileSize="1000000" label="Import" customUpload chooseLabel="Import" @select="onSelectedCsvFile" class="mr-2 inline-block" />
                        <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)" />
                    </template>
                </Toolbar>

                <DataTable
                    ref="dt"
                    :value="items"
                    v-model:selection="selectedLocalItems"
                    dataKey="id"
                    :paginator="true"
                    :rows="10"
                    :filters="filters"
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    :rowsPerPageOptions="[5, 10, 25]"
                    :currentPageReportTemplate="`${props.messages.name.plural}` + ' {first} à {last} sur {totalRecords} '"
                >
                    <template #header>
                        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
                            <h5 class="m-0">{{ props.messages.title }}</h5>
                            <IconField iconPosition="left" class="block mt-2 md:mt-0">
                                <InputIcon class="pi pi-search" />
                                <InputText class="w-full sm:w-auto" v-model="filters['global'].value" placeholder="Search..." />
                            </IconField>
                        </div>
                    </template>

                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

                    <Column v-for="header in headers" :key="header.fieldName" :field="header.fieldName" :header="header.headerName" :sortable="header.sortable" :headerStyle="header.headerStyle">
                        <template #body="slotProps">
                            <span class="p-column-title">Nom</span>
                            <Rating v-if="header.fieldName === 'rating'" :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                            <span v-else> {{ slotProps.data[header.fieldName] }}</span>
                        </template>
                    </Column>
                    <Column headerStyle="min-width:10rem;">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="editItem(slotProps.data)" />
                            <Button icon="pi pi-trash" class="mt-2" severity="warning" rounded @click="confirmDeleteItem(slotProps.data)" />
                        </template>
                    </Column>
                </DataTable>

                <Dialog v-model:visible="itemDialog" :style="{ width: '450px' }" :header="props.messages.name.single" :modal="true" class="p-fluid">
                    <div class="field" v-for="header in headers" :key="header.fieldName">
                        <template v-if="header.fieldName !== 'rating'">
                            <label :for="header.fieldName">{{ header.headerName }}</label>
                            <InputText v-if="!header.extarea" :id="header.fieldName" v-model.trim="item[header.fieldName]" :required="item.required" autofocus :invalid="submitted && !item.name" />
                            <Textarea v-else :id="header.fieldName" :invalid="submitted && !item[header.fieldName]" v-model="item[header.fieldName]" :required="item.required" rows="3" cols="20" />
                            <small class="text-red-700" v-if="submitted && (!item || !item[header.fieldName]) && header.required">Le champs "{{ header.headerName }}" est requis.</small>
                        </template>
                    </div>

                    <template #footer>
                        <Button label="Cancel" icon="pi pi-times" text="" @click="hideDialog" />
                        <Button label="Save" icon="pi pi-check" text="" @click="saveItem" />
                    </template>
                </Dialog>

                <Dialog v-model:visible="deleteItemDialog" :style="{ width: '450px' }" header="Confirmation" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="item"
                            >Etes-vous sûr de vouloir supprimer <b>{{ item.name }}</b
                            >?</span
                        >
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" text @click="deleteItemDialog = false" />
                        <Button label="Yes" icon="pi pi-check" text @click="deleteItem" />
                    </template>
                </Dialog>

                <Dialog v-model:visible="deleteItemsDialog" :style="{ width: '450px' }" header="Confirmation" :modal="true">
                    <div class="flex align-items-center justify-content-center">
                        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                        <span v-if="item">Etes-vous sûr de vouloir supprimer les Items selectionnées ?</span>
                    </div>
                    <template #footer>
                        <Button label="No" icon="pi pi-times" text @click="deleteItemsDialog = false" />
                        <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedLocalItems" />
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