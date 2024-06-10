<script setup>
import { ref, computed } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { useForm } from 'vee-validate';

import { object, string } from 'yup';
import { useLocalStorage } from '@/composables/useLocalStorage';
import { useFormEditWithFileUpload } from '@/composables/useFormEditWithFileUpload';

const collectionName = 'products';
const { createProductWithFiles, items , removeFile} = useFormEditWithFileUpload(collectionName);

const { errors, defineField } = useForm({
    validationSchema: object({
        name: string().required('Le nom du produit est requis'),
        price: string().required('Le le prix du produit est requis'),
        quantity: string().required('La quantité du produit est requise'),
        description: string().required('Une description est requise')
    })
});

const [name, nameAttrs] = defineField('name', {
    validateOnModelUpdate: false
});
const [price, priceAttrs] = defineField('price', {
    validateOnModelUpdate: false
});
const [quantity, quantityAttrs] = defineField('quantity', {
    validateOnModelUpdate: false
});
const [description, descriptionAttrs] = defineField('description', {
    validateOnModelUpdate: false
});

const imagesToBeDeletedFromStograge = ref([]);

const confirm = useConfirm();
const toast = useToast();
const coverfileUploaderRef = ref(null);
const otherFileUploaderRefs = ref(null);
const isPrevSizeInvalidFomError = ref(false);
const product = useLocalStorage(
    {
        name: 'Thalssa',
        occasion: { id: 2, value: 'religious-celebrations', name: 'Fêtes religieuses', description: 'Fêtes religieuses (ex. : Aïd) ' },
        collection: { name: 'Montagnes de Djurdjura', description: 'Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.', imageSrc: '/images/collections/2.png', id: 2 },
        details: [{ name: '', items: [] }],
        valid: true,
        category: {
            id: 1,
            value: 'dress-woman',
            image: { src: '/images/collections/1.png', alt: 'BRobe de Fête ' },
            name: 'Robes kabyles pour femme ',
            description: 'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.'
        },
        image: { src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_1.png?alt=media&token=fdfb4808-4cc1-4cc1-b90b-0b98da7a29aa', path: 'products/covers/Thalssa_1.png' },
        tags: ['Recycle ', 'Paper '],
        description: '<p>desc</p>',
        material: { id: 2, description: 'Soie ', name: 'Soie', value: 'silk' },
        model: { name: 'Modèle revisité', description: 'Modèle revisité', id: 3, value: 'revisited-model' },
        occasions: [],
        status: 'Draft',
        colors: [
            {
                class: 'bg-green-200',
                sizes: [{ id: 10, value: 'xl', name: 'XL', description: 'La taille XL ...', quantity: 67 }],
                selectedClass: 'ring-gray-900',
                name: 'Green',
                images: [
                    { path: 'products/others/green_2.png', src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fothers%2Fgreen_2.png?alt=media&token=3832c4ff-9f98-4a85-9288-57511935637d' },
                    { src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fothers%2Fgreen_3.png?alt=media&token=983d3aa3-d148-419a-8fb2-840a6b0fe24d', path: 'products/others/green_3.png' }
                ],
                reviews: { average: 0, totalCount: 0 },
                price: 89
            },
            {
                images: [
                    { src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fothers%2Fpink_3.png?alt=media&token=32c1c508-582f-410b-baab-67132e070d5c', path: 'products/others/pink_3.png' },
                    { src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fothers%2Fpink_4.png?alt=media&token=49f49755-3cb4-410f-8f1c-0acea1426b7d', path: 'products/others/pink_4.png' }
                ],
                sizes: [{ value: 'xl-xxl', quantity: 89, description: 'La taille XL/XXL ...', name: 'XL/XXL', id: 6 }],
                class: 'bg-pink-200',
                reviews: { average: 0, totalCount: 0 },
                name: 'Pink',
                price: 90,
                selectedClass: 'ring-gray-400'
            }
        ]
    },
    /*{
        name: name,
        price: price,
        status: 'Draft',
        valid: false,
        description: description,
        image: {},
        quantity: quantity,
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
    }*/ 'newProduct'
);
const coverUploadFile = ref(null);
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
    { id: 1, description: 'La taille Standard ...', value: 'standard', name: 'Standard', disabled: true },
    { id: 2, description: 'La taille Grande Taille ...', value: 'big', name: 'Grande Taille', disabled: false },
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
const onColorSelect = (col) => {
    selectedColor.value = col;
    if (!colorExist(selectedColor.value)) {
        const newColor = {};
        newColor.name = selectedColor.value.name;
        newColor.class = selectedColor.value.class;
        newColor.selectedClass = selectedColor.value.selectedClass;
        newColor.reviews = { average: 0, totalCount: 0 };
        newColor.sizes = [];
        newColor.images = [];
        newColor.price = 0;
        product.value.colors.push(newColor);
    }
};

const onCategoryChange = () => {
    product.value.colors = [];
};

const onAddSize = (colorIndex) => {
    isPrevSizeInvalidFomError.value = false;
    const length = product.value.colors[colorIndex].sizes.length;
    let prevSize = null;
    if (length > 0) {
        prevSize = product.value.colors[colorIndex].sizes[length - 1];
    }
    if (length == 0 || (prevSize && prevSize.name && prevSize.quantity > 0)) {
        const newSize = {};
        newSize.name = '';
        newSize.quantity = 0;
        product.value.colors[colorIndex].sizes.push(newSize);
    } else {
        if (!prevSize.name || !prevSize.quantity > 0) {
            isPrevSizeInvalidFomError.value = true;
            toast.add({ severity: 'error', summary: 'Confirmed', detail: `Vous devez d'abord renplir tous les champs de la taille en cours `, life: 3000 });
            return;
        }
    }
};

const isOptionDisabled = (option) => option.disabled;

const onconfimRemoveSize = (colorIndex, sizeIndex) => {
    sizes.value;
    const size = product.value.colors[colorIndex].sizes[sizeIndex];
    confirm.require({
        message: `Voulz-vous vraiment supprimer la taille ${size.name} ? `,
        header: 'Danger Zone',
        icon: 'pi pi-info-circle',
        rejectLabel: 'Cancel',
        acceptLabel: 'Delete',
        rejectClass: 'p-button-secondary p-button-outlined',
        acceptClass: 'p-button-danger',
        accept: () => {
            product.value.colors[colorIndex].sizes.splice(sizeIndex, 1);
            toast.add({ severity: 'info', summary: 'Confirmed', detail: `${size.name} est supprimée avec succès`, life: 3000 });
        },
        reject: () => {}
    });
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
            toast.add({ severity: 'info', summary: 'Confirmed', detail: `${color} est supprimée avec succès`, life: 3000 });
        },
        reject: () => {}
    });
};

const validateProduct = () => {
    if (!product.value.name) return 'Vous devez choisir un nom pour ce produit.';
    if (!product.value.category) return 'Vous devez choir une catégorie pour ce produit.';
    if (!product.value.price && !isCloth()) return 'Vous devez definir un prix pour ce produit.';
    if (!product.value.quantity && !isCloth()) return 'Vous devez definir une quantité pour ce produit.';
    if (product.value.colors.length === 0) return 'Vous devez definir une couleur pour ce produit.';
    if (isCloth() && product.value.colors.some((color) => !color.price || color.price === 0)) return 'Vous devez definir un prix pour chaque couleur définie.';
    if (isCloth() && product.value.colors.some((color) => !color.sizes.length)) return 'Vous devez definir au moins une taille pour ce produit.';
    if (isCloth() && product.value.colors.some((color) => color.sizes.some((size) => !size.name || !size.quantity))) return 'Vous devez definir les tailles et leures quantité pour ce produit.';
    //if (!coverUploadFile.value) return 'Vous devez ajouter une image de couverture à ce produit.';
    for (let index = 0; index < product.value.colors.length; index++) {
        if (!otherUploadFiles.value[index] || otherUploadFiles.value[index].length === 0) {
            return 'Vous devez ajouter des images pour chaque couleur créée';
        }
    }

    if (!product.value.description) return 'Vous devez definir une description pour ce produit.';
};

const onConfirmPublish = () => {
    /* const message = validateProduct();
    if (message) {
        toast.add({ severity: 'error', summary: 'Saisie invalide', detail: message, life: 3000 });
        return;
    }*/
    confirm.require({
        message: 'Etes-vous sur de vouloir publier ce produit ?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Annuler',
        acceptLabel: 'Publier',
        accept: async () => {
            try {
                await createProductWithFiles(product.value, coverUploadFile.value, otherUploadFiles.value);
                toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            } catch (error) {
                console.log(error);
            }
        },
        reject: () => {}
    });
};
const onCoverSelectedFile = (event) => {
    coverUploadFile.value = event.files[0];
};
const onOtherSelectedFiles = (event) => {
    otherUploadFiles.value[currentPanelColorIndex.value] = event.files;
};

const onChooseCoverUploadFile = () => {
    coverfileUploaderRef.value.choose();
};

const onChooseOtherUploadFiles = () => {
    otherFileUploaderRefs.value[currentPanelColorIndex.value].choose();
};

const onRemoveCoverFile = () => {
    coverUploadFile.value = null;
};

const onRemoveOtherFile = (imageIndex) => {
    otherUploadFiles.value[currentPanelColorIndex.value].splice(imageIndex, 1);
};

const onRemoveOtherFileFromStorage = (image, colorIndex, index) => {
    imagesToBeDeletedFromStograge.value.push(image);
    product.value.colors[colorIndex].images.splice(index, 1);
};

const onSeletTabPanel = (index) => {
    currentPanelColorIndex.value = index;
};

const onSizeChange = () => {
    sizes.value.forEach((size) => {
        if (product.value.colors[currentPanelColorIndex.value].sizes.some((_) => _.name === size.name)) size.disabled = true;
        else size.disabled = false;
    });
};
/*
watch(product.value, (newProduct) => {
    onOpdateProduct(newProduct);
});*/

const computedSizes = computed(() => {
    const localeSizes = sizes.value;
    localeSizes.forEach((size) => {
        if (product.value.colors[currentPanelColorIndex.value].sizes.some((_) => _.name === size.name)) size.disabled = true;
        else size.disabled = false;
    });
    return localeSizes;
});
</script>

<template>
    <div class="card">
        <Toast />
        <ConfirmDialog></ConfirmDialog>
        <span class="block text-900 font-bold text-xl mb-4">Nouveau produit</span>
        <div class="grid grid-nogutter flex-wrap gap-3 p-fluid">
            <div class="col-12 lg:col-8">
                <div class="grid formgrid">
                    <div class="field col">
                        <div class="card">
                            <FileUpload
                                ref="coverfileUploaderRef"
                                :id="`cover-fileupload`"
                                name="demo[]"
                                url="./upload.php"
                                accept="image/*"
                                customUpload
                                auto
                                class="upload-button-hidden w-full"
                                invalidFileSizeMessage="Invalid File Size"
                                invalidFileTypeMessage="Invalid File Type"
                                :maxFileSize="5000000"
                                @select="onCoverSelectedFile"
                                :pt="{
                                    buttonbar: { class: 'hidden' },
                                    content: { class: 'border-none' }
                                }"
                            >
                                <template #content>
                                    <div v-if="coverUploadFile || (product.image && product.image.src)" class="w-full py-3" :style="{ cursor: '' }">
                                        <div class="flex flex-wrap">
                                            <div class="remove-file-wrapper h-full relative w-12rem h-12rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto" :style="{ padding: '1px' }">
                                                <img :src="coverUploadFile && coverUploadFile.objectURL ? coverUploadFile.objectURL : product.image.src" :alt="product.name" class="w-full h-full border-round shadow-2" />

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
                                    <div v-if="!coverUploadFile && !product.image.src" @click="onChooseCoverUploadFile()" class="w-full py-3" :style="{ cursor: 'copy' }">
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

                    <div class="col-12 field">
                        <div class="flex-auto">
                            <label for="product-name" class="font-bold block mb-2">Nom du produit</label>
                            <InputText :invalid="errors.name ? true : false" id="product-name" v-bind="nameAttrs" type="text" v-model="product.name" />
                        </div>
                        <small class="text-red-700" v-show="errors.name">{{ errors.name }}.</small>
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
                            <InputNumber :invalid="errors.price ? true : false" v-bind="priceAttrs" v-model="product.price" inputId="product-price" mode="currency" currency="EUR" locale="de-DE" />
                        </div>
                        <small class="text-red-700" v-show="errors.price">{{ errors.price }}.</small>
                    </div>
                    <div class="col-12 lg:col-4 field" v-if="isCloth() === false">
                        <div class="flex-auto">
                            <label for="product-quantity" class="font-bold block mb-2">Mettre la quantité totale</label>
                            <InputNumber :invalid="errors.quantity ? true : false" v-bind="quantityAttrs" inputId="integeronly" id="product-quantity" type="text" v-model="product.quantity" />
                        </div>
                        <small class="text-red-700" v-show="errors.quantity">{{ errors.quantity }}.</small>
                    </div>
                    <div class="col-12" v-if="product.category">
                        <div class="card">
                            <Toolbar>
                                <template v-slot:start>
                                    <Button type="button" icon="pi pi-plus" label="Ajouter une couleur" @click="toggle" aria-haspopup="true" aria-controls="overlay_panel" />
                                    <OverlayPanel ref="op" appendTo="body">
                                        <ul class="m-0 p-0 list-none flex flex-column gap-2 w-full md:w-10rem">
                                            <li
                                                v-for="col in colors"
                                                :key="col.name"
                                                :class="[
                                                    'p-2 hover:surface-hover border-round border-1 border-transparent transition-all transition-duration-200 flex align-items-center justify-content-between cursor-pointer',
                                                    { 'border-primary': selectedColor?.name === col.name }
                                                ]"
                                                @click="onColorSelect(col)"
                                            >
                                                <div class="flex align-items-center gap-2">
                                                    <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle flex justify-content-center align-items-center" :class="col.class">
                                                        <i class="pi pi-check text-sm text-white z-5" v-if="colorExist(col)"></i>
                                                    </div>
                                                    <span class="font-bold">{{ col.name }}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </OverlayPanel>
                                </template>
                                <template v-slot:end> <Button icon="pi pi-trash" class="mr-2" severity="warning" /> </template>
                            </Toolbar>
                            <TabView class="tabview-custom" v-if="product.colors.length" @update:activeIndex="onSeletTabPanel">
                                <TabPanel v-for="(color, colorIndex) in product.colors" :key="color.name">
                                    <template #header>
                                        <div class="flex align-items-center gap-2">
                                            <div class="w-2rem h-2rem mr-2 border-1 surface-border border-circle cursor-pointer flex justify-content-center align-items-center" :class="color.class">
                                                <i class="pi pi-check text-sm text-white z-5" v-show="currentPanelColorIndex === colorIndex"></i>
                                            </div>
                                            <span class="font-bold white-space-nowrap">{{ color.name }}</span>
                                            <i v-show="currentPanelColorIndex === colorIndex" class="pi pi-times text-sm z-5" style="color: red" @click="confirmDeleteColor(colorIndex, color.name)"></i>
                                        </div>
                                    </template>
                                    <div class="m-0" v-if="isCloth() === true">
                                        <div class="flex-auto">
                                            <label :for="`${color.name}-price`" class="font-bold block mb-2">Fixer un prix</label>
                                            <InputNumber v-model="color.price" :id="`${color.name}-price`" :inputId="`${color.name}-price`" mode="currency" currency="EUR" locale="de-DE" />
                                        </div>
                                        <div class="mt-3"></div>
                                        <Fieldset>
                                            <template #legend>
                                                <div class="flex align-items-center pl-2 cursor-pointer" @click="onAddSize(colorIndex)">
                                                    <Button icon="pi pi-plus" severity="info" rounded outlined aria-label="Ajouter une taille" />
                                                    <span class="font-bold ml-2">Ajouter une taille</span>
                                                </div>
                                            </template>
                                            <div v-for="(sizeItem, sizeIndex) in color.sizes" :key="sizeItem.name" class="mt-4">
                                                <Button icon="pi pi-times" severity="danger" rounded outlined aria-label="Cancel" @click="onconfimRemoveSize(colorIndex, sizeIndex)" />
                                                <Fieldset :legend="sizeItem.name ? sizeItem.name : 'Nouvelle taille'" :toggleable="true">
                                                    <div class="formgrid grid">
                                                        <div class="field col">
                                                            <div class="flex-auto">
                                                                <label :for="`${sizeItem.name}-size`" class="font-bold block mb-2">Taille</label>
                                                                <Dropdown
                                                                    :invalid="isPrevSizeInvalidFomError && sizeIndex === color.sizes.length - 1 && (!color.sizes[sizeIndex] || !color.sizes[sizeIndex].name)"
                                                                    :id="`${sizeItem.name}-size`"
                                                                    :options="sizes"
                                                                    optionLabel="name"
                                                                    filter
                                                                    :value="color.sizes[sizeIndex]"
                                                                    v-model="color.sizes[sizeIndex]"
                                                                    placeholder="Choisir une taille"
                                                                    :optionDisabled="isOptionDisabled"
                                                                    @update="onSizeChange()"
                                                                >
                                                                </Dropdown>
                                                                <small class="text-red-700" v-show="isPrevSizeInvalidFomError && sizeIndex === color.sizes.length - 1 && (!color.sizes[sizeIndex] || !color.sizes[sizeIndex].name)"
                                                                    >Vous devez selectionner une taille. onSizeChange</small
                                                                >
                                                            </div>
                                                        </div>
                                                        <div class="field col">
                                                            <div class="flex-auto">
                                                                <label :for="`${sizeItem.name}-quantity`" class="font-bold block mb-2">Mettre la quantité totale</label>
                                                                <InputNumber
                                                                    :invalid="isPrevSizeInvalidFomError && sizeIndex === color.sizes.length - 1 && !sizeItem.quantity"
                                                                    inputId="integeronly"
                                                                    :id="`${sizeItem.name}-quantity`"
                                                                    v-model="sizeItem.quantity"
                                                                />
                                                                <small class="text-red-700" v-show="isPrevSizeInvalidFomError && sizeIndex === color.sizes.length - 1 && !sizeItem.quantity">Vous devez selectionner une taille.</small>
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
                                                            <div v-if="(otherUploadFiles[colorIndex] && otherUploadFiles[colorIndex].length) || color.images.length > 0" class="w-full py-3" :style="{ cursor: '' }">
                                                                <div class="flex flex-wrap">
                                                                    <template v-if="color.images.length">
                                                                        <div
                                                                            class="remove-file-wrapper h-full relative w-12rem h-12rem border-3 border-transparent border-round hover:bg-primary transition-duration-100 cursor-auto"
                                                                            :style="{ padding: '1px' }"
                                                                            v-for="(image, index) in color.images"
                                                                            :key="index"
                                                                        >
                                                                            <img :src="image.src" :alt="`${product.name}_${color.name}_other_${index}`" class="w-full h-full border-round shadow-2" />

                                                                            <Button
                                                                                icon="pi pi-times"
                                                                                :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                                                class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                                                rounded
                                                                                @click="onRemoveOtherFileFromStorage(image, colorIndex, index)"
                                                                            ></Button>
                                                                        </div>
                                                                    </template>
                                                                    <template v-if="otherUploadFiles[colorIndex] && otherUploadFiles[colorIndex].length">
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
                                                                    </template>
                                                                </div>
                                                            </div>
                                                        </template>
                                                        <template #empty>
                                                            <div v-if="!otherUploadFiles[colorIndex] && color.images.length === 0" @click="onChooseOtherUploadFiles()" class="w-full py-3" :style="{ cursor: 'copy' }">
                                                                <div class="h-full flex flex-column justify-content-center align-items-center">
                                                                    <i class="pi pi-upload text-900 text-2xl mb-3"></i>
                                                                    <span class="font-bold text-900 text-xl mb-3">Images pour la couleure: {{ color.name }}</span>
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
                            <Editor :invalid="errors.description ? true : false" v-bind="descriptionAttrs" id="product-description" v-model="product.description" editorStyle="height: 180px"></Editor>
                            <small class="text-red-700" v-show="errors.description">{{ errors.description }}.</small>
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
