
<template>
  <div class="card">
    <Carousel-T
      :value="products"
      :numVisible="4"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
    >
      <template #item="slotProps">
        <ProductCardWithQuickView :product="slotProps.data" />
      </template>
    </Carousel-T>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCardWithQuickView from './ProductCardWithQuickView.vue'

const props = defineProps({
  products: {
    type: [Array, null],
    required: true
  }
})

const products = ref(props.products)
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])
</script>
