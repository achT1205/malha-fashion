
<template>
  <div class="card">
    <Carousel-T
      :value="collections"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="6000"
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
