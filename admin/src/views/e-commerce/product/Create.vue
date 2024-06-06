<script setup>
import { ref } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';

const confirm = useConfirm();
const toast = useToast();
const coverfileUploaderRefs = ref(null);
const otherFileUploaderRefs = ref(null);
const product = ref({
    name: '',
    price: 0,
    code: '',
    status: 'Draft',
    valid: false,
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
const coverUploadFiles = ref([]);
const otherUploadFiles = ref([]);
const selectedColor = ref(null);
const currentPanelColorIndex = ref(0);
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
const collections = ref([
    {
        id: 1,
        rating: 5,
        name: 'Berbère Éclat ',
        imageSrc: '/images/collections/1.png',
        description: 'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.'
    },
    { id: 2, name: 'Montagnes de Djurdjura', imageSrc: '/images/collections/2.png', description: 'Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.' },
    {
        id: 3,
        rating: 5,
        name: 'Lune de Kabylie',
        imageSrc: '/images/collections/3.png',
        description: "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels."
    },
    {
        id: 4,
        rating: 5,
        name: 'Azur Amazigh ',
        imageSrc: '/images/collections/4.png',
        description: "Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe."
    },
    {
        id: 5,
        rating: 5,

        name: 'Echo des Aït',
        imageSrc: '/images/collections/5.png',
        description: 'Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.'
    },
    {
        id: 6,
        rating: 5,

        name: 'Souveraines Berbères',
        imageSrc: '/images/collections/6.png',
        description: "Célébrant les figures féminines puissantes de l'histoire kabyle, cette collection allie force et finesse dans chaque pièce."
    },
    {
        id: 7,
        rating: 5,

        name: 'Jardin de Numidie ',
        imageSrc: '/images/collections/7.png',
        description: "Inspirée par l'histoire et la nature de Kabylie, cette collection intègre des motifs floraux et des éléments naturels."
    },
    { id: 8, name: 'Voile de Yemma Gouraya', image: { src: '/images/collections/8.png', alt: 'BRobe de Fête ' }, description: 'Inspiré par la légendaire montagne qui surplombe la ville de Béjaïa, symbolisant protection et majesté.' },
    {
        id: 9,
        rating: 5,
        name: "Jardins d'Agadez",
        imageSrc: '/images/collections/8.png',
        description: 'Évoquant les designs floraux et organiques typiques de la bijouterie kabyle, cette collection rend hommage à la nature et à la fertilité des terres berbères.'
    }
]);
const materials = ref([
    {
        id: 1,
        name: 'Coton ',
        value: 'coton',
        description: 'Coton'
    },
    {
        id: 2,
        name: 'Soie',
        value: 'silk',
        description: 'Soie '
    },
    {
        id: 3,
        name: 'Laine',
        value: 'wool',
        description: 'Laine'
    }
]);
const models = ref([
    {
        id: 1,
        name: 'Modèle classique ',
        value: 'classic-model',
        description: 'Modèle classique'
    },
    {
        id: 2,
        name: 'Modèle moderne',
        value: 'modern-model',
        description: 'Modèle moderne '
    },
    {
        id: 3,
        name: 'Modèle revisité',
        value: 'revisited-model',
        description: 'Modèle revisité'
    },
    {
        id: 3,
        name: 'Modèle personnalisé',
        value: 'custum-model',
        description: 'Modèle personnalisé'
    }
]);
const occasions = ref([
    {
        id: 1,
        name: 'Mariages ',
        value: 'mariages',
        description: 'Mariages'
    },
    {
        id: 2,
        name: 'Fêtes religieuses',
        value: 'religious-celebrations',
        description: 'Fêtes religieuses (ex. : Aïd) '
    },
    {
        id: 3,
        name: 'Célébrations traditionnelles ',
        value: 'traditional-celebrations',
        description: 'Célébrations traditionnelles (fetes culturelles)'
    },
    {
        id: 4,
        name: 'Événements spéciaux ',
        value: 'special-events',
        description: 'Événements spéciaux'
    }
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
        const newColor = {};
        newColor.name = selectedColor.value.name;
        newColor.class = selectedColor.value.class;
        newColor.selectedClass = selectedColor.value.selectedClass;
        newColor.reviews = { average: 0, totalCount: 0 };
        newColor.sizes = [];
        newColor.images = [];
        product.value.colors.push(newColor);
    }
};

const onCategoryChange = () => {
    product.value.colors = [];
};

const onAddSize = (colorIndex) => {
    const length = product.value.colors[colorIndex].sizes.length;
    let prevSize = null;
    if (length > 0) {
        prevSize = product.value.colors[colorIndex].sizes[length - 1];
    }
    if (length === 0 || (prevSize && prevSize.name && prevSize.quantity > 0)) {
        const newSize = {};
        newSize.name = '';
        newSize.quantity = 0;
        product.value.colors[colorIndex].sizes.push(newSize);
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
        reject: () => {}
    });
};

const onConfirmPublish = () => {
    confirm.require({
        message: 'Etes-vous sur de vouloir publier ce produit ?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Annuler',
        acceptLabel: 'Publier',
        accept: () => {
            toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        },
        reject: () => {}
    });
};
const onCoverSelectedFiles = (event) => {
    coverUploadFiles.value[currentPanelColorIndex.value] = event.files[0];
};
const onOtherSelectedFiles = (event) => {
    otherUploadFiles.value[currentPanelColorIndex.value] = event.files;
};

const onChooseCoverUploadFiles = () => {
    coverfileUploaderRefs.value[currentPanelColorIndex.value].choose();
};

const onChooseOtherUploadFiles = () => {
    otherFileUploaderRefs.value[currentPanelColorIndex.value].choose();
};

const onRemoveCoverFile = () => {
    coverUploadFiles.value[currentPanelColorIndex.value] = null;
};

const onRemoveOtherFile = (imageIndex) => {
    otherUploadFiles.value[currentPanelColorIndex.value].splice(imageIndex, 1);
};

const onSeletTabPanel = (index) => {
    currentPanelColorIndex.value = index;
};
</script>

<template>
    <div class="card">
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <span class="block text-900 font-bold text-xl mb-4">Nouveau produit</span>
        <div class="grid grid-nogutter flex-wrap gap-3 p-fluid">
            <div class="col-12 lg:col-8">
                <div class="grid formgrid">
                    <div class="col-12 field">
                        <div class="flex-auto">
                            <label for="product-name" class="font-bold block mb-2">Nom du produit</label>
                            <InputText id="product-name" type="text" v-model="product.name" />
                        </div>
                    </div>
                    <div class="col-12 field" :class="isCloth() === false ? 'lg:col-4' : 'lg:col-6'">
                        <div class="flex-auto">
                            <label for="product-category" class="font-bold block mb-2">Catégorie</label>
                            <Dropdown id="product-category" @change="onCategoryChange" :options="categories" optionLabel="name" v-model="product.category" placeholder="Selectionner une catégorie"></Dropdown>
                        </div>
                    </div>
                    <div class="col-12 lg:col-4 field" v-if="isCloth() === false">
                        <div class="flex-auto">
                            <label for="product-price" class="font-bold block mb-2">Fixer un prix</label>
                            <InputNumber v-model="product.price" inputId="product-price" mode="currency" currency="EUR" locale="de-DE" />
                        </div>
                    </div>
                    <div class="col-12 lg:col-4 field" v-if="isCloth() === false">
                        <div class="flex-auto">
                            <label for="product-quantity" class="font-bold block mb-2">Mettre la quantité totale</label>
                            <InputNumber inputId="integeronly" id="product-quantity" type="text" v-model="product.quantity" />
                        </div>
                    </div>

                    <div class="col-12" v-if="product.category">
                        <div class="card">
                            <Toolbar>
                                <template v-slot:start>
                                    <Button type="button" icon="pi pi-plus" label="Ajouter une couleur" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />
                                    <OverlayPanel ref="op" appendTo="body">
                                        <DataTable v-model:selection="selectedColor" :value="colors" selectionMode="single" :paginator="true" :rows="3" @row-select="onColorSelect">
                                            <Column field="class" header="Color" style="width: 20px">
                                                <template #body="slotProps">
                                                    <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center" :class="slotProps.data.class">
                                                        <i class="pi pi-check text-sm text-white z-5" v-if="colorExist(slotProps.data)"></i>
                                                    </div>
                                                </template>
                                            </Column>
                                            <Column header="Nom" field="name" sortable style="width: 20px">
                                                <template #body="slotProps"> {{ slotProps.data.name }} </template>
                                            </Column>
                                        </DataTable>
                                    </OverlayPanel>
                                </template>
                                <template v-slot:end> <Button icon="pi pi-trash" class="mr-2" severity="warning" /> </template>
                            </Toolbar>
                            <TabView class="tabview-custom" v-if="product.colors.length" @update:activeIndex="onSeletTabPanel">
                                <TabPanel v-for="(color, colorIndex) in product.colors" :key="color.name">
                                    <template #header>
                                        <div class="flex align-items-center gap-2">
                                            <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center" :class="color.class">
                                                <i class="pi pi-check text-sm text-white z-5" v-if="currentPanelColorIndex === colorIndex"></i>
                                            </div>
                                            <span class="font-bold white-space-nowrap">{{ color.name }}</span>
                                            <i class="pi pi-times text-sm z-5" style="color: red" @click="confirmDeleteColor(colorIndex, color.name)"></i>
                                        </div>
                                    </template>
                                    <div class="m-0" v-if="isCloth() === true">
                                        <div class="flex-auto">
                                            <label :for="`${color.name}-price`" class="font-bold block mb-2">Fixer un prix</label>
                                            <InputNumber v-model="product.price" :id="`${color.name}-price`" :inputId="`${color.name}-price`" mode="currency" currency="EUR" locale="de-DE" />
                                        </div>
                                        <div class="mt-3"></div>
                                        <Fieldset>
                                            <template #legend>
                                                <div class="flex align-items-center pl-2">
                                                    <Button icon="pi pi-plus" @click="onAddSize(colorIndex)" severity="info" rounded outlined aria-label="Ajouter une taille" />
                                                    <span class="font-bold ml-2">Ajouter une taille</span>
                                                </div>
                                            </template>
                                            <div v-for="(sizeItem, sizeIndex) in color.sizes" :key="sizeItem.name" class="mt-4">
                                                <Fieldset :legend="sizeItem.name ? sizeItem.name : 'Nouvelle taille'" :toggleable="true">
                                                    <div class="formgrid grid">
                                                        <div class="field col">
                                                            <div class="flex-auto">
                                                                <label :for="`${sizeItem.name}-size`" class="font-bold block mb-2">Taille</label>
                                                                <Dropdown :id="`${sizeItem.name}-size`" :options="sizes" optionLabel="name" v-model="color.sizes[sizeIndex]" placeholder="Choisir une taille"></Dropdown>
                                                            </div>
                                                        </div>
                                                        <div class="field col">
                                                            <div class="flex-auto">
                                                                <label :for="`${sizeItem.name}-quantity`" class="font-bold block mb-2">Mettre la quantité totale</label>
                                                                <InputNumber inputId="integeronly" :id="`${sizeItem.name}-quantity`" v-model="sizeItem.quantity" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fieldset>
                                            </div>
                                        </Fieldset>
                                    </div>
                                    <div class="mt-3">
                                        <div class="formgrid grid">
                                            <div class="field col">
                                                <div class="card">
                                                    <FileUpload
                                                        ref="coverfileUploaderRefs"
                                                        :id="`covers-fileupload-${color.name}`"
                                                        name="demo[]"
                                                        url="./upload.php"
                                                        accept="image/*"
                                                        customUpload
                                                        auto
                                                        class="upload-button-hidden w-full"
                                                        invalidFileSizeMessage="Invalid File Size"
                                                        invalidFileTypeMessage="Invalid File Type"
                                                        :maxFileSize="5000000"
                                                        @select="onCoverSelectedFiles"
                                                        :pt="{
                                                            buttonbar: { class: 'hidden' },
                                                            content: { class: 'border-none' }
                                                        }"
                                                    >
                                                        <template #content>
                                                            <div v-if="coverUploadFiles[colorIndex] || product.imageSrc" class="w-full py-3" :style="{ cursor: '' }">
                                                                <div class="flex flex-wrap">
                                                                    <div
                                                                        class="remove-file-wrapper h-full relative w-12rem h-12rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto"
                                                                        :style="{ padding: '1px' }"
                                                                    >
                                                                        <img
                                                                            :src="coverUploadFiles[colorIndex] && coverUploadFiles[colorIndex].objectURL ? coverUploadFiles[colorIndex].objectURL : product.imageSrc"
                                                                            :alt="`${product.name}_${color.name}`"
                                                                            class="w-full h-full border-round shadow-2"
                                                                        />

                                                                        <Button
                                                                            icon="pi pi-times"
                                                                            :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                                            class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                                            rounded
                                                                            @click="onRemoveCoverFile()"
                                                                        ></Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #empty>
                                                            <div v-if="!coverUploadFiles[colorIndex] && !product.imageSrc" @click="onChooseCoverUploadFiles()" class="w-full py-3" :style="{ cursor: 'copy' }">
                                                                <div class="h-full flex flex-column justify-content-center align-items-center">
                                                                    <i class="pi pi-upload text-900 text-2xl mb-3"></i>
                                                                    <span class="font-bold text-900 text-xl mb-3">Image de couverture</span>
                                                                    <span class="font-medium text-600 text-md text-center">Déposer ou sélectionner une image</span>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </FileUpload>
                                                </div>
                                            </div>
                                            <div class="field col">
                                                <div class="card">
                                                    <FileUpload
                                                        ref="otherFileUploaderRefs"
                                                        :id="`others-fileupload-${color.name}`"
                                                        name="demo[]"
                                                        url="./upload.php"
                                                        accept="image/*"
                                                        customUpload
                                                        multiple
                                                        auto
                                                        class="upload-button-hidden w-full"
                                                        invalidFileSizeMessage="Invalid File Size"
                                                        invalidFileTypeMessage="Invalid File Type"
                                                        :maxFileSize="5000000"
                                                        @select="onOtherSelectedFiles"
                                                        :pt="{
                                                            buttonbar: { class: 'hidden' },
                                                            content: { class: 'border-none' }
                                                        }"
                                                    >
                                                        <template #content>
                                                            <div v-if="otherUploadFiles[colorIndex] && otherUploadFiles[colorIndex].length" class="w-full py-3" :style="{ cursor: '' }">
                                                                <div class="flex flex-wrap">
                                                                    <div
                                                                        class="remove-file-wrapper h-full relative w-12rem h-12rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto"
                                                                        :style="{ padding: '1px' }"
                                                                        v-for="(item, index) in otherUploadFiles[colorIndex]"
                                                                        :key="index"
                                                                    >
                                                                        <img :src="item.objectURL" :alt="`${product.name}_${color.name}_other_${index}`" class="w-full h-full border-round shadow-2" />

                                                                        <Button
                                                                            icon="pi pi-times"
                                                                            :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                                            class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                                            rounded
                                                                            @click="onRemoveOtherFile(index)"
                                                                        ></Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #empty>
                                                            <div v-if="!otherUploadFiles[colorIndex]" @click="onChooseOtherUploadFiles()" class="w-full py-3" :style="{ cursor: 'copy' }">
                                                                <div class="h-full flex flex-column justify-content-center align-items-center">
                                                                    <i class="pi pi-upload text-900 text-2xl mb-3"></i>
                                                                    <span class="font-bold text-900 text-xl mb-3">Images suplémentaires</span>
                                                                    <span class="font-medium text-600 text-md text-center">Déposer ou sélectionner des images</span>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </FileUpload>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabView>
                        </div>
                        <div class="flex-auto">
                            <label for="product-description" class="font-bold block mb-2">Description</label>
                            <Editor id="product-description" v-model="product.description" editorStyle="height: 180px"></Editor>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full lg:w-3 xl:w-4 flex flex-column row-gap-3">
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Publication</span>
                    <div class="p-3">
                        <div class="surface-100 py-2 px-3 flex align-items-center border-round">
                            <span class="text-black-alpha-90 font-bold mr-3">Statu:</span>
                            <span class="text-black-alpha-60 font-semibold">{{ product.status }}</span>
                            <Button disabled type="button" icon="pi pi-fw pi-pencil" class="ml-auto" text rounded></Button>
                        </div>
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Tags</span>
                    <div class="p-3 flex flex-wrap gap-1">
                        <div class="flex-auto">
                            <FloatLabel>
                                <Chips id="tag-chips" v-model="product.tags" />
                                <label for="tag-chips">Taper un mot et appuer sur "Entrer" </label>
                            </FloatLabel>
                        </div>
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Collection</span>
                    <div class="p-3">
                        <Dropdown :options="collections" optionLabel="name" v-model="product.collection" placeholder="Selectioner une collection">
                            <template #option="slotProps">
                                <div class="flex align-items-center">
                                    <img :alt="slotProps.option.name" :src="slotProps.option.imageSrc" class="mr-2" style="width: 32px" />
                                    <div>{{ slotProps.option.name }}</div>
                                </div>
                            </template>
                        </Dropdown>
                    </div>
                </div>

                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Matière</span>
                    <div class="p-3">
                        <Dropdown :options="materials" optionLabel="name" v-model="product.material" placeholder="Selectioner une matière"> </Dropdown>
                    </div>
                </div>

                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Modèle</span>
                    <div class="p-3">
                        <Dropdown :options="models" optionLabel="name" v-model="product.model" placeholder="Selectioner un modèle"> </Dropdown>
                    </div>
                </div>

                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Occasion</span>
                    <div class="p-3">
                        <Dropdown :options="occasions" optionLabel="name" v-model="product.occasion" placeholder="Selectioner une occasion"> </Dropdown>
                    </div>
                </div>
                <div class="border-1 surface-border flex justify-content-between align-items-center px-3 border-round">
                    <span class="text-900 font-bold p-3">Modérer</span>
                    <InputSwitch v-model="product.valid"></InputSwitch>
                </div>
                <div class="flex justify-content-between gap-3">
                    <Button class="flex-1" severity="info" outlined label="Draft" icon="pi pi-fw pi-save"></Button>
                    <Button class="flex-1" label="Publier" icon="pi pi-fw pi-check" @click="onConfirmPublish"></Button>
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
