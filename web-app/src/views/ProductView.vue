<script setup>
import { ref } from 'vue'
import { StarIcon, PlusIcon, MinusIcon } from '@heroicons/vue/20/solid'
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
  TabPanels
} from '@headlessui/vue'
import { useCartStore } from '@/stores/cartStore'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  slug: { type: String, required: true }
})

const slugArr = props.slug.split('-in-')

const cartStore = useCartStore()

const product = {
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
  tags: ['Recycling ', 'Green Tech'],
  createAt: 1718295686415,
  status: 'Draft',
  description:
    'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Duis ultricies lacus sed turpis tincidunt id. Sed tempus urna et pharetra. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Viverra justo nec ultrices dui sapien eget mi proin. Laoreet suspendisse interdum consectetur libero id faucibus.',
  material: { value: 'coton', name: 'Coton', description: 'Coton' },
  colors: [
    {
      slug: 'thalssa-in-red',
      class: 'text-red-700',
      price: 55,
      selectedClass: 'ring-gray-400',
      name: 'Red',
      sizes: [
        { value: 'Medium', name: 'M', description: 'M', quantity: 120 },
        { name: 'L', value: 'Large', quantity: 110, description: 'L' }
      ],
      reviews: { average: 4.7, totalCount: 860 },
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
      slug: 'thalssa-in-green',
      sizes: [{ value: 'Medium', description: 'M', name: 'M', quantity: 78 }],
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
      reviews: { average: 4.7, totalCount: 860 },
      price: 900,
      class: 'text-green-200'
    },
    {
      slug: 'thalssa-in-pink',
      price: 23,
      class: 'text-pink-200',
      reviews: { average: 4.7, totalCount: 860 },
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
      sizes: [{ quantity: 356, description: 'L', name: 'L', value: 'Large' }],
      name: 'Pink'
    }
  ],
  defaultColor: 'pink',
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

const addToCart = () => {
  const p = {
    id: product.id,
    name: product.name,
    price: selectedColor.value.price,
    color: selectedColor.value.name.toLowerCase(),
    size: selectedColor.value.selectedSize.value,
    reviews: selectedColor.value.reviews,
    image: selectedColor.value.images[0].src,
    quantity: 1
  }
  cartStore.addItem(p)
}
const selectedColor = ref(
  product.colors.find((c) => c.name.toLocaleLowerCase() === slugArr[slugArr.length - 1])
)
if (route.query.size && selectedColor.value) {
  selectedColor.value.selectedSize = selectedColor.value.sizes.find(
    (s) => s.value.toLocaleLowerCase() === route.query.size
  )
}

const onSelectSize = () => {
  const query = {}
  query.size = selectedColor.value.selectedSize.value.toLocaleLowerCase()
  router.push({ query: query })
}

const onSelectColor = () => {
  const params = {}
  params.slug = selectedColor.value.slug
  router.push({ params: params })
}
</script>
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="imageIndex in 4"
                :key="imageIndex"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }"
              >
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="`/images/products/${product.name.toLowerCase()}_${selectedColor.name.toLowerCase()}_${imageIndex}.png`"
                    class="h-full w-full object-cover object-center"
                  />
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
            <TabPanel v-for="imageIndex in 4" :key="imageIndex">
              <img
                :src="`/images/products/${product.name.toLowerCase()}_${selectedColor.name.toLowerCase()}_${imageIndex}.png`"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <div>
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">{{ product.name }} {{ slug }}</h1>
              <p class="text-xl font-medium text-gray-900">€ {{ selectedColor.price }} EUR</p>
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
                  <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >Voir toutes les {{ selectedColor.reviews.totalCount }} reviews</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- Color picker -->
          <div class="mt-6">
            <h2 class="text-sm font-medium text-gray-900">Color</h2>

            <fieldset aria-label="Choose a color" class="mt-3">
              <RadioGroup v-model="selectedColor" class="flex items-center space-x-3">
                <RadioGroupOption
                  as="template"
                  v-for="color in product.colors"
                  :key="color.name"
                  :value="color"
                  :aria-label="color.name"
                  @click="onSelectColor"
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
            </div>

            <fieldset aria-label="Choose a size" class="mt-2">
              <RadioGroup
                v-model="selectedColor.selectedSize"
                class="grid grid-cols-6 gap-3 sm:grid-cols-6"
              >
                <RadioGroupOption
                  as="template"
                  v-for="size in selectedColor.sizes"
                  :key="size.name"
                  :value="size"
                  :disabled="!size.quantity || size.quantity === 0"
                  v-slot="{ active, checked }"
                  @click="onSelectSize"
                >
                  <div
                    :class="[
                      size.quantity > 0
                        ? 'cursor-pointer focus:outline-none'
                        : 'cursor-not-allowed opacity-25',
                      active ? 'ring-2 ring-gray-500 ring-offset-2' : '',
                      checked
                        ? 'border-transparent bg-gray-600 text-white hover:bg-gray-700'
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
            :disabled="!selectedColor.selectedSize"
            @click="addToCart"
            class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Add to cart
          </button>

          <!-- Product details -->
          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Description</h2>

            <div class="prose prose-sm mt-4 text-gray-500" v-html="product.description" />
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
                        :class="[open ? 'text-gray-600' : 'text-gray-900', 'text-sm font-medium']"
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
                          class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
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
</template>
