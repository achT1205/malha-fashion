<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from '@/service/CustomerService';
import { FilterMatchMode } from 'primevue/api';
import { useRouter } from 'vue-router';
import { useProfileManager } from '@/composables/useProfileManager';

const deleteItemDialog = ref(false);
const selectedProfile = ref(null);
const router = useRouter();
const { profiles, removeDoc } = useProfileManager();

const tableRef = ref(null);
const curtomerService = new CustomerService();
const customers = ref([]);
const filterTable = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

onMounted(async () => {
    customers.value = await curtomerService.getCustomersLarge();
});

const formatDate = (value) => {
    return new Date(value).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

const navigateToCreateListPage = () => {
    router.push({ name: 'user-create' });
};

const deleteItem = () => {
    removeDoc(selectedProfile.value.id);
};

const confirmDeleteItem = (p) => {
    selectedProfile.value = p;
    deleteItemDialog.value = true;
};
</script>

<template>
    <div class="card">
        <Dialog v-model:visible="deleteItemDialog" :style="{ width: '450px' }" header="Confirmation" :modal="true">
            <div class="flex align-items-center justify-content-center">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="selectedProfile"
                    >Etes-vous sûr de vouloir supprimer <b>{{ selectedProfile.firstName }} {{ selectedProfile.lastName }}</b
                    >?</span
                >
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteItemDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteItem" />
            </template>
        </Dialog>
        <DataTable
            ref="tableRef"
            :value="profiles"
            paginator
            :rows="10"
            showCurrentPageReport
            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            :rowsPerPageOptions="[10, 25, 50]"
            :globalFilterFields="['name', 'country.name', 'representative.name']"
            v-model:filters="filterTable"
        >
            <template #header>
                <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                    <IconField iconPosition="left" class="w-full sm:w-20rem flex-order-1 sm:flex-order-0">
                        <InputIcon class="pi pi-search" />
                        <InputText v-model="filterTable.global.value" placeholder="Global Search" class="w-full" />
                    </IconField>
                    <Button type="button" icon="pi pi-user-plus" label="Add New" class="w-full sm:w-auto flex-order-0 sm:flex-order-1" outlined @click="navigateToCreateListPage" />
                </div>
            </template>
            <Column field="name" header="Name" sortable headerClass="white-space-nowrap" :style="{ width: '25%' }">
                <template #body="{ data }">
                    <span class="p-column-title">Nom</span>
                    {{ data.firstName }} {{ data.lastName }}
                </template>
            </Column>
            <Column field="date" header="Role" sortable headerClass="white-space-nowrap" :style="{ width: '25%' }">
                <template #body="{ data }"> {{ data.role }} </template>
            </Column>
            <Column field="date" header="Ajouter le " sortable headerClass="white-space-nowrap" :style="{ width: '25%' }">
                <template #body="{ data }"> {{ formatDate(data.createdAt) }} </template>
            </Column>
            <Column field="date" header="Mise à jour le " sortable headerClass="white-space-nowrap" :style="{ width: '25%' }">
                <template #body="{ data }"> {{ formatDate(data.updatedAt) }} </template>
            </Column>
            <Column field="representative.name" header="Avatar" headerClass="white-space-nowrap" :style="{ width: '25%' }" sortable>
                <template #body="{ data }">
                    <div class="inline-flex align-items-center">
                        <img v-if="data.avatar && data.avatar.url" :alt="data.firstName" :src="data.avatar.url" class="w-2rem mr-2" />
                        <Avatar v-else :label="data.firstName[0].toUpperCase()" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                    </div>
                </template>
            </Column>
            <Column headerStyle="min-width:10rem;">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" class="mr-2" severity="success" rounded @click="router.push(`/profiles/${slotProps.data.id}/edit`)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>
