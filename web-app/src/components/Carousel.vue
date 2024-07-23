<template>
  <div class="relative">
    <div class=" grid grid-cols-3 overflow-hidden" :style="carouselWidth">
      <div
        v-for="(product, index) in visibleProducts"
        :key="index"
        class="flex-shrink-0"
        :style="itemWidth"
      >
        <slot :product="product" />
      </div>
    </div>
    <button
      v-if="showNavigators"
      @click="prev"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white"
    >
      Prev
    </button>
    <button
      v-if="showNavigators"
      @click="next"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    value: {
      type: Array,
      required: true
    },
    numVisible: {
      type: Number,
      default: 3
    },
    numScroll: {
      type: Number,
      default: 1
    },
    responsiveOptions: {
      type: Object,
      default: () => ({})
    },
    circular: {
      type: Boolean,
      default: false
    },
    autoplayInterval: {
      type: Number,
      default: 3000
    },
    showNavigators: {
      type: Boolean,
      default: true
    },
    allowAutoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null
    }
  },
  computed: {
    visibleProducts() {
      let products = []
      const start = this.currentIndex
      const end = this.currentIndex + this.numVisible

      for (let i = start; i < end; i++) {
        const index = i % this.value.length
        products.push(this.value[index])
      }

      return products
    },
    itemWidth() {
      return `width: ${100 / this.numVisible}%`
    },
    carouselWidth() {
      return `width: ${this.numVisible * 100}%`
    }
  },
  methods: {
    next() {
      if (this.circular) {
        this.currentIndex = (this.currentIndex + this.numScroll) % this.value.length
      } else {
        this.currentIndex = Math.min(
          this.currentIndex + this.numScroll,
          this.value.length - this.numVisible
        )
      }
    },
    prev() {
      if (this.circular) {
        this.currentIndex =
          (this.currentIndex - this.numScroll + this.value.length) % this.value.length
      } else {
        this.currentIndex = Math.max(this.currentIndex - this.numScroll, 0)
      }
    },
    startAutoplay() {
      if (this.allowAutoplay && this.autoplayInterval > 0) {
        this.intervalId = setInterval(() => {
          this.next()
        }, this.autoplayInterval)
      }
    },
    stopAutoplay() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    }
  },
  mounted() {
    this.startAutoplay()
  },
  beforeUnmount() {
    this.stopAutoplay()
  }
}
</script>


