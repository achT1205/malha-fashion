<script setup>
import { ref } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();

const product = ref({
    name: '',
    price: '',
    code: '',
    status: 'Draft',
    inStock: true,
    description: '',
    imageSrc: '',
    images: [],
    quantity: 0,
    colors: [],
    category: null,
    material: {},
    tags: [],
    model: {},
    occasions: [],
    collection: {},
    details: [
        {
            name: '',
            items: []
        }
    ]
});
const colorEntity = {
    name: '',
    class: '',
    selectedClass: '',
    reviews: { average: 0, totalCount: 0 },
    price: null,
    sizes: [],
    images: []
};
const sizeEnty = { name: '', quantity: 0 };
const selectedColor = ref(null);
const op = ref();
const colors = ref([
    { id: 1, name: 'Red', class: 'bg-red-700', selectedClass: 'ring-gray-400' },
    { id: 2, name: 'Pink', class: 'bg-pink-200', selectedClass: 'ring-gray-400' },
    { id: 3, name: 'Green', class: 'bg-green-200', selectedClass: 'ring-gray-900' }
]);
const categories = ref([
    {
        id: 1,
        name: 'Robes kabyles pour femme ',
        value: 'dress-woman',
        image: { src: '/images/collections/1.png', alt: 'BRobe de Fête ' },
        description: 'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.'
    },
    { id: 2, name: 'Robes kabyles pour filles', value: 'dress-girl', image: { src: '/images/collections/2.png', alt: 'BRobe de Fête ' }, description: 'Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.' },
    {
        id: 3,
        name: 'Burnous pour hommes',
        value: 'burnous-man',
        image: { src: '/images/collections/3.png', alt: 'BRobe de Fête ' },
        description: "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels."
    },
    {
        id: 4,
        name: 'Burnous pour garçons',
        value: 'burnous-boy',
        image: { src: '/images/collections/4.png', alt: 'BRobe de Fête ' },
        description: "Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe."
    },
    {
        id: 5,
        name: 'Sacs',
        value: 'bags',
        image: { src: '/images/collections/5.png', alt: 'BRobe de Fête ' },
        description: 'Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.'
    },
    {
        id: 6,
        name: 'Bijoux',
        value: 'jewelry',
        image: { src: '/images/collections/5.png', alt: 'BRobe de Fête ' },
        description: 'Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.'
    },
    {
        id: 7,
        name: 'Accessoires',
        value: 'accessories',
        image: { src: '/images/collections/5.png', alt: 'BRobe de Fête ' },
        description: 'Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.'
    }
]);
const sizes = ref([
    { id: 1, description: 'La taille Standard ...', value: 'standard', name: 'Standard' },
    { id: 2, description: 'La taille Grande Taille ...', value: 'big', name: 'Grande Taille' },
    { id: 3, description: 'La taille S/M ...', value: 's-m', name: 'S/M' },
    { id: 4, description: 'La taille M/L ...', value: 'm-l', name: 'M/L' },
    { id: 5, description: 'La taille L/XL ...', value: 'l-xl', name: 'L/XL' },
    { id: 6, description: 'La taille XL/XXL ...', value: 'xl-xxl', name: 'XL/XXL' },
    { id: 7, description: 'La taille S ...', value: 's', name: 'S' },
    { id: 8, description: 'La taille L ...', value: 'm', name: 'M' },
    { id: 9, description: 'La taille L ...', value: 'l', name: 'L' },
    { id: 10, description: 'La taille XL ...', value: 'xl', name: 'XL' },
    { id: 11, description: 'La taille XXL ...', value: 'xxl', name: 'XXL' }
]);
const toggle = (event) => {
    op.value.toggle(event);
};

const isCloth = () => {
    if (!product.value.category) return null;
    else if (product.value.category) {
        const cat = product.value.category;
        return cat.value !== 'accessories' && cat.value !== 'bags' && cat.value !== 'jewelry';
    } else return false;
};
const onColorSelect = () => {
    if (!colorExist(selectedColor.value)) {
        const newColor = { ...colorEntity };
        newColor.name = selectedColor.value.name;
        newColor.class = selectedColor.value.class;
        newColor.selectedClass = selectedColor.value.selectedClass;
        newColor.reviews = { average: 0, totalCount: 0 };

        product.value.colors.push(newColor);
    }
};

const colorExist = (color) => {
    return product.value.colors.some((_) => _.name === color.name);
};

const confirmDeleteColor = (index, color) => {
    confirm.require({
        message: `Voulz-vous vraiment supprimer la couleur ${color} ? `,
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
            product.value.colors.splice(index, 1);
            toast.add({ severity: 'info', summary: 'Confirmed', detail: `${color} was deleted`, life: 3000 });
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

/*---------------------------------------------------*/

const colorOptions = ref([
    { name: 'Black', background: 'bg-gray-900' },
    { name: 'Orange', background: 'bg-orange-500' },
    { name: 'Navy', background: 'bg-blue-500' }
]);

const selectedCategory = ref(null);
const selectedStock = ref(null);
const categoryOptions = ['Sneakers', 'Apparel', 'Socks'];
const fileUploaderRef = ref(null);
const uploadFiles = ref([]);

const onChooseUploadFiles = () => {
    fileUploaderRef.value.choose();
};
const onSelectedFiles = (event) => {
    uploadFiles.value = event.files;
};
const onRemoveFile = (removeFile) => {
    uploadFiles.value = uploadFiles.value.filter((file) => file.name !== removeFile.name);
};

const toggleColor = (color) => {
    const index = product.value.colors.indexOf(color);
    if (index > -1) {
        product.value.colors.splice(index, 1);
    } else {
        product.value.colors.push(color);
    }
};
const onRemoveTags = (tag) => {
    product.value.tags = product.value.tags.filter((t) => t !== tag);
};
</script>

<template>
    <div class="card">
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <span class="block text-900 font-bold text-xl mb-4">Create Product</span>
        <div class="grid grid-nogutter flex-wrap gap-3 p-fluid">
            <div class="col-12 lg:col-8">
                <div class="grid formgrid">
                    <div class="col-12 field">
                        <FloatLabel>
                            <InputText id="productName" type="text" v-model="product.name" />
                            <label for="productName">Product Name</label>
                        </FloatLabel>
                    </div>
                    <div class="col-12 lg:col-6 field">
                        <Dropdown :options="categories" optionLabel="name" v-model="product.category" placeholder="Select a category"></Dropdown>
                    </div>
                    <div class="col-12 lg:col-6 field" v-if="isCloth() === false">
                        <FloatLabel>
                            <InputText id="productPrice" type="text" v-model="product.price" />
                            <label for="productPrice">Price</label>
                        </FloatLabel>
                    </div>

                    <div class="col-12" v-if="product.category">
                        <div class="card">
                            <Toolbar>
                                <template v-slot:start>
                                    <Button type="button" icon="pi pi-plus" label="Add" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />
                                    <OverlayPanel ref="op" appendTo="body">
                                        <DataTable v-model:selection="selectedColor" :value="colors" selectionMode="single" :paginator="true" :rows="3" @row-select="onColorSelect">
                                            <Column field="name" header="Color" style="width: 20px">
                                                <template #body="slotProps">
                                                    <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center" :class="slotProps.data.class">
                                                        <i class="pi pi-check text-sm text-white z-5" v-if="colorExist(slotProps.data)"></i>
                                                    </div>
                                                </template>
                                            </Column>
                                            <Column header="Name" field="name" sortable style="width: 20px">
                                                <template #body="slotProps"> {{ slotProps.data.name }} </template>
                                            </Column>
                                        </DataTable>
                                    </OverlayPanel>
                                </template>
                                <template v-slot:end> <Button icon="pi pi-trash" class="mr-2" severity="warning" /> </template>
                            </Toolbar>
                            <TabView class="tabview-custom" v-if="product.colors.length">
                                <TabPanel v-for="(color, colorIndex) in product.colors" :key="color.name">
                                    <template #header>
                                        <div class="flex align-items-center gap-2">
                                            <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center" :class="color.class"></div>
                                            <span class="font-bold white-space-nowrap">{{ color.name }}</span>
                                            <i class="pi pi-times text-sm z-5" style="color: red" @click="confirmDeleteColor(colorIndex, color.name)"></i>
                                        </div>
                                    </template>
                                    <div class="m-0" v-if="isCloth() === true">
                                        <FloatLabel>
                                            <InputText :id="`${color.name}-price`" type="text" v-model="color.price" />
                                            <label :for="`${color.name}-price`">Price</label>
                                        </FloatLabel>
                                    </div>
                                    <div class="m-0" v-else>
                                        {{ color.name }}
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>

                        <Editor editorStyle="height: 320px"></Editor>

                        <div class="col-12 mt-3">
                            <FileUpload
                                ref="fileUploaderRef"
                                id="files-fileupload"
                                name="demo[]"
                                accept="image/*"
                                customUpload
                                multiple
                                auto
                                class="border-1 surface-border surface-card p-0 border-round"
                                :maxFileSize="1000000"
                                @select="onSelectedFiles"
                                :pt="{
                                    buttonbar: { class: 'hidden' },
                                    root: { style: { backgroundColor: 'rgba(255, 255, 255, 0.05)' } }
                                }"
                            >
                                <template v-if="uploadFiles.length > 0" #content>
                                    <div class="h-20rem m-1 border-round">
                                        <div v-for="file in uploadFiles" :key="file.name" class="w-full h-full relative border-round p-0" :style="{ cursor: 'copy' }">
                                            <div class="remove-file-wrapper h-full relative border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto">
                                                <img :src="file.objectURL" :alt="file.name" class="w-full h-full border-round" />
                                                <Button
                                                    icon="pi pi-times"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    :style="{ top: '-10px', right: '-10px', display: 'none', width: '3rem' }"
                                                    @click="onRemoveFile(file)"
                                                ></Button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <template #empty>
                                    <div v-if="uploadFiles.length < 1" class="h-20rem m-1 border-round">
                                        <div @click="onChooseUploadFiles" class="flex flex-column w-full h-full justify-content-center align-items-center cursor-pointer" :style="{ cursor: 'copy' }">
                                            <i class="pi pi-fw pi-file text-4xl text-primary"></i>
                                            <span class="block font-semibold text-900 text-lg mt-3">Drop or select a cover image</span>
                                        </div>
                                    </div>
                                </template>
                            </FileUpload>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full lg:w-3 xl:w-4 flex flex-column row-gap-3">
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Publish</span>
                    <div class="p-3">
                        <div class="surface-100 py-2 px-3 flex align-items-center border-round">
                            <span class="text-black-alpha-90 font-bold mr-3">Status:</span>
                            <span class="text-black-alpha-60 font-semibold">Draft</span>
                            <Button type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></Button>
                        </div>
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Tags</span>
                    <div class="p-3 flex flex-wrap gap-1">
                        <Chip v-for="(tag, i) in product.tags" :key="i" :label="tag" class="mr-2 py-2 px-3 text-900 font-bold surface-card border-1 surface-border" style="border-radius: 20px">
                            <span class="mr-3">{{ tag }}</span>
                            <span class="flex align-items-center justify-content-center border-1 surface-border bg-gray-100 border-circle cursor-pointer" :style="{ width: '1.5rem', height: '1.5rem' }" @click="onRemoveTags(tag)">
                                <i class="pi pi-fw pi-times text-black-alpha-60" :style="{ fontSize: '9px' }"></i> </span
                        ></Chip>
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Category</span>
                    <div class="p-3">
                        <Dropdown :options="categoryOptions" v-model="selectedCategory" placeholder="Select a category"></Dropdown>
                    </div>
                </div>

                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Colors</span>
                    <div class="p-3 flex">
                        <div
                            v-for="(color, i) in colorOptions"
                            :key="i"
                            class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center"
                            :class="color.background"
                            @click="toggleColor(color.name)"
                        >
                            <i v-if="product.colors.includes(color.name)" :key="i" class="pi pi-check text-sm text-white z-5"></i>
                        </div>
                    </div>
                </div>

                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Stock</span>
                    <div class="p-3">
                        <Dropdown :options="categoryOptions" v-model="selectedStock" placeholder="Select stock"></Dropdown>
                    </div>
                </div>
                <div class="border-1 surface-border flex justify-content-between align-items-center px-3 border-round">
                    <span class="text-900 font-bold p-3">In stock</span>
                    <InputSwitch v-model="product.inStock"></InputSwitch>
                </div>
                <div class="flex justify-content-between gap-3">
                    <Button class="flex-1" severity="danger" outlined label="Discard" icon="pi pi-fw pi-trash"></Button>
                    <Button class="flex-1" label="Publish" icon="pi pi-fw pi-check"></Button>
                </div>
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
