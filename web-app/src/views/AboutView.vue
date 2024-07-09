<template>
  <div class="overflow-hidden relative">
    <!-- Carousel container    mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-2 lg:space-x-0-->
    <ul
      role="list"
      class="flex transition-transform duration-300 ease-in-out mx-4 space-x-8 sm:mx-6 lg:mx-0  lg:gap-x-2 lg:space-x-0"
      :style="{ transform: `translateX(-${currentPosition}%)` }"
    >
      <!-- Clone last 5 items at the beginning -->
      <li
        v-for="(product, index) in clonedEndItems"
        :key="'end-' + index"
        class="w-64 flex-shrink-0  text-center "
      >
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
            <img
              :src="`/images/p${product.id}.png`"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div
            class="absolute inset-x-0 top-0 flex h-5/6 items-end justify-start overflow-hidden rounded-lg p-4"
          >
            <span
              v-if="product.promo"
              class="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 group-hover:hidden transition-all"
              >{{ product.promo }}OFF</span
            >
            <span
              v-else
              class="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 group-hover:hidden transition-all"
              >NOUVEAU</span
            >
            <div
              class="bg-gray-100 shadow sm:rounded-lg w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="px-4 py-2">
                <div class="mt-1">
                  <h2 class="text-l font-bold tracking-tight text-gray-900">QUICK ADD</h2>
                  <div class="grid grid-cols-4 gap-2 mt-3">
                    <div v-for="size in product.sizes" :key="size.name">
                      <div
                        class="flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1 bg-white hover:bg-black hover:text-white cursor-pointer"
                        @click="onSelectSize($event, size)"
                      >
                        {{ size.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="mt-1 font-semibold text-gray-900">
              <router-link to="/products/essential-t-shirt-in-white" class="pointer-events-none">
                <span class="absolute inset-0" />
                {{ product.name }}
              </router-link>
            </h3>
            <h4 class="sr-only">Available colors</h4>
            <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
              <li
                v-for="color in product.availableColors"
                :key="color.name"
                class="h-4 w-4 rounded-full border border-black border-opacity-10"
                :style="{ backgroundColor: color.colorBg }"
              >
                <span class="sr-only">{{ color.name }}</span>
              </li>
            </ul>
            <p class="mt-5 text-gray-900">€{{ product.price }} EUR</p>
          </div>
        </div>
      </li>

      <!-- Original items -->
      <li v-for="(product, index) in items" :key="index" class="w-64 flex-shrink-0 text-center ">
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
            <img
              :src="`/images/p${product.id}.png`"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div
            class="absolute inset-x-0 top-0 flex h-5/6 items-end justify-start overflow-hidden rounded-lg p-4"
          >
            <span
              v-if="product.promo"
              class="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 group-hover:hidden transition-all"
              >{{ product.promo }}OFF</span
            >
            <span
              v-else
              class="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 group-hover:hidden transition-all"
              >NOUVEAU</span
            >
            <div
              class="bg-gray-100 shadow sm:rounded-lg w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="px-4 py-2">
                <div class="mt-1">
                  <h2 class="text-l font-bold tracking-tight text-gray-900">QUICK ADD</h2>
                  <div class="grid grid-cols-4 gap-2 mt-3">
                    <div v-for="size in product.sizes" :key="size.name">
                      <div
                        class="flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1 bg-white hover:bg-black hover:text-white cursor-pointer"
                        @click="onSelectSize($event, size)"
                      >
                        {{ size.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="mt-1 font-semibold text-gray-900">
              <router-link to="/products/essential-t-shirt-in-white" class="pointer-events-none">
                <span class="absolute inset-0" />
                {{ product.name }}
              </router-link>
            </h3>
            <h4 class="sr-only">Available colors</h4>
            <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
              <li
                v-for="color in product.availableColors"
                :key="color.name"
                class="h-4 w-4 rounded-full border border-black border-opacity-10"
                :style="{ backgroundColor: color.colorBg }"
              >
                <span class="sr-only">{{ color.name }}</span>
              </li>
            </ul>
            <p class="mt-5 text-gray-900">€{{ product.price }} EUR</p>
          </div>
        </div>
      </li>

      <!-- Clone first 5 items at the end -->
      <li
        v-for="(product, index) in clonedStartItems"
        :key="'start-' + index"
        class="w-64 flex-shrink-0  text-center "
      >
        <div class="group relative">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
            <img
              :src="`/images/p${product.id}.png`"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div
            class="absolute inset-x-0 top-0 flex h-5/6 items-end justify-start overflow-hidden rounded-lg p-4"
          >
            <span
              v-if="product.promo"
              class="inline-flex items-center rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700 group-hover:hidden transition-all"
              >{{ product.promo }}OFF</span
            >
            <span
              v-else
              class="inline-flex items-center rounded-full bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600 group-hover:hidden transition-all"
              >NOUVEAU</span
            >
            <div
              class="bg-gray-100 shadow sm:rounded-lg w-96 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="px-4 py-2">
                <div class="mt-1">
                  <h2 class="text-l font-bold tracking-tight text-gray-900">QUICK ADD</h2>
                  <div class="grid grid-cols-4 gap-2 mt-3">
                    <div v-for="size in product.sizes" :key="size.name">
                      <div
                        class="flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1 bg-white hover:bg-black hover:text-white cursor-pointer"
                        @click="onSelectSize($event, size)"
                      >
                        {{ size.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="mt-1 font-semibold text-gray-900">
              <router-link to="/products/essential-t-shirt-in-white" class="pointer-events-none">
                <span class="absolute inset-0" />
                {{ product.name }}
              </router-link>
            </h3>
            <h4 class="sr-only">Available colors</h4>
            <ul role="list" class="mt-auto flex items-center justify-center space-x-3 pt-6">
              <li
                v-for="color in product.availableColors"
                :key="color.name"
                class="h-4 w-4 rounded-full border border-black border-opacity-10"
                :style="{ backgroundColor: color.colorBg }"
                @click="onSelectColor($event, size)"
              >
                <span class="sr-only">{{ color.name }}</span>
              </li>
            </ul>
            <p class="mt-5 text-gray-900">€{{ product.price }} EUR</p>
          </div>
        </div>
      </li>
    </ul>

    <!-- Controls -->
    <button @click="prev" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2">
      Prev
    </button>
    <button @click="next" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2">
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

//const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'] // Example items

const items = [
  {
    id: 1,
    name: 'Tassadit',
    color: 'Black',
    price: '35',
    href: '#',
    promo: '5%',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ]
  },
  {
    id: 2,
    name: 'Tassadit',
    color: 'Black',
    price: '35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ]
  },
  {
    id: 3,
    name: 'Tassadit',
    color: 'Black',
    price: '35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ]
  },
  {
    id: 4,
    name: 'Tassadit',
    color: 'Black',
    price: '35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ]
  },
  {
    id: 4,
    name: 'Tassadit',
    color: 'Black',
    price: '35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false }
    ]
  }
]
const currentIndex = ref(0)
const isTransitioning = ref(false)

const totalItems = computed(() => items.length)
const clonedEndItems = computed(() => items.slice(-5))
const clonedStartItems = computed(() => items.slice(0, 5))
const currentPosition = computed(() =>
  isTransitioning.value ? currentIndex.value * 20 : calculatePosition()
)

const calculatePosition = () => {
  if (currentIndex.value < 0) {
    return (totalItems.value + currentIndex.value) * 20
  }
  if (currentIndex.value >= totalItems.value) {
    return (currentIndex.value - totalItems.value) * 20
  }
  return currentIndex.value * 20
}
const prev = () => {
  if (isTransitioning.value) return

  currentIndex.value--
  isTransitioning.value = true

  setTimeout(() => {
    if (currentIndex.value < 0) {
      currentIndex.value = totalItems.value - 1
    }
    isTransitioning.value = false
  }, 300)
}
const next = () => {
  if (isTransitioning.value) return

  currentIndex.value++
  isTransitioning.value = true

  setTimeout(() => {
    if (currentIndex.value >= totalItems.value) {
      currentIndex.value = 0
    }
    isTransitioning.value = false
  }, 300)
}
</script>

<style scoped>
.carousel-item {
  flex: 0 0 auto;
  width: 20%; /* 100% / 5 items */
}
</style>
