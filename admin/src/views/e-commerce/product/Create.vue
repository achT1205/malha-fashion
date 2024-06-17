<script setup>
import { ref, computed } from 'vue';
import { useConfirm } from 'primevue/useconfirm';
import { useToast } from 'primevue/usetoast';
import { useForm } from 'vee-validate';
import { useRoute, useRouter } from 'vue-router';
import { object, string } from 'yup';
import { useLocalStorage } from '@/composables/useLocalStorage';
import { useFormEditWithFileUpload } from '@/composables/useFormEditWithFileUpload';
import { useCollection, useFirestore, useDocument } from 'vuefire';
import { collection, doc } from 'firebase/firestore';

const route = useRoute();
const router = useRouter();
const db = useFirestore();
const collectionName = 'products';
const { createProductWithFiles, updateProductWithFiles } = useFormEditWithFileUpload(collectionName);

const shippings = useCollection(collection(db, 'shippings'));
const returnModes = useCollection(collection(db, 'returns'));
const materialAndCares = useCollection(collection(db, 'materialAndCares'));
const colors = useCollection(collection(db, 'colors'));
const categories = useCollection(collection(db, 'categories'));
const sizes = useCollection(collection(db, 'sizes'));
const collections = useCollection(collection(db, 'collections'));
const materials = useCollection(collection(db, 'materials'));
const models = useCollection(collection(db, 'models'));
const occasions = useCollection(collection(db, 'occasions'));
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
const product = route.params.id
    ? useDocument(doc(db, collectionName, route.params.id))
    : useLocalStorage(
          {
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
              details: {
                  highlights: [],
                  shippings: [],
                  returns: [],
                  materialAndCares: []
              }
          },
          'newProduct'
      );
const coverUploadFile = ref(null);
const otherUploadFiles = ref([]);
const selectedColor = ref(null);
const currentPanelColorIndex = ref(0);
const op = ref();

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
            if (product.value.colors[index].images) {
                imagesToBeDeletedFromStograge.value = product.value.colors[index].images.map((im) => im.path);
            }
            debugger;
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
    if (!route.params || !route.params.id) {
        if (!coverUploadFile.value) return 'Vous devez ajouter une image de couverture à ce produit.';
        for (let index = 0; index < product.value.colors.length; index++) {
            if (!otherUploadFiles.value[index] || otherUploadFiles.value[index].length === 0) {
                return 'Vous devez ajouter des images pour chaque couleur créée';
            }
        }
    }

    if (!product.value.description) return 'Vous devez definir une description pour ce produit.';
};

const onConfirmPublish = () => {
    const message = validateProduct();
    if (message) {
        toast.add({ severity: 'error', summary: 'Saisie invalide', detail: message, life: 3000 });
        return;
    }
    confirm.require({
        message: 'Etes-vous sur de vouloir publier ce produit ?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined',
        rejectLabel: 'Annuler',
        acceptLabel: 'Publier',
        accept: async () => {
            try {
                if (route.params.id) {
                    product.value.updatedAt = Date.now();
                    await updateProductWithFiles(route.params.id, product.value, coverUploadFile.value, otherUploadFiles.value, imagesToBeDeletedFromStograge.value).then(() => productSaved());
                } else {
                    product.value.createAt = Date.now();
                    await createProductWithFiles(product.value, coverUploadFile.value, otherUploadFiles.value).then(() => productSaved());
                }
            } catch (error) {
                console.log(error);
            }
        },
        reject: () => {}
    });
};

const productSaved = () => {
    toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    window.localStorage.removeItem('newProduct');
    router.push('/ecommerce/product/product-list');
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

const onRemoveOtherFileFromStorage = (path, colorIndex, index, isCover) => {
    imagesToBeDeletedFromStograge.value.push(path);
    if (!isCover) product.value.colors[colorIndex].images.splice(index, 1);
    else product.value.image = {};
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
watch(
    (sourceProduct) => {
        if (sourceProduct && sourceProduct.value) {
            product.value = { ...sourceProduct.value };
        }
    },
    { deep: true }
);*/

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
    <div class="card" v-if="product">
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
                                                    v-if="coverUploadFile && coverUploadFile.objectURL"
                                                    icon="pi pi-times"
                                                    :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    @click="onRemoveCoverFile()"
                                                ></Button>
                                                <Button
                                                    v-if="product.image.src"
                                                    icon="pi pi-times"
                                                    :style="{ top: '-10px', right: '-10px', display: 'none' }"
                                                    class="remove-button text-sm absolute justify-content-center align-items-center cursor-pointer"
                                                    rounded
                                                    @click="onRemoveOtherFileFromStorage(product.image.path, null, null, true)"
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
                                                                                @click="onRemoveOtherFileFromStorage(image.path, colorIndex, index, false)"
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
                            <Textarea :invalid="errors.description ? true : false" v-model="product.description" v-bind="descriptionAttrs" variant="filled" rows="5" cols="30" />
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
                                <Chips id="tag-chips" v-model="product.tags" class="w-full md:w-30rem" />
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
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Occasions</span>
                    <div class="p-3">
                        <MultiSelect v-model="product.occasions" display="chip" :options="occasions" optionLabel="name" placeholder="Selectionnez plusieurs" :maxSelectedLabels="3" class="w-full md:w-30rem" />
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Points forts</span>
                    <div class="p-3 flex flex-wrap gap-1">
                        <div class="flex-auto">
                            <FloatLabel>
                                <Chips id="tag-chips" v-model="product.details.highlights" class="w-full md:w-30rem" />
                                <label for="tag-chips">Taper un mot et appuer sur "Entrer" </label>
                            </FloatLabel>
                        </div>
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Expédition</span>
                    <div class="p-3">
                        <MultiSelect v-model="product.details.shippings" display="chip" :options="shippings" optionLabel="name" placeholder="Selectionnez plusieurs" :maxSelectedLabels="3" class="w-full md:w-30rem" />
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Retours</span>
                    <div class="p-3">
                        <MultiSelect v-model="product.details.returns" display="chip" :options="returnModes" optionLabel="name" placeholder="Selectionnez plusieurs" :maxSelectedLabels="3" class="w-full md:w-30rem" />
                    </div>
                </div>
                <div class="border-1 surface-border border-round">
                    <span class="text-900 font-bold block border-bottom-1 surface-border p-3">Matériel et entretien</span>
                    <div class="p-3">
                        <MultiSelect v-model="product.details.materialAndCares" display="chip" :options="materialAndCares" optionLabel="name" placeholder="Selectionnez plusieurs" :maxSelectedLabels="3" class="w-full md:w-30rem" />
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
