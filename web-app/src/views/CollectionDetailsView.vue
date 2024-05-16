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
              src="../assets/images/hero/robe-fete.png"
              alt=""
            />
          </div>
          <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
            <div class="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
              <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Berbère Éclat
              </p>
              <p class="mt-6 text-base leading-7 text-gray-300">
                Mettant en avant le rayonnement et la modernité des designs tout en restant fidèle
                aux racines berbères traditionnelles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ProductsGrid :sortOptions="sortOptions" :subCategories="subCategories" :filters="filters" :products="products"/>
  </div>
</template>

<script setup>
import ProductsGrid from '../components/ProductsGrid.vue'


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
      { value: 'xxl', label: 'XXL', checked: false },
    ]
  }
]
const products = [
  {
    id: 1,
    name: 'Aline',
    href: '#',
    price: '$256',
    color: '',
    category: {
      id: '',
      name: ''
    },
    collection: {
      id: '',
      name: ''
    },
    description:
      'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
    options: '8 colors',
    imageSrc: '/images/collections/dresses/3.png',
    moreImages: ['', '', ''],
    imageAlt:
      'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.'
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/collections/dresses/3.png',
    imageAlt: 'Front of plain black t-shirt.'
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc: '/images/collections/dresses/1.png',
    imageAlt: 'Front of plain black t-shirt.'
  }
]
</script>