<template>
  <div class="bg-white">
    <section aria-labelledby="sale-heading">
      <div class="overflow-hidden pt-32 sm:pt-14">
        <div class="relative bg-gray-900">
          <div
            class="relative h-80 overflow-hidden bg-pink-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
          >
            <img
              class="h-full w-full object-cover"
              :src="collection.image.src"
              :alt="collection.image.alt"
            />
          </div>
          <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {{ collection.name }}
              </p>
              <p class="mt-6 text-base leading-7 text-gray-300">
                {{ collection.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProductsGrid
      :sortOptions="sortOptions"
      :subCategories="subCategories"
      :filters="filters"
      :products="products"
      :collection="collection"
    />
  </div>
</template>

<script setup>
import ProductsGrid from '../components/ProductsGrid.vue'
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter()
const route = useRoute()

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false }
]
const subCategories = [
  { name: 'Robes', href: '#' },
  { name: 'Burnous', href: '#' },
  { name: 'Sacs', href: '#' },
  { name: 'Bijoux', href: '#' },
  { name: 'Accessories', href: '#' }
]
const filters = [
  {
    id: 'color',
    name: 'Couleur',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false }
    ]
  },
  {
    id: 'category',
    name: 'Catégorie',
    options: [
      { value: 'new-arrivals', label: 'Nouvaux', checked: false },
      { value: 'sale', label: 'Promo', checked: false },
      { value: 'selebration', label: 'Fete', checked: true },
      { value: 'house', label: 'Maison', checked: false },
      { value: 'casual', label: 'Décontracté', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false }
    ]
  },
  {
    id: 'size',
    name: 'Taile',
    options: [
      { value: 'standard', label: 'Standard', checked: false },
      { value: 'big', label: 'Grande Taille', checked: false },
      { value: 's-m', label: 'S/M', checked: false },
      { value: 'm-l', label: 'M/L', checked: false },
      { value: 'l-xl', label: 'L/XL', checked: false },
      { value: 'xl-xxl', label: 'XL/XXL', checked: true },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: 'xxl', label: 'XXL', checked: false }
    ]
  }
]
const products = [
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

let collection = collections.find((_) => _.id == route.params.id)
</script>