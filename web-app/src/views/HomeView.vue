<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const offers = [
  { name: 'Livraison gratuite', description: 'pour des achats de +150€' },
  { name: '35 jours', description: 'retour facile' },
  { name: 'Acheter maintenant', description: 'Payer plutard' }
]
const arrivals = [
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

const collections = [
  {
    id: 1,
    name: 'FEMMES',
    value: 'women-dresses'
  },
  {
    id: 2,
    name: 'HOMMES',
    value: 'men-burnous'
  },
  {
    id: 3,
    name: 'FILLES',
    value: 'girl-dresses'
  },
  {
    id: 4,
    name: 'GARCONS',
    value: 'boys-burnous'
  }
]
const accessories = [
  {
    id: 1,
    name: 'SACS BERBERES',
    value: 'bags'
  },
  {
    id: 2,
    name: 'BIJOUX KAYLES',
    value: 'jewelry'
  },
  {
    id: 3,
    name: 'BROCHES',
    value: 'broches'
  },
  {
    id: 4,
    name: 'FOULARDS',
    value: 'scarves'
  }
]

const onSelectSize = (event, size) => {
  event.stopPropagation()
  alert(JSON.stringify(size))
}

const onCollectionSelect = (collection) => {
  router.push(`collections/${collection.value}`)
}

const onProductSelect = (product) => {
  router.push('/products/side-stripe-swim-short-in-pale-blue')
}
</script>

<template>
  <div>
    <!-- Hero section -->
    <div class="relative">
      <!-- Decorative image and overlay -->
      <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
        <img
          src="@/assets/images/hero2.png"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>

      <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
            L'élégance et la tradition kabyle, par Malha Création.
          </h1>
          <div class="mt-10 flex items-center gap-x-6">
            <router-link
              class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              to="/collections/new-in"
            >
              SHOP NEW
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <main>
      <nav aria-label="Offers" class="order-last lg:order-first">
        <div class="mx-auto max-w-7xl lg:px-8">
          <ul
            role="list"
            class="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
          >
            <li v-for="offer in offers" :key="offer.name" class="flex flex-col">
              <a
                class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
              >
                <p class="text-sm text-gray-500">
                  {{ offer.name }}
                </p>
                <p class="font-semibold text-gray-900">{{ offer.description }}</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- new arrivals -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-16">
          <div class="flex items-center justify-center px-4 sm:px-6 lg:px-0">
            <h2 id="trending-heading" class="text-xl font-bold tracking-tight text-gray-900">
              NOUVELS ARRIVES
            </h2>
          </div>

          <div class="relative mt-8">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="product in arrivals"
                  :key="product.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                  @click="onProductSelect(product)"
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
                        <router-link
                          to="/products/essential-t-shirt-in-white"
                          class="pointer-events-none"
                        >
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </router-link>
                      </h3>
                      <h4 class="sr-only">Available colors</h4>
                      <ul
                        role="list"
                        class="mt-auto flex items-center justify-center space-x-3 pt-6"
                      >
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
              </ul>
            </div>
          </div>

          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center mt-8">
            <router-link
              class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
              to="/collections/new-in"
            >
              VOIR TOUT
            </router-link>
          </div>
        </div>
      </section>

      <!-- categories -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-4">
          <div class="relative">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="collection in collections"
                  :key="collection.id"
                  @click="onCollectionSelect(product)"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                      <img
                        :src="`/images/categories/${collection.value}.png`"
                        :alt="collection.name"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div
                      class="absolute inset-x-0 top-0 flex h-full items-end justify-center overflow-hidden rounded-lg p-4"
                    >
                      <div
                        class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                      >
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {{ collection.name }}
                        </h2>
                        <router-link
                          class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          :to="`/collections/${collection.value}`"
                        >
                          SHOP NOW
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="relative">
        <!-- Decorative image and overlay -->
        <div aria-hidden="true" class="absolute inset-0 overflow-hidden">
          <img
            src="@/assets/images/hero.png"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>

        <div class="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
          <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              Intensifiez votre jeu de mode
            </h1>
            <div class="mt-10 flex items-center gap-x-6">
              <router-link
                class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                to="/collections/men"
              >
                SHOP NOW
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- accessories -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-4">
          <div class="relative mt-2">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="accessory in accessories"
                  :key="accessory.id"
                  class="inline-flex w-64 flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200">
                      <img
                        :src="`/images/accessories/${accessory.value}.png`"
                        :alt="accessory.name"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div
                      class="absolute inset-x-0 top-0 flex h-full items-end justify-center overflow-hidden rounded-lg p-4"
                    >
                      <div
                        class="relative mx-auto flex max-w-3xl flex-col items-center text-center"
                      >
                        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                          {{ accessory.name }}
                        </h2>
                        <router-link
                          class="mt-8 inline-block border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                          :to="`/collections/${accessory.value}`"
                        >
                          SHOP NOW
                        </router-link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>