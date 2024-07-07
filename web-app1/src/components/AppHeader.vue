<template>
  <div>
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 lg:hidden" @close="open = false">
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
                  @click="open = false"
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
                            ? 'border-pink-600 text-pink-600'
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
                        <router-link
                          :to="item.href"
                          class="mt-6 block text-sm font-medium text-gray-900 no-underline"
                        >
                          <span class="absolute inset-0 z-10" aria-hidden="true" />
                          {{ item.name }}</router-link
                        >
                        <p aria-hidden="true" class="mt-1 text-sm text-gray-500">
                          Voir la collection
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div
            class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          >
            <div class="flex items-center space-x-6">
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a>
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100"
                >Create an account</a
              >
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
              <div class="hidden lg:flex lg:flex-1 lg:items-center">
                <a href="/">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8 w-auto" src="@/assets/logo.png" alt="" />
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
                          :class="[
                            open ? 'text-pink-600' : 'text-gray-700 hover:text-gray-800',
                            'relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out'
                          ]"
                        >
                          {{ category.name }}
                          <span
                            :class="[
                              open ? '' : '',
                              'absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out'
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
                        <PopoverPanel
                          class="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500"
                        >
                          <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                          <div
                            class="absolute inset-0 top-1/2 bg-white shadow"
                            aria-hidden="true"
                          />
                          <!-- Fake border when menu is open -->
                          <div
                            class="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                            aria-hidden="true"
                          >
                            <div
                              :class="[
                                open ? 'bg-gray-200' : 'bg-transparent',
                                'h-px w-full transition-colors duration-200 ease-out'
                              ]"
                            />
                          </div>

                          <div class="relative">
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
                                    <p aria-hidden="true" class="mt-1">Voir la collection</p>
                                  </div>
                                </div>
                                <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
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
                  </div>
                </PopoverGroup>
              </div>

              <!-- Mobile menu and search (lg-) -->
              <div class="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  class="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  @click="open = true"
                >
                  <span class="sr-only">Open menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Search -->
                <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                </a>
              </div>

              <a href="/" class="lg:hidden">
                <span class="sr-only">Your Company</span>
                <img src="@/assets/logo.png" alt="" class="h-8 w-auto" />
              </a>

              <div class="flex flex-1 items-center justify-end">
                <a
                  href="#"
                  class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                  >Search</a
                >

                <div class="flex items-center lg:ml-8">
                  <!-- Help -->
                  <a href="#" class="p-2 text-gray-400 hover:text-gray-500 lg:hidden">
                    <span class="sr-only">Help</span>
                    <QuestionMarkCircleIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    class="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
                    >Help</a
                  >

                  <!-- Cart -->
                  <Popover class="ml-4 flow-root text-sm lg:relative lg:ml-8">
                    <PopoverButton class="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                        >0</span
                      >
                      <span class="sr-only">items in cart, view bag</span>
                    </PopoverButton>
                    <transition
                      enter-active-class="transition ease-out duration-200"
                      enter-from-class="opacity-0"
                      enter-to-class="opacity-100"
                      leave-active-class="transition ease-in duration-150"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <PopoverPanel
                        class="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
                      >
                        <h2 class="sr-only">Shopping Cart</h2>

                        <form class="mx-auto max-w-2xl px-4">
                          <ul role="list" class="divide-y divide-gray-200">
                            <li
                              v-for="product in products"
                              :key="product.id"
                              class="flex items-center py-6"
                            >
                              <img
                                :src="product.imageSrc"
                                :alt="product.imageAlt"
                                class="h-16 w-16 flex-none rounded-md border border-gray-200"
                              />
                              <div class="ml-4 flex-auto">
                                <h3 class="font-medium text-gray-900">
                                  <a :href="product.href">{{ product.name }}</a>
                                </h3>
                                <p class="text-gray-500">{{ product.color }}</p>
                              </div>
                            </li>
                          </ul>

                          <button
                            type="submit"
                            class="w-full rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                          >
                            Checkout
                          </button>

                          <p class="mt-6 text-center">
                            <a
                              href="#"
                              class="text-sm font-medium text-pink-600 hover:text-pink-500"
                              >View Shopping Bag</a
                            >
                          </p>
                        </form>
                      </PopoverPanel>
                    </transition>
                  </Popover>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Dialog,
  DialogPanel,
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
import { ref } from 'vue'

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Femme',
      featured: [
        {
          name: 'Collection Robe de fete',
          imageSrc: '/images/popover/femme-fete.png',
          imageAlt: 'Collection robe de fete'
        },
        {
          name: 'Collection Robe de sortie',
          imageSrc: '/images/popover/femme-sortie.png',
          imageAlt: 'Collection robe de sortie'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Robes',
          items: [
            { name: 'Robe de fete', href: '/categories/1/?type=fete' },
            { name: 'Robe de sortie', href: '/categories/1/?type=sortie' },
            { name: 'Robe de de maison', href: '/categories/1/?type=maison' },
            { name: 'Robe de simple', href: '/categories/1/?type=simple' }
          ]
        },
        {
          id: 'joularies',
          name: 'Bijoux',
          items: [
            { name: 'Colliers ', href: '/collections/5' },
            { name: 'Boucles ', href: '/collections/6' },
            { name: 'Bagues ', href: '#' },
            { name: 'Bracelets', href: '#' },
            { name: 'Broches ', href: '#' },
            { name: 'Bijoux de têtes', href: '#' },
            { name: 'Bijoux de pieds ', href: '#' },
            { name: 'Bijoux Ceintures ', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Sacs & accessoires',
          items: [
            { name: 'Accessoires', href: '#' },
            { name: 'Sacs', href: '#' },
            { name: 'Chapeaux', href: '#' },
            { name: 'Cintures', href: '#' }
          ]
        }
      ]
    },
    {
      id: 'men',
      name: 'Homme',
      featured: [
        {
          name: 'Collection Burnous de fete',
          href: '#',
          imageSrc: '/images/popover/homme-fete.png',
          imageAlt: 'Collection Burnous de fete.'
        },
        {
          name: 'Collection Burnous de maison',
          href: '#',
          imageSrc: '/images/popover/homme-maison.png',
          imageAlt: 'Collection Burnous de maison'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Burnous',
          items: [
            { name: 'Burnous de fete', href: '#' },
            { name: 'Burnous de sortie', href: '#' },
            { name: 'Burnous de de maison', href: '#' },
            { name: 'Burnous de simple', href: '#' }
          ]
        },
        {
          id: 'joularies',
          name: 'Bijoux',
          items: [
            { name: 'Colliers ', href: '#' },
            { name: 'Bagues ', href: '#' },
            { name: 'Bracelets', href: '#' }
          ]
        },
        {
          id: 'accessories',
          name: 'Sacs & accessoires',
          items: [
            { name: 'Accessoires', href: '#' },
            { name: 'Sacs', href: '#' },
            { name: 'Chapeaux', href: '#' },
            { name: 'Cintures', href: '#' }
          ]
        }
      ]
    },
    {
      id: 'children',
      name: 'Enfant',
      featured: [
        {
          name: 'Collection Robe de filles',
          href: '#',
          imageSrc: '/images/popover/fille2.png',
          imageAlt: 'Collection Robe de filles'
        },
        {
          name: 'Collection Burnous de garçons',
          href: '#',
          imageSrc: '/images/popover/garcon.png',
          imageAlt: 'Collection Burnous de garçons'
        }
      ],
      sections: [
        {
          id: 'dresses',
          name: 'Robe',
          items: [
            { name: 'Robe de fete', href: '#' },
            { name: 'Robe de simple', href: '#' }
          ]
        },
        {
          id: 'burnous',
          name: 'Burnous',
          items: [
            { name: 'Burnous de fete', href: '#' },
            { name: 'Burnous de simple', href: '#' }
          ]
        },
        {
          id: 'joularies',
          name: 'Bijoux',
          items: [
            { name: 'Colliers ', href: '#' },
            { name: 'Bracelets', href: '#' },
            { name: 'Chapeaux', href: '#' },
            { name: 'Cintures', href: '#' }
          ]
        }
      ]
    }
  ]
}

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
  }
  // More products...
]

const open = ref(false)
</script>
