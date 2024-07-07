<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
      <Dialog class="relative z-40 lg:hidden" @close="mobileMenuOpen = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
            >
              <div class="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  @click="mobileMenuOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab
                      as="template"
                      v-for="category in navigation.categories"
                      :key="category.name"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          selected
                            ? 'border-indigo-600 text-indigo-600'
                            : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                        ]"
                      >
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel
                    v-for="category in navigation.categories"
                    :key="category.name"
                    class="space-y-12 px-4 py-6"
                  >
                    <div class="grid grid-cols-2 gap-x-4 gap-y-10">
                      <div
                        v-for="item in category.featured"
                        :key="item.name"
                        class="group relative"
                      >
                        <div
                          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
                        >
                          <img
                            :src="item.imageSrc"
                            :alt="item.imageAlt"
                            class="object-cover object-center"
                          />
                        </div>
                        <a :href="item.href" class="mt-6 block text-sm font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                          {{ item.name }}
                        </a>
                      </div>
                    </div>

                    <div v-for="section in category.sections" :key="section.name">
                      <p
                        :id="`${category.id}-${section.id}-heading-mobile`"
                        class="font-medium text-gray-900"
                      >
                        {{ section.name }}
                      </p>
                      <ul
                        role="list"
                        :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                        class="mt-6 flex flex-col space-y-6"
                      >
                        <li v-for="item in section.items" :key="item.name" class="flow-root">
                          <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{
                            item.name
                          }}</a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{
                    page.name
                  }}</a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

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

      <!-- Navigation -->
      <header class="relative z-10">
        <nav aria-label="Top">
          <!-- Secondary navigation -->
          <div class="bg-white bg-opacity-5 backdrop-blur-md backdrop-filter">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div class="flex h-16 items-center justify-between">
                  <!-- Logo (lg+) -->
                  <div class="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="#">
                      <span class="sr-only">Your Company</span>
                      <img
                        class="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="hidden h-full lg:flex">
                    <!-- Flyout menus -->
                    <PopoverGroup class="inset-x-0 bottom-0 px-4">
                      <div class="flex h-full justify-center space-x-8">
                        <Popover
                          v-for="category in navigation.categories"
                          :key="category.name"
                          class="flex"
                          v-slot="{ open }"
                        >
                          <div class="relative flex">
                            <PopoverButton
                              class="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out"
                            >
                              {{ category.name }}
                              <span
                                :class="[
                                  open ? 'bg-white' : '',
                                  'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                ]"
                                aria-hidden="true"
                              />
                            </PopoverButton>
                          </div>

                          <transition
                            enter-active-class="transition ease-out duration-200"
                            enter-from-class="opacity-0"
                            enter-to-class="opacity-100"
                            leave-active-class="transition ease-in duration-150"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                          >
                            <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500">
                              <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                              <div
                                class="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div v-if="!category.sections" class="relative bg-white">
                                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                  <div class="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    <div
                                      v-for="item in category.featured"
                                      :key="item.name"
                                      class="group relative"
                                    >
                                      <div
                                        class="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75"
                                      >
                                        <img
                                          :src="item.imageSrc"
                                          :alt="item.imageAlt"
                                          class="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        :href="item.href"
                                        class="mt-4 block font-medium text-gray-900"
                                      >
                                        <span class="absolute inset-0 z-10" aria-hidden="true" />
                                        {{ item.name }}
                                      </a>
                                      <p aria-hidden="true" class="mt-1">Shop now</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="relative bg-white" v-else>
                                <div class="mx-auto max-w-7xl px-8">
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                      <div
                                        v-for="item in category.featured"
                                        :key="item.name"
                                        class="group relative text-base sm:text-sm"
                                      >
                                        <div
                                          class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75"
                                        >
                                          <img
                                            :src="item.imageSrc"
                                            :alt="item.imageAlt"
                                            class="object-cover object-center"
                                          />
                                        </div>

                                        <router-link
                                          :to="item.href"
                                          class="mt-6 block font-medium text-gray-900 no-underline"
                                        >
                                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                                          {{ item.name }}</router-link
                                        >
                                      </div>
                                    </div>
                                    <div
                                      class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm"
                                    >
                                      <div v-for="section in category.sections" :key="section.name">
                                        <p
                                          :id="`${section.name}-heading`"
                                          class="font-medium text-gray-900"
                                        >
                                          {{ section.name }}
                                        </p>
                                        <ul
                                          role="list"
                                          :aria-labelledby="`${section.name}-heading`"
                                          class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          <li
                                            v-for="item in section.items"
                                            :key="item.name"
                                            class="flex"
                                          >
                                            <router-link
                                              :to="item.href"
                                              class="hover:text-gray-800 no-underline"
                                              >{{ item.name }}</router-link
                                            >
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </transition>
                        </Popover>

                        <a
                          v-for="page in navigation.pages"
                          :key="page.name"
                          :href="page.href"
                          class="flex items-center text-sm font-medium text-white"
                          >{{ page.name }}</a
                        >
                      </div>
                    </PopoverGroup>
                  </div>

                  <!-- Mobile menu and search (lg-) -->
                  <div class="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      class="-ml-2 p-2 text-white"
                      @click="mobileMenuOpen = true"
                    >
                      <span class="sr-only">Open menu</span>
                      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>

                    <!-- Search -->
                    <a href="#" class="ml-2 p-2 text-white">
                      <span class="sr-only">Search</span>
                      <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>

                  <!-- Logo (lg-) -->
                  <a href="#" class="lg:hidden">
                    <span class="sr-only">Your Company</span>
                    <img
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt=""
                      class="h-8 w-auto"
                    />
                  </a>

                  <div class="flex flex-1 items-center justify-end">
                    <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a>

                    <div class="flex items-center lg:ml-8">
                      <!-- Help -->
                      <a href="#" class="p-2 text-white lg:hidden">
                        <span class="sr-only">Help</span>
                        <QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" />
                      </a>
                      <a href="#" class="hidden text-sm font-medium text-white lg:block">Login</a>

                      <!-- Cart -->
                      <div class="ml-4 flow-root lg:ml-8">
                        <a href="#" class="group -m-2 flex items-center p-2">
                          <ShoppingBagIcon
                            class="h-6 w-6 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <span class="ml-2 text-sm font-medium text-white">0</span>
                          <span class="sr-only">items in cart, view bag</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        class="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0"
      >
        <h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
          L'élégance et la tradition kabyle, par Malha Création.
        </h1>
        <a
          href="#"
          class="mt-8 inline-block rounded-md border bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >SHOP NEW</a
        >
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
                :href="offer.href"
                class="relative flex flex-1 flex-col justify-center bg-white px-4 py-6 text-center focus:z-10"
              >
                <font-awesome-icon :icon="['fas', 'dolly']" />
                <p class="text-sm text-gray-500">{{ offer.name }}</p>
                <p class="font-semibold text-gray-900">{{ offer.description }}</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- new arrivals -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-12xl lg:px-8 lg:py-32">
          <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 id="trending-heading" class="text-2xl font-bold tracking-tight text-gray-900">
              Nouvels arrivés
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
                >
                  <div class="group relative">
                    <div
                      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"
                    >
                      <img
                        :src="`/images/p${product.id}.png`"
                        :alt="product.imageAlt"
                        class="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div class="mt-6">
                      <h3 class="mt-1 font-semibold text-gray-900">
                        <a :href="product.href">
                          <span class="absolute inset-0" />
                          {{ product.name }}
                        </a>
                      </h3>
                      <p class="mt-1 text-gray-900">{{ product.price }}</p>
                    </div>
                  </div>

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
                </li>
              </ul>
            </div>
          </div>

          <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center mt-8">
            <a
              href="#"
              class="mt-5 block w-full rounded-md border border-radius bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
              >VOIR TOUT</a
            >
          </div>
        </div>
      </section>

      <!-- categories -->
      <section aria-labelledby="trending-heading" class="bg-white">
        <div class="lg:mx-auto lg:max-w-12xl lg:px-4 lg:py-4">
          <div class="relative mt-2">
            <div class="relative w-full overflow-x-auto">
              <ul
                role="list"
                class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-x-0"
              >
                <li
                  v-for="category in bigcategories"
                  :key="category.id"
                  class="inline-flex flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div
                      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"
                    >
                      <img
                        :src="`/images/categories/${category.value}.png`"
                        :alt="category.name"
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
                          {{ category.name }}
                        </h2>
                        <a
                          href="#"
                          class="mt-5 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                          >SHOP NOW</a
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
        <div class="absolute inset-0 overflow-hidden">
          <img
            src="@/assets/images/hero1.png"
            alt=""
            class="h-full w-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" class="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Voyez pret pour toutes occations
          </h2>
          <p class="mt-3 text-xl text-white">
            We're committed to responsible, sustainable, and ethical manufacturing. Our small-scale
            approach allows us to focus on quality and reduce our impact. We're doing our best to
            delay the inevitable heat-death of the universe.
          </p>
          <a
            href="#"
            class="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
            >PAR OCCASION</a
          >
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
                  class="inline-flex flex-col text-center lg:w-auto"
                >
                  <div class="group relative">
                    <div
                      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200"
                    >
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
                        <a
                          href="#"
                          class="mt-5 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                          >SHOP NOW</a
                        >
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

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const offers = [
  { name: 'Livraison gratuite', description: 'poures des achats de +150€', href: '#' },
  { name: '35 jours', description: 'retour facile', href: '#' },
  { name: 'Acheter maintenant', description: 'Payer plutard', href: '#' }
]

const arrivals = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ]
  },
  {
    id: 2,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ]
  },
  {
    id: 3,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ]
  },
  {
    id: 4,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ]
  },
  {
    id: 4,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Black', colorBg: '#111827' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' }
    ]
  }
]

const bigcategories = [
  {
    id: 1,
    name: 'WOMEN',
    value: 'women'
  },
  {
    id: 2,
    name: 'MEN',
    value: 'men'
  },
  {
    id: 3,
    name: 'GIRLS',
    value: 'girl'
  },
  {
    id: 4,
    name: 'BOYS',
    value: 'boy'
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

const navigation = {
  categories: [
    {
      name: 'Femmes',
      featured: [
        {
          name: 'LES PLUS POPULAIRES',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'NOUVELLES ARRIVESS',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'category',
          name: 'Par catégories',
          items: [
            { name: 'Robes kabyles pour femmes', href: '/categories/1/?type=fete' },
            { name: 'Robes kabyles pour filles', href: '/categories/1/?type=sortie' },
            { name: 'Sacs', href: '/categories/1/?type=maison' },
            { name: 'Accessoires', href: '/categories/1/?type=simple' }
          ]
        },
        {
          id: 'joularies',
          name: 'En vedette',
          items: [
            { name: 'Nouvelles arrivées ', href: '/collections/5' },
            { name: 'Promo en cours (2 pour 20%) ', href: '/collections/6' },
            { name: 'Les plus populairs ', href: '#' }
          ]
        },
        {
          id: 'occasions',
          name: 'Par Occasion',
          items: [
            { name: 'Événements spéciaux', href: '#' },
            { name: 'Fêtes religieuses (ex. : Aïd)', href: '#' },
            { name: 'Mariages', href: '#' },
            { name: 'Célébrations traditionnelles', href: '#' }
          ]
        }
      ]
    },
    {
      name: 'Hommes',
      featured: [
        {
          name: 'LES PLUS POPULAIRES',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'NOUVELLES ARRIVESS',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'category',
          name: 'Par catégories',
          items: [
            { name: 'Robes kabyles pour femmes', href: '/categories/1/?type=fete' },
            { name: 'Robes kabyles pour filles', href: '/categories/1/?type=sortie' },
            { name: 'Sacs', href: '/categories/1/?type=maison' },
            { name: 'Accessoires', href: '/categories/1/?type=simple' }
          ]
        },
        {
          id: 'joularies',
          name: 'En vedette',
          items: [
            { name: 'Nouvelles arrivées ', href: '/collections/5' },
            { name: 'Promo en cours (2 pour 20%) ', href: '/collections/6' },
            { name: 'Les plus populairs ', href: '#' }
          ]
        },
        {
          id: 'occasions',
          name: 'Par Occasion',
          items: [
            { name: 'Événements spéciaux', href: '#' },
            { name: 'Fêtes religieuses (ex. : Aïd)', href: '#' },
            { name: 'Mariages', href: '#' },
            { name: 'Célébrations traditionnelles', href: '#' }
          ]
        }
      ]
    },
    {
      name: 'Enfants',
      featured: [
        {
          name: 'LES PLUS POPULAIRES',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.'
        },
        {
          name: 'NOUVELLES ARRIVESS',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.'
        }
      ],
      sections: [
        {
          id: 'category',
          name: 'Par catégories',
          items: [
            { name: 'Robes kabyles pour femmes', href: '/categories/1/?type=fete' },
            { name: 'Robes kabyles pour filles', href: '/categories/1/?type=sortie' },
            { name: 'Sacs', href: '/categories/1/?type=maison' },
            { name: 'Accessoires', href: '/categories/1/?type=simple' }
          ]
        },
        {
          id: 'joularies',
          name: 'En vedette',
          items: [
            { name: 'Nouvelles arrivées ', href: '/collections/5' },
            { name: 'Promo en cours (2 pour 20%) ', href: '/collections/6' },
            { name: 'Les plus populairs ', href: '#' }
          ]
        },
        {
          id: 'occasions',
          name: 'Par Occasion',
          items: [
            { name: 'Événements spéciaux', href: '#' },
            { name: 'Fêtes religieuses (ex. : Aïd)', href: '#' },
            { name: 'Mariages', href: '#' },
            { name: 'Célébrations traditionnelles', href: '#' }
          ]
        }
      ]
    },
    {
      name: 'Collections',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.'
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.'
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.'
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.'
        }
      ]
    }
  ],
  pages: [
    { name: 'New IN', href: '#' },
    { name: 'Promo', href: '#' },
    { name: 'Tailles', href: '#' }
  ]
}
const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg'
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg'
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg'
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg'
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg'
  }
]
const collections = [
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Keep your phone, keys, and wallet together, so you can lose everything at once.'
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description: 'The rest of the house will still be a mess, but your desk will look great.'
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description: 'Be more productive than enterprise project managers with a single piece of paper.'
  }
]

const mobileMenuOpen = ref(false)
</script>