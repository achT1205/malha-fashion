<template>
  <div class="p-4">
    <Slider :value="sliderValue" :min="0" :max="100" :range="isRange" />
    <button @click="toggleRange" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Toggle Range Mode</button>
    <p class="mt-4">Current Value: {{ sliderValue }}</p>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      sliderValue: 50,
      isRange: false,
    };
  },
  methods: {
    toggleRange() {
      this.isRange = !this.isRange;
      this.sliderValue = this.isRange ? [20, 80] : 50;
    },
  },
};
</script>

<style>
/* Add any global styles if needed */
</style>
