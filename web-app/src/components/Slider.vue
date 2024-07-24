<template>
  <div class="relative w-full">
    <input
      v-if="!range"
      type="range"
      :min="min"
      :max="max"
      v-model="currentValue"
      @input="updateValue"
      class="slider"
    />
    <div v-else class="relative w-full h-6">
      <input
        type="range"
        :min="min"
        :max="max"
        v-model="currentValue[0]"
        @input="updateValue"
        class="slider"
        :style="{ position: 'absolute', zIndex: currentValue[0] > currentValue[1] ? 2 : 1 }"
      />
      <input
        type="range"
        :min="min"
        :max="max"
        v-model="currentValue[1]"
        @input="updateValue"
        class="slider"
        :style="{ position: 'absolute', zIndex: currentValue[0] > currentValue[1] ? 1 : 2 }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    value: {
      type: [Number, Array],
      required: true,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    range: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.range ? [...this.value] : this.value,
    };
  },
  watch: {
    value(newValue) {
      this.currentValue = this.range ? [...newValue] : newValue;
    },
    currentValue(newValue) {
      this.$emit('input', newValue);
    },
  },
  methods: {
    updateValue() {
      if (this.range) {
        this.currentValue = [Math.min(this.currentValue[0], this.currentValue[1]), Math.max(this.currentValue[0], this.currentValue[1])];
      }
    },
  },
};
</script>

<style>
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 6px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
}

.slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
}
</style>
