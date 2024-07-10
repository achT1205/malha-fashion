
<template>
  <div class="bg-white">
    <div class="pb-16 pt-6 sm:pb-24">
      <nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="breadcrumb in product1.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-4 text-sm font-medium text-gray-900">{{
                breadcrumb.name
              }}</a>
              <svg viewBox="0 0 6 20" aria-hidden="true" class="h-5 w-auto text-gray-300">
                <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              >{{ product1.name }}</a
            >
          </li>
        </ol>
      </nav>
      <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">{{ product1.name }}</h1>
              <p class="text-xl font-medium text-gray-900">{{ selectedColor.price }}</p>
            </div>
            <!-- Reviews -->
            <div class="mt-4">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <p class="text-sm text-gray-700">
                  {{ selectedColor.reviews.average }}
                  <span class="sr-only"> out of 5 stars</span>
                </p>
                <div class="ml-1 flex items-center">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      selectedColor.reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
                <div class="ml-4 flex">
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >See all {{ selectedColor.reviews.totalCount }} reviews</a
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Image gallery -->
          <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
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
                      <img :src="image.src" class="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      :class="[
                        selected ? 'ring-indigo-500' : 'ring-transparent',
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
                    class="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </TabPanel>
              </TabPanels>
            </TabGroup>
          </div>

          <div class="mt-8 lg:col-span-5">
            <form>
              <!-- Color picker -->
              <div>
                <h2 class="text-sm font-medium text-gray-900">Color</h2>

                <fieldset aria-label="Choose a color" class="mt-2">
                  <RadioGroup v-model="selectedColor" class="flex items-center space-x-3">
                    <RadioGroupOption
                      as="template"
                      v-for="color in product1.colors"
                      :key="color.name"
                      :value="color"
                      :aria-label="color.name"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          color.class,
                          active && checked ? 'ring ring-offset-1' : '',
                          !active && checked ? 'ring-2' : '',
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-current focus:outline-none'
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          class="h-4 w-4 rounded-full border border-black border-opacity-10 bg-current"
                        />
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>

              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >See sizing chart</a
                  >
                </div>

                <fieldset aria-label="Choose a size" class="mt-2">
                  <RadioGroup v-model="selectedColor.selectedSize" class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <RadioGroupOption
                      as="template"
                      v-for="size in selectedColor.sizes"
                      :key="size.name"
                      :value="size"
                      :disabled="!size.quantity || size.quantity === 0"
                      v-slot="{ active, checked }"
                    >
                      <div
                        :class="[
                          size.quantity > 0
                            ? 'cursor-pointer focus:outline-none'
                            : 'cursor-not-allowed opacity-25',
                          active ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                          checked
                            ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                            : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                          'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1'
                        ]"
                      >
                        {{ size.name }}
                      </div>
                    </RadioGroupOption>
                  </RadioGroup>
                </fieldset>
              </div>

              <button
                type="submit"
                class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">Description</h2>

              <div class="prose prose-sm mt-4 text-gray-500" v-html="product1.description" />
            </div>

            <div class="mt-8 border-t border-gray-200 pt-8">
              <h2 class="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

              <div class="prose prose-sm mt-4 text-gray-500">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { StarIcon, PlusIcon , MinusIcon} from '@heroicons/vue/20/solid'
import { CurrencyDollarIcon, GlobeAmericasIcon } from '@heroicons/vue/24/outline'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  RadioGroupLabel
} from '@headlessui/vue'

const product1 = {
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  updatedAt: 1718312207906,
  id: 1,
  collection: {
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/collections%2F1718055580716_1.png?alt=media&token=4b2cf17f-0d7c-409a-adf3-a4477ba5603f',
    imagePath: 'collections/1718055580716_1.png',
    name: 'Nouvels arrivés',
    description:
      "Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.",
    id: 'Qr6Jr1FczDJQxiGgzNNm'
  },
  occasions: [{ value: 'fete', description: 'Fete', name: 'Fete' }],
  tags: ['Recycling ', 'Gree Tech'],
  createAt: 1718295686415,
  status: 'Draft',
  description:
    'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
  material: { value: 'coton', name: 'Coton', description: 'Coton' },
  colors: [
    {
      class: 'text-red-700',
      price: 55,
      selectedClass: 'ring-gray-400',
      name: 'Red',
      sizes: [
        { value: 'm', name: 'M', description: 'M', quantity: 120 },
        { name: 'L', value: 'l', quantity: 110, description: 'L' }
      ],
      reviews: { totalCount: 566, average: 4 },
      images: [
        {
          path: 'products/others/red_1.png',
          src: '/images/p1.png'
        },
        {
          path: 'products/others/red_6.png',
          src: '/images/p1.png'
        }
      ]
    },
    {
      sizes: [{ value: 'm', description: 'M', name: 'M', quantity: 78 }],
      selectedClass: 'ring-gray-900',
      name: 'Green',
      images: [
        {
          path: 'products/others/green_1.png',
          src: '/images/p2.png'
        },
        {
          src: '/images/p2.png',
          path: 'products/others/green_2.png'
        }
      ],
      reviews: { average: 0, totalCount: 0 },
      price: 900,
      class: 'text-green-200'
    },
    {
      price: 23,
      class: 'text-pink-200',
      reviews: { totalCount: 500, average: 4 },
      selectedClass: 'ring-gray-400',
      images: [
        {
          path: 'products/others/pink_1718312207909_1.png',
          src: '/images/p3.png'
        },
        {
          path: 'products/others/pink_1718312207910_4.png',
          src: '/images/p3.png'
        },
        {
          src: '/images/p3.png',
          path: 'products/others/pink_1718312207910_2.png'
        },
        {
          path: 'products/others/pink_1718312207910_3.png',
          src: '/images/p3.png'
        }
      ],
      sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'l' }],
      name: 'Pink'
    }
  ],
  image: {
    path: 'products/covers/Thalssa_robe-fete.png',
    src: 'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/products%2Fcovers%2FThalssa_robe-fete.png?alt=media&token=9649c63f-48a0-4fed-b7ea-d5019442dbd9'
  },
  name: 'Thalssa',
  model: {
    description: 'Classic',
    name: 'Classic',
    value: 'classic'
  },
  details: {
    shippings: [
      {
        name: 'Hand cut and sewn locally',
        description: 'Hand cut and sewn locally',
        id: '2kQV0rtFX3XR9bQF4t5w'
      },
      {
        description: 'Ultra-soft 100% cotton',
        name: 'Ultra-soft 100% cotton'
      }
    ],
    returns: [
      {
        id: '1IKXabGDxHO3futz7Wit',
        name: 'La poste',
        description: 'La poste'
      },
      { description: 'DHL', name: 'DHL' }
    ],
    highlights: ['Durable ', 'Qualité prix'],
    materialAndCares: [
      {
        description: 'Only the best materials',
        name: 'Only the best materials'
      },
      {
        name: 'Ethically and locally made',
        description: 'Ethically and locally made'
      }
    ]
  },
  category: {
    imagePath: 'categories/1718055707845_9.png',
    id: 'DkKF35gOLsiKs2wwNbE3',
    name: 'Robes kabyles pour femme',
    description:
      'Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.',
    imageSrc:
      'https://firebasestorage.googleapis.com/v0/b/halha-fashion.appspot.com/o/categories%2F1718055707845_9.png?alt=media&token=0fd3adb9-0c40-4be8-a120-e9387d40256f'
  },
  valid: true
}

const product = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' }
  ],
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.'
    }
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' }
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: false }
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors'
  ]
}
const policies = [
  {
    name: 'International delivery',
    icon: GlobeAmericasIcon,
    description: 'Get your order in 2 years'
  },
  { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" }
]

const selectedColor = ref(product1.colors[0])
const selectedSize = ref(selectedColor.value.sizes[2])

console.log(selectedColor)
</script>