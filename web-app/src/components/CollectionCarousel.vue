
<template>
  <div class="card">
    <Carousel-T
      :value="collections"
      :numVisible="numVisible"
      :numScroll="numScroll"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="autoplayInterval"
      :showNavigators="showNavigators"
      :showIndicators="showIndicators"
    >
      <template #item="slotProps">
        <CollectionCard :collection="slotProps.data" />
      </template>
    </Carousel-T>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CollectionCard from './CollectionCard.vue'

const props = defineProps({
  collections: {
    type: [Array, null],
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
    type: Number,
    required: true,
    default: 1
  },
  showIndicators: {
    type: Number,
    required: true,
    default: 1
  }
})

const collections = ref(props.collections)
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
