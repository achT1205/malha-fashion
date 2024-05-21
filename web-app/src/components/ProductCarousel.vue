
<template>
  <div class="card">
    <Carousel-T
      :value="products"
      :numVisible="numVisible"
      :numScroll="numScroll"
      :autoplayInterval="autoplayInterval"
      :responsiveOptions="responsiveOptions"
      :showNavigators="showNavigators"
      :showIndicators="showIndicators"
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
    type: Array,
    required: true
  },
  autoplayInterval: {
    type: Number,
    required: true,
    default: 6000
  },
  numVisible: {
    type: Number,
    required: true,
    default: 3
  },
  numScroll: {
    type: Number,
    required: true,
    default: 1
  },
  showNavigators: {
    type: Boolean,
    required: true,
    default: false
  },
  showIndicators: {
    type: Boolean,
    required: true,
    default: false
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
