
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="mb-5">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div class="flex items-center">
                <a class="mr-2 text-sm font-medium text-gray-900">{{ product.genderCategory.label }}</a>
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
                  >{{ product.category.label }}</router-link
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
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in selectedColor.images"
                :key="image.id"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }"
              >
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img :src="image.src" alt="" class="h-full w-full object-cover object-center" />
                </span>
                <span
                  :class="[
                    selected ? 'ring-pink-500' : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="image in selectedColor.images" :key="image.id">
              <img
                :src="image.src"
                :alt="image.alt"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ selectedColor.price }}</p>
          </div>

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

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
          </div>

          <form class="mt-6">
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
                      v-tooltip.bottom="color.name"
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

            <div class="mt-10 flex">
              <button
                type="button"
                :class="[
                  available
                    ? 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500'
                    : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
                  'flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium text-white  focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
                ]"
              >
                Add to bag
              </button>
              <button
                type="button"
                class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              >
                <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                <span class="sr-only">Add to favorites</span>
              </button>
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>

            <div class="divide-y divide-gray-200 border-t">
              <Disclosure
                as="div"
                v-for="detail in product.details"
                :key="detail.name"
                v-slot="{ open }"
              >
                <h3>
                  <DisclosureButton
                    class="group relative flex w-full items-center justify-between py-6 text-left"
                  >
                    <span
                      :class="[open ? 'text-pink-600' : 'text-gray-900', 'text-sm font-medium']"
                      >{{ detail.name }}</span
                    >
                    <span class="ml-6 flex items-center">
                      <PlusIcon
                        v-if="!open"
                        class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <MinusIcon
                        v-else
                        class="block h-6 w-6 text-pink-400 group-hover:text-pink-500"
                        aria-hidden="true"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" class="prose prose-sm pb-6">
                  <ul role="list">
                    <li v-for="item in detail.items" :key="item">{{ item }}</li>
                  </ul>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

const product = {
  id: 1,
  name: 'Aline',
  price: '75',
  code: 'f230fh0g3',
  quantity: 24,
  image: {
    alt: 'Thalssa',
    src: '/images/collections/dresses/1.png'
  },
  colors: [
    {
      name: 'Red',
      class: 'bg-red-700',
      selectedClass: 'ring-gray-400',
      reviews: { href: '#', average: 4, totalCount: 117 },
      price: '78',
      sizes: [
        { name: 'XXS', quantity: 5 },
        { name: 'XS', quantity: 2 },
        { name: 'S', quantity: 6 },
        { name: 'M', quantity: 0 }
      ],
      images: [
        {
          src: '/images/products/1/red/5.png',
          alt: 'Thalssa rouge ...'
        },
        {
          src: '/images/products/1/red/1.png',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: '/images/products/1/red/2.png',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: '/images/products/1/red/3.png',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    },
    {
      name: 'Pink',
      class: 'bg-pink-200',
      selectedClass: 'ring-gray-400',
      reviews: { href: '#', average: 4, totalCount: 117 },
      price: '81',

      sizes: [
        { name: 'XXS', quantity: 2 },
        { name: 'S', quantity: 6 },
        { name: 'M', quantity: 0 }
      ],
      images: [
        {
          src: '/images/products/1/pink/4.png',
          alt: 'Thalssa rouge ...'
        },
        {
          src: '/images/products/1/pink/1.png',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: '/images/products/1/pink/2.png',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: '/images/products/1/pink/3.png',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    },
    {
      name: 'Green',
      class: 'bg-green-200',
      selectedClass: 'ring-gray-900',
      reviews: { href: '#', average: 4, totalCount: 117 },
      price: '78',

      sizes: [
        { name: 'XXS', quantity: 2 },
        { name: 'XS', quantity: 1 },
        { name: 'S', quantity: 2 },
        { name: 'XXL', quantity: 2 },
        { name: 'XXXL', quantity: 0 }
      ],
      images: [
        {
          src: '/images/products/1/green/4.png',
          alt: 'Thalssa rouge ...'
        },
        {
          src: '/images/products/1/green/1.png',
          alt: 'Model wearing plain black basic tee.'
        },
        {
          src: '/images/products/1/green/2.png',
          alt: 'Model wearing plain gray basic tee.'
        },
        {
          src: '/images/products/1/green/3.png',
          alt: 'Model wearing plain white basic tee.'
        }
      ]
    }
  ],
  genderCategory: {
    id: 1,
    name: 'woman',
    label: 'Femme'
  },
  category: {
    id: 5,
    name: 'dress',
    label: 'Robe de fete'
  },
  collection: {
    id: 1,
    name: 'Berbère Éclat ',
    image: {
      src: '/images/collections/dresses/1.png',
      alt: 'BRobe de Fête '
    },
    description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
  },
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  details: [
    {
      name: 'Highlights',
      items: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton'
      ]
    },
    {
      name: 'Shipping',
      items: [
        'Free shipping on orders over $300',
        'International shipping available',
        'Expedited shipping options',
        'Signature required upon delivery'
      ]
    },
    {
      name: 'Returns',
      items: [
        'Easy return requests',
        'Pre-paid shipping label included',
        '10% restocking fee for returns',
        '60 day return window'
      ]
    }
  ]
}

const selectedColor = ref(product.colors[0])
const selectedSize = ref()

const available = computed(() => selectedSize.value && selectedSize.value.quantity > 0)

watch(selectedColor, (newValue, oldValue) => {
  if (newValue !== oldValue) selectedSize.value = null
})
</script>