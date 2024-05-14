<template>
  <main>
    <div class="relative overflow-hidden">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              L'Art de la Robe Kabyle
            </h1>
            <p class="mt-4 text-xl text-gray-500">
              L'élégance et la tradition kabyle, par Malha Création.
            </p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div
                  class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8"
                >
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="../assets/images/hero/bournous-fete.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/burnous-maison.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/robe-maison.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/robe-fete.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/robe-sortie.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/garcon1.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="../assets/images/hero/fille-fete.png"
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >Voir les collections</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div aria-labelledby="category-heading" class="bg-gray-50">
      <div class="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Nos collections</h2>
        <p class="mt-4 text-base text-gray-500">
          Pour chaque occasion, nos collections de robes kabyles pour femmes célèbrent les
          traditions et le style unique de la mode kabyle, offrant une variété d'options.
        </p>

        <div class="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <router-link
            v-for="collection in collections"
            :key="collection.name"
            :to="`/collections/${collection.id}`"
            class="group block"
          >
            <div
              aria-hidden="true"
              class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
            >
              <img
                :src="collection.imageSrc"
                :alt="collection.imageAlt"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <h3 class="mt-4 text-base font-semibold text-gray-900">{{ collection.name }}</h3>
            <p class="mt-2 text-sm text-gray-500">{{ collection.description }}</p>
          </router-link>
        </div>
      </div>
    </div>
    <section aria-labelledby="sale-heading">
      <div class="overflow-hidden pt-32 sm:pt-14">
        <div class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="relative pb-16 pt-48 sm:pb-24">
              <div>
                <h2
                  id="sale-heading"
                  class="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Code #PROMO201
                  <br />
                  15% de remise.
                </h2>
              </div>

              <div
                class="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-16 sm:translate-x-0"
              >
                <div class="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div class="flex-shrink-0">
                      <img
                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="../assets/images/hero/robe-fete.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div class="flex-shrink-0">
                      <img
                        class="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                        src="../assets/images/hero/bournous-fete.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section aria-labelledby="trending-heading">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div class="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
            Les tendances du moment
          </h2>
          <a
            href="#"
            class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Voir toute la liste
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div
          class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
        >
          <ProductCard v-for="product in trendingProducts" :key="product.id" :product="product" />
        </div>

        <div class="mt-8 text-sm md:hidden">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
    <section aria-labelledby="trending-heading">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div class="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
            Nos sacs et accessoires
          </h2>
          <a
            href="#"
            class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Voir toute la liste
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div
          class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
        >
          <ProductCard v-for="product in accessoires" :key="product.id" :product="product" />
        </div>

        <div class="mt-8 text-sm md:hidden">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
    <section aria-labelledby="sale-heading">
      <div class="overflow-hidden pt-32 sm:pt-14">
        <div class="bg-white">
          <div>
            <div class="relative overflow-hidden rounded-lg lg:h-96">
              <div class="absolute inset-0">
                <img
                  src="/images/collections/accessories/1.png"
                  alt=""
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
              <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
              <div
                class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
              >
                <div>
                  <h2 class="text-xl font-bold text-white">Éclats de Tizi</h2>
                  <p class="mt-1 text-sm text-gray-300">
                    Inspirée par la ville de Tizi Ouzou, au cœur de la Kabylie.
                  </p>
                </div>
                <a
                  href="#"
                  class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
                  >Voir la collection</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ProductCard from '../components/ProductCardWithQuickView.vue'

const collections = [
  {
    id: 1,
    name: 'Berbère Éclat ',
    imageSrc: '/images/collections/dresses/1.png',
    imageAlt: 'BRobe de Fête ',
    description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
  },
  {
    id: 2,
    name: 'Montagnes de Djurdjura',

    imageSrc: '/images/collections/burnous/1.png',
    imageAlt: 'Collection Montagnes de Djurdjura',
    description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
  },
  {
    id: 3,
    name: 'Lune de Kabylie',

    imageSrc: '/images/collections/joularies/1.png',
    imageAlt: 'Collection Lune de Kabylie',
    description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
  },
  {
    id: 4,
    name: 'Azur Amazigh ',

    imageSrc: '/images/collections//dresses/2.png',
    imageAlt: 'Robe de Sortie ',
    description: `Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe.`
  },
  {
    id: 5,
    name: 'Echo des Aït',

    imageSrc: '/images/collections/burnous/2.png',
    imageAlt: 'Collection Echo des Aït',
    description: `Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.`
  },
  {
    id: 6,
    name: 'Souveraines Berbères',

    imageSrc: '/images/collections/joularies/2.png',
    imageAlt: 'Collection Souveraines Berbères',
    description: `Célébrant les figures féminines puissantes de l'histoire kabyle, cette collection allie force et finesse dans chaque pièce.`
  },
  {
    id: 7,
    name: 'Jardin de Numidie ',

    imageSrc: '/images/collections/dresses/3.png',
    imageAlt: 'Robe de Maison ',
    description: `Inspirée par l'histoire et la nature de Kabylie, cette collection intègre des motifs floraux et des éléments naturels.`
  },
  {
    id: 8,
    name: 'Voile de Yemma Gouraya',

    imageSrc: '/images/collections/burnous/3.png',
    imageAlt: 'Collection Voile de Yemma Gouraya',
    description: `Inspiré par la légendaire montagne qui surplombe la ville de Béjaïa, symbolisant protection et majesté.`
  },
  {
    id: 9,
    name: `Jardins d'Agadez`,

    imageSrc: '/images/collections/joularies/3.png',
    imageAlt: `Collection Jardins d'Agadez`,
    description: `Évoquant les designs floraux et organiques typiques de la bijouterie kabyle, cette collection rend hommage à la nature et à la fertilité des terres berbères.`
  }
]
const trendingProducts = [
  {
    id: 1,
    name: 'Thalssa',
    price: '$75',
    imageSrc: '/images/trending/1.png',
    imageAlt: 'Thalssa',
    rating: 3.9,
    reviewCount: 117,

    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false }
    ]
  },
  {
    id: 2,
    name: 'Thalssa',
    price: '$75',
    imageSrc: '/images/trending/2.png',
    imageAlt: 'Thalssa',
    rating: 3.9,
    reviewCount: 117,

    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false }
    ]
  },
  {
    id: 3,
    name: 'Thalssa',
    price: '$75',
    imageSrc: '/images/trending/3.png',
    imageAlt: 'Thalssa',
    rating: 3.9,
    reviewCount: 117,

    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false }
    ]
  },
  {
    id: 4,
    name: 'Thalssa',
    price: '$75',
    imageSrc: '/images/trending/4.png',
    imageAlt: 'Thalssa',
    rating: 3.9,
    reviewCount: 117,

    colors: [
      { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
      { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' }
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
      { name: 'XXXL', inStock: false }
    ]
  }
]
const accessoires = [
  {
    id: 1,
    name: 'Tassadi',
    price: '$75',

    imageSrc: '/images/accessoires/1.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 2,
    name: 'Tassadi',

    price: '$75',

    imageSrc: '/images/accessoires/2.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 3,
    name: 'Tassadi',
    price: '$75',

    imageSrc: '/images/accessoires/3.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 4,
    name: 'Tassadi',
    price: '$75',

    imageSrc: '/images/accessoires/1.png',
    imageAlt: 'Thalssa'
  }
  // More products...
]
</script>