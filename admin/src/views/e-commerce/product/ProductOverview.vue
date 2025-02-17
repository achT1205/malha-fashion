<script setup>
import { ref, watchEffect } from 'vue';
import { useUtils } from '@/composables/useUtils';
import { useRoute } from 'vue-router';
import { useFirestore, useDocument } from 'vuefire';
import { doc } from '@firebase/firestore';

const { getProductPrice, getTotalReviews, getTotalAvrage } = useUtils();

const collectionName = 'products';
const route = useRoute();
const selectedColorIndex = ref(0);
const selectedImageIndex = ref(0);
const selectedColor = ref();
const db = useFirestore();
const sourceProduct = useDocument(doc(db, collectionName, route.params.id));
const product = ref(null);

const setColor = (index) => {
    selectedColorIndex.value = index;
    selectedColor.value = product.value.colors[index];
};

const setSelectedImageIndex = (index) => {
    selectedImageIndex.value = index;
};

watchEffect(() => {
    product.value = { ...sourceProduct.value };
    if (product.value.name) {
        selectedColor.value = product.value.colors[0];
    }
});

const isCloth = () => {
    if (!product.value.category) return null;
    else if (product.value.category) {
        const cat = product.value.category;
        return cat.value !== 'accessories' && cat.value !== 'bags' && cat.value !== 'jewelry';
    } else return false;
};
</script>

<template>
    <div class="card" v-if="product && product.name">
        <div class="grid mb-7">
            <div class="col-12 lg:col-7" v-if="selectedColor && selectedColor.images.length">
                <div class="flex">
                    <div class="flex flex-column w-2 justify-content-between" :style="{ rowGap: '1rem' }">
                        <img
                            v-for="(image, i) in selectedColor.images"
                            :alt="i"
                            :key="i"
                            :src="image.src"
                            class="w-full cursor-pointer border-2 border-transparent transition-colors transition-duration-150 border-round'"
                            :class="{ 'border-primary': selectedImageIndex === i }"
                            @click="setSelectedImageIndex(i)"
                        />
                    </div>
                    <div class="pl-3 w-10 flex">
                        <img :alt="selectedColor.name" :src="selectedColor.images[selectedImageIndex].src" class="w-full border-2 border-transparent border-round" />
                    </div>
                </div>
            </div>
            <div class="col-12 lg:col-4 py-3 lg:pl-6">
                <div class="flex align-items-center text-xl font-medium text-900 mb-4">{{ product.name }}</div>
                <div class="flex align-items-center justify-content-between mb-5">
                    <span class="text-900 font-medium text-3xl block">{{ selectedColor && selectedColor.price ? selectedColor.price : getProductPrice(product) }}</span>
                    <div class="flex align-items-center">
                        <Rating :modelValue="getTotalAvrage(product)" :readonly="true" :cancel="false" />
                        <span class="text-sm ml-3">
                            <b class="text-900 mr-1">{{ getTotalReviews(product) }}</b> <span class="text-500"></span>reviews
                        </span>
                    </div>
                </div>

                <div class="font-bold text-900 mb-3">Color</div>
                <div class="flex align-items-center mb-5">
                    <div
                        v-for="(color, colorIndex) in product.colors"
                        :key="color.name"
                        :class="['w-2rem h-2rem flex-shrink-0 border-circle mr-3 cursor-pointer border-2 surface-border transition-all transition-duration-300', color.class]"
                        :style="{ boxShadow: selectedColorIndex === colorIndex ? `0 0 0 0.2rem var(--${color.name.toLowerCase()}-500)` : '' }"
                        @click="setColor(colorIndex)"
                    ></div>
                </div>

                <div class="mb-3 flex align-items-center justify-content-between" v-if="isCloth()">
                    <span class="font-bold text-900">Size/Quantity</span>
                </div>
                <div class="grid grid-nogutter align-items-center mb-5" v-if="selectedColor">
                    <div
                        v-for="size in selectedColor.sizes"
                        :key="size.name"
                        class="col h-3rem border-1 border-300 text-900 inline-flex justify-content-center align-items-center flex-shrink-0 border-round mr-3 transition-duration-150 transition-colors"
                    >
                        <span class="mr-2">{{ size.name }}</span
                        >/<span class="ml-2">{{ size.quantity }}</span>
                    </div>
                </div>

                <div class="grid mt-5">
                    <div class="col-12 lg:col-6">
                        <div class="font-bold text-900 mb-3">Statu</div>
                        <div class="flex align-items-center mb-5">
                            <div>{{ product.status }}</div>
                        </div>

                        <div class="font-bold text-900 mb-3">Catégorie</div>
                        <div class="flex align-items-center mb-5">
                            <div>{{ product.category.name }}</div>
                        </div>

                        <div v-if="product.collection" class="font-bold text-900 mb-3">Collection</div>
                        <div v-if="product.collection" class="flex align-items-center mb-5">
                            <div>{{ product.collection.name }}</div>
                        </div>
                    </div>
                    <div class="col-12 lg:col-6">
                        <div v-if="product.material" class="font-bold text-900 mb-3">Matière</div>
                        <div class="flex align-items-center mb-5">
                            <div v-if="product.material">{{ product.material.name }}</div>
                        </div>

                        <div v-if="product.model" class="font-bold text-900 mb-3">Modèle</div>
                        <div v-if="product.model" class="flex align-items-center mb-5">
                            <div>{{ product.model.name }}</div>
                        </div>

                        <div v-if="product.occasions" class="font-bold text-900 mb-3">Occasion</div>
                        <div v-if="product.occasions" class="flex align-items-center mb-5">
                            <Chip v-for="(occasion, index) in product.occasions" :key="index" :label="occasion.name" />
                        </div>
                    </div>
                </div>

                <div v-if="product.tags" class="mb-3 flex align-items-center justify-content-between">
                    <span class="font-bold text-900">Tags/Mots clés</span>
                </div>
                <div v-if="product.tags" class="flex flex-wrap gap-2">
                    <Chip v-for="(tag, index) in product.tags" :key="index" :label="tag" />
                </div>
            </div>
        </div>

        <div class="text-900 font-bold text-3xl mb-4 mt-2">Description</div>
        <p class="line-height-3 text-600 p-0 mx-0 mt-0 mb-4">
            {{ product.description }}
        </p>

        <div class="grid">
            <div class="col-12 lg:col-3">
                <span class="text-900 block font-medium mb-3 font-bold">Les points fotrs</span>
                <ul class="py-0 pl-3 m-0 text-600 mb-3">
                    <li class="mb-2" v-for="(highlight, index) in product.details.highlights" :key="index">{{ highlight }}.</li>
                </ul>
            </div>
            <div class="col-12 lg:col-3">
                <span class="text-900 block mb-3 font-bold">Expédition</span>
                <ul class="py-0 pl-3 m-0 text-600 mb-3">
                    <li class="mb-2" v-for="(shipping, index) in product.details.shippings" :key="index">{{ shipping.name }}.</li>
                </ul>
            </div>
            <div class="col-12 lg:col-3">
                <span class="text-900 block mb-3 font-bold">Retour</span>
                <ul class="py-0 pl-3 m-0 text-600 mb-3">
                    <li class="mb-2" v-for="(item, index) in product.details.returns" :key="index">{{ item.name }}.</li>
                </ul>
            </div>
            <div class="col-12 lg:col-3">
                <span class="text-900 block mb-3 font-bold">Matière et soin</span>
                <ul class="py-0 pl-3 m-0 text-600 mb-3">
                    <li class="mb-2" v-for="(item, index) in product.details.materialAndCares" :key="index">
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
