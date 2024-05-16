<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li>
            <div class="flex items-center">
              <a class="mr-2 text-sm font-medium text-gray-900">{{ product.category.label }}</a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <router-link
                class="mr-2 text-sm font-medium text-gray-900"
                :to="'/categories/1/?type=fete'"
                >{{ product.subcategory.label }}</router-link
              >
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>

          <li class="text-sm">
            <router-link
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              :to="`/products/${product.id}`"
              >{{ product.name }}</router-link
            >
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div
        class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8"
      >
        <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          <img
            :src="selectedColor.images[0].src"
            :alt="selectedColor.images[0].alt"
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="selectedColor.images[1].src"
              :alt="selectedColor.images[1].alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <img
              :src="selectedColor.images[2].src"
              :alt="selectedColor.images[2].alt"
              class="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div
          class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
        >
          <img
            :src="selectedColor.images[3].src"
            :alt="selectedColor.images[3].alt"
            class="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    selectedColor.reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ selectedColor.reviews.average }} out of 5 stars</p>
              <a
                :href="selectedColor.reviews.href"
                class="ml-3 text-sm font-medium text-pink-600 hover:text-pink-500"
                >{{ selectedColor.reviews.totalCount }} reviews</a
              >
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>

              <RadioGroup v-model="selectedColor" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                <div class="flex items-center space-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        color.selectedClass,
                        active && checked ? 'ring ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                      ]"
                    >
                      <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                      <span
                        aria-hidden="true"
                        :class="[
                          color.class,
                          'h-8 w-8 rounded-full border border-black border-opacity-10'
                        ]"
                      />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-pink-600 hover:text-pink-500"
                  >Size guide</a
                >
              </div>

              <RadioGroup v-model="selectedSize" class="mt-4">
                <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <RadioGroupOption
                    as="template"
                    v-for="size in selectedColor.sizes"
                    :key="size.name"
                    :value="size"
                    :disabled="size.quantity === 0"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size.quantity > 0
                          ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        active ? 'ring-2 ring-pink-500' : '',
                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                      ]"
                    >
                      <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                      <span
                        v-if="size.quantity > 0"
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-pink-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-md'
                        ]"
                        aria-hidden="true"
                      />
                      <span
                        v-else
                        aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vector-effect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </div>

            <button
              type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
          </form>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

const product = {
  price: '75',
  rating: 3.9,
  reviewCount: 117,
  code: 'f230fh0g3',
  image: 'bamboo-watch.jpg',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  imageSrc: '/images/accessoires/1.png',
  imageAlt: 'Thalssa',
  colors: [
    {
      name: 'White',
      class: 'bg-white',
      selectedClass: 'ring-gray-400',
      reviews : { href: '#', average: 4, totalCount: 117 },
      sizes: [
        { name: 'XXS', quantity: 2 },
        { name: 'XS', quantity: 2 },
        { name: 'S', quantity: 2 },
        { name: 'M', quantity: 0 }
      ],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    },
    {
      name: 'Gray',
      class: 'bg-gray-200',
      selectedClass: 'ring-gray-400',
      reviews : { href: '#', average: 4, totalCount: 117 },
      sizes: [{ name: 'XXS', quantity: 2 }],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    },
    {
      name: 'Black',
      class: 'bg-gray-900',
      selectedClass: 'ring-gray-900',
      reviews : { href: '#', average: 4, totalCount: 117 },
      sizes: [
        { name: 'XXS', quantity: 2 },
        { name: 'XS', quantity: 1 },
        { name: 'S', quantity: 2 },
        { name: 'XXL', quantity: 2 },
        { name: 'XXXL', quantity: 0 }
      ],
      images: [
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
          alt: 'Two each of gray, white, and black shirts laying flat.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    }
  ],
  id: 1,
  name: 'Aline',
  type: { name: 'dress', label: 'Robe' },
  gender: { name: 'women', label: 'Femme' },
  child: false,
  age: null,
  category: {
    id: 1,
    name: 'woman',
    label: 'Femme'
  },
  subcategory: {
    id: 5,
    name: 'dress',
    label: 'Robe de fete'
  },
  collection: {
    id: 1,
    name: 'Berbère Éclat ',
    imageSrc: '/images/collections/dresses/1.png',
    imageAlt: 'BRobe de Fête ',
    description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
  },
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton'
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.'
}

const selectedColor = ref(product.colors[0])
const selectedSize = ref(selectedColor.value.sizes[2])
</script>