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
                class="inline-block rounded-md border border-transparent bg-pink-600 px-8 py-3 text-center font-medium text-white hover:bg-pink-700"
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
        <div class="mt-10 space-y-12 lg:gap-x-8 lg:space-y-0">
          <CollectionCarousel
            :collections="collections"
            :numVisible="3"
            :numScroll="1"
            :autoplayInterval="8000"
            :showNavigators="false"
            :showIndicators="true"
          />
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
        <div>
          <div class="md:flex md:items-center md:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Les tendances du moment
            </h2>
            <a
              href="#"
              class="hidden text-sm font-medium text-pink-600 hover:text-pink-500 md:block"
            >
              Voir toute la liste
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-0 lg:gap-x-8">
            <ProductCarousel
              :products="trendingProducts"
              :numVisible="4"
              :numScroll="1"
              :autoplayInterval="null"
              :showNavigators="false"
              :showIndicators="true"
            />
          </div>
        </div>

        <div>
          <div class="md:flex md:items-center md:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Style et confort
            </h2>
            <a
              href="#"
              class="hidden text-sm font-medium text-pink-600 hover:text-pink-500 md:block"
            >
              Voir toute la liste
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-0 lg:gap-x-8">
            <ProductCarousel
              :products="trendingProducts"
              :numVisible="4"
              :numScroll="1"
              :autoplayInterval="null"
              :showNavigators="false"
              :showIndicators="true"
            />
          </div>
        </div>

        <div>
          <div class="md:flex md:items-center md:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Faites plaisir aux enfants
            </h2>
            <a
              href="#"
              class="hidden text-sm font-medium text-pink-600 hover:text-pink-500 md:block"
            >
              Voir toute la liste
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div class="mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-0 lg:gap-x-8">
            <ProductCarousel
              :products="trendingProducts"
              :numVisible="4"
              :numScroll="1"
              :autoplayInterval="null"
              :showNavigators="false"
              :showIndicators="true"
            />
          </div>
        </div>

        <div>
          <div class="md:flex md:items-center md:justify-between">
            <h2 id="favorites-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Nos sacs et accessoires
            </h2>
            <a
              href="#"
              class="hidden text-sm font-medium text-pink-600 hover:text-pink-500 md:block"
            >
              Voir toute la liste
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <div class="mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-y-0 lg:gap-x-8">
            <ProductCarousel
              :products="accessoires"
              :numVisible="3"
              :numScroll="1"
              :autoplayInterval="null"
              :showNavigators="false"
              :showIndicators="true"
            />
          </div>
        </div>
      </div>
    </section>

    <div class="relative overflow-hidden lg:h-96">
      <div class="absolute inset-0">
        <img
          src="../assets/images/hero/robe-fete.png"
          alt=""
          class="h-full w-full object-cover object-center"
        />
      </div>
      <div aria-hidden="true" class="relative h-96 w-full lg:hidden" />
      <div aria-hidden="true" class="relative h-32 w-full lg:hidden" />
      <div
        class="absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none"
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
  </main>
</template>

<script setup>
import CollectionCarousel from '../components/CollectionCarousel.vue'
import ProductCarousel from '../components/ProductCarousel.vue'

const collections = [
  {
    id: 1,
    name: 'Berbère Éclat ',
    image: {
      src: '/images/collections/1.png',
      alt: 'BRobe de Fête '
    },
    description: `Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle aux racines berbères traditionnelles.`
  },
  {
    id: 2,
    name: 'Montagnes de Djurdjura',
    image: {
      src: '/images/collections/2.png',
      alt: 'BRobe de Fête '
    },
    description: `Évoquant les sommets majestueux et le patrimoine robuste de la Kabylie.`
  },
  {
    id: 3,
    name: 'Lune de Kabylie',
    image: {
      src: '/images/collections/3.png',
      alt: 'BRobe de Fête '
    },
    description: `Inspirée par les motifs lunaires récurrents dans l'art kabyle, cette collection capture la mystique et l'élégance des bijoux traditionnels.`
  },
  {
    id: 4,
    name: 'Azur Amazigh ',
    image: {
      src: '/images/collections/4.png',
      alt: 'BRobe de Fête '
    },
    description: `Soulignant la beauté et la profondeur des couleurs souvent utilisées dans les tenues kabyles, avec un clin d'œil à l'identité amazighe.`
  },
  {
    id: 5,
    name: 'Echo des Aït',
    image: {
      src: '/images/collections/5.png',
      alt: 'BRobe de Fête '
    },
    description: `Rendant hommage aux tribus Aït de Kabylie, ce nom reflète la transmission des traditions et des savoir-faire ancestraux.`
  },
  {
    id: 6,
    name: 'Souveraines Berbères',
    image: {
      src: '/images/collections/6.png',
      alt: 'BRobe de Fête '
    },
    description: `Célébrant les figures féminines puissantes de l'histoire kabyle, cette collection allie force et finesse dans chaque pièce.`
  },
  {
    id: 7,
    name: 'Jardin de Numidie ',
    image: {
      src: '/images/collections/7.png',
      alt: 'BRobe de Fête '
    },
    description: `Inspirée par l'histoire et la nature de Kabylie, cette collection intègre des motifs floraux et des éléments naturels.`
  },
  {
    id: 8,
    name: 'Voile de Yemma Gouraya',
    image: {
      src: '/images/collections/8.png',
      alt: 'BRobe de Fête '
    },
    description: `Inspiré par la légendaire montagne qui surplombe la ville de Béjaïa, symbolisant protection et majesté.`
  },
  {
    id: 9,
    name: `Jardins d'Agadez`,
    image: {
      src: '/images/collections/9.png',
      alt: 'BRobe de Fête '
    },
    description: `Évoquant les designs floraux et organiques typiques de la bijouterie kabyle, cette collection rend hommage à la nature et à la fertilité des terres berbères.`
  }
]
const trendingProducts = [
  {
    id: 1,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/1/red/1.png'
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
          },
          {
            src: '/images/products/1/red/4.png',
            alt: 'Thalssa rouge ...'
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
          },
          {
            src: '/images/products/1/pink/4.png',
            alt: 'Thalssa rouge ...'
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
  },
  {
    id: 2,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/2/golden/1.png'
    },
    colors: [
      {
        name: 'Golden',
        class: 'bg-yellow-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        sizes: [
          { name: 'XXS', quantity: 2 },
          { name: 'XS', quantity: 2 },
          { name: 'S', quantity: 1 },
          { name: 'M', quantity: 0 }
        ],
        images: [
          {
            src: '/images/products/2/golden/1.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/2/golden/2.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/2/golden/3.png',
            alt: 'Model wearing plain white basic tee.'
          },
          {
            src: '/images/products/2/golden/4.png',
            alt: 'Thalssa rouge ...'
          }
        ]
      }
    ],
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
  },
  {
    id: 3,
    name: 'Elegancia',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Elegancia',
      src: '/images/products/3/golden/1.png'
    },
    colors: [
      {
        name: 'Golden',
        class: 'bg-yellow-700',
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
            src: '/images/products/3/golden/1.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/3/golden/1.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/3/golden/1.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/3/golden/1.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      },
      {
        name: 'White',
        class: 'bg-white-200',
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
            src: '/images/products/3/white/1.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/3/white/2.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/3/white/3.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/3/white/4.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      }
    ],
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
  },
  {
    id: 4,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/1/red/1.png'
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
          },
          {
            src: '/images/products/1/red/4.png',
            alt: 'Thalssa rouge ...'
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
          },
          {
            src: '/images/products/1/pink/4.png',
            alt: 'Thalssa rouge ...'
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
          },
          {
            src: '/images/products/1/green/4.png',
            alt: 'Thalssa rouge ...'
          }
        ]
      }
    ],
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
  },
  {
    id: 5,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/2/golden/1.png'
    },
    colors: [
      {
        name: 'Red',
        class: 'bg-red-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        sizes: [
          { name: 'XXS', quantity: 2 },
          { name: 'XS', quantity: 2 },
          { name: 'S', quantity: 1 },
          { name: 'M', quantity: 0 }
        ],
        images: [
          {
            src: '/images/products/2/golden/1.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/2/golden/2.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/2/golden/3.png',
            alt: 'Model wearing plain white basic tee.'
          },
          {
            src: '/images/products/2/golden/4.png',
            alt: 'Thalssa rouge ...'
          }
        ]
      }
    ],
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
]

const accessoires = [
  {
    id: 6,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/4/red/1.png'
    },
    colors: [
      {
        name: 'Red',
        class: 'bg-red-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        quantity: 4,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/1.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/4.png',
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
        quantity: 0,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/2.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      }
    ],
    category: {
      id: 1,
      name: 'woman',
      label: 'Femme'
    },
    subcategory: {
      id: 5,
      name: 'bag',
      label: 'Sac '
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
  },
  {
    id: 7,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/4/red/2.png'
    },
    colors: [
      {
        name: 'Red',
        class: 'bg-red-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        quantity: 4,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/2.png',

            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/2.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/2.png',
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
        quantity: 4,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/1.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/1.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/1.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/1.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      }
    ],
    category: {
      id: 1,
      name: 'woman',
      label: 'Femme'
    },
    subcategory: {
      id: 5,
      name: 'bag',
      label: 'Sac à main'
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
  },
  {
    id: 8,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/4/red/3.png'
    },
    colors: [
      {
        name: 'Red',
        class: 'bg-red-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        quantity: 4,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/3.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/3.png',
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
        quantity: 4,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/4.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/4.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/4.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/4.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      }
    ],
    category: {
      id: 1,
      name: 'woman',
      label: 'Femme'
    },
    subcategory: {
      id: 5,
      name: 'accessory',
      label: 'Colier '
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
  },
  {
    id: 9,
    name: 'Thalssa',
    price: '75',
    code: 'f230fh0g3',
    image: {
      alt: 'Thalssa',
      src: '/images/products/4/red/4.png'
    },
    colors: [
      {
        name: 'Red',
        class: 'bg-red-700',
        selectedClass: 'ring-gray-400',
        reviews: { href: '#', average: 4, totalCount: 117 },
        price: '78',
        quantity: 0,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/4.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/4.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/4.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/4.png',
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
        quantity: 0,
        sizes: null,
        images: [
          {
            src: '/images/products/4/red/3.png',
            alt: 'Thalssa rouge ...'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain black basic tee.'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain gray basic tee.'
          },
          {
            src: '/images/products/4/red/3.png',
            alt: 'Model wearing plain white basic tee.'
          }
        ]
      }
    ],
    category: {
      id: 1,
      name: 'woman',
      label: 'Femme'
    },
    subcategory: {
      id: 5,
      name: 'accessory',
      label: 'Colier'
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
]
</script>