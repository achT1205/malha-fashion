<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HorizontalScrollImages',
  setup() {
    const images = ref([
      { src: 'https://via.placeholder.com/150', alt: 'Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 2' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 3' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 4' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 5' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 1' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 2' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 3' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 4' },
      { src: 'https://via.placeholder.com/150', alt: 'Image 5' }
      // Add more images as needed
    ])

    return {
      images
    }
  }
})
</script>

<template>
  <div class="container mx-auto py-4">
    <div class="overflow-x-auto whitespace-nowrap hide-scrollbar">
      <div class="inline-block" v-for="(image, index) in images" :key="index">
        <img :src="image.src" :alt="image.alt" class="w-48 h-48 object-cover m-2" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add this CSS to your global styles or within a <style> block in your component */

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
</style>