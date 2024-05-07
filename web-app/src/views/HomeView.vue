<template>
  <div class="bg-white">
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
              <!-- Logo (lg+) -->
              <div class="hidden lg:flex lg:flex-1 lg:items-center">
                <a href="#">
                  <span class="sr-only">Your Company</span>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color={#D32F2F}&shade=600"
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
                          :class="[
                            open ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800',
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
                                    <a
                                      :href="item.href"
                                      class="mt-6 block font-medium text-gray-900"
                                    >
                                      <span class="absolute inset-0 z-10" aria-hidden="true" />
                                      {{ item.name }}
                                    </a>
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
                                        <a :href="item.href" class="hover:text-gray-800">{{
                                          item.name
                                        }}</a>
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

              <!-- Logo (lg-) -->
              <a href="#" class="lg:hidden">
                <span class="sr-only">Your Company</span>
                <img
                  src="https://tailwindui.com/img/logos/mark.svg?color={#D32F2F}&shade=600"
                  alt=""
                  class="h-8 w-auto"
                />
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
                  <div class="ml-4 flow-root lg:ml-8">
                    <a href="#" class="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
                        >0</span
                      >
                      <span class="sr-only">items in cart, view bag</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero section -->
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
                        <div
                          class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100"
                        >
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
                  >Voir la collection</a
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
            <a
              v-for="category in categories"
              :key="category.name"
              :href="category.href"
              class="group block"
            >
              <div
                aria-hidden="true"
                class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  :src="category.imageSrc"
                  :alt="category.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-4 text-base font-semibold text-gray-900">{{ category.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ category.description }}</p>
            </a>
          </div>
        </div>
      </div>
      <!-- CTA section -->
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
                    Promo en cours.
                    <br />
                    10% de remise.
                  </h2>
                  <div class="mt-6 text-base">
                    <a href="#" class="font-semibold text-white">
                      Voir la promo
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
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
            <div v-for="product in trendingProducts" :key="product.id" class="group relative">
              <div
                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                <a :href="product.href">
                  <span class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
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
            <div v-for="product in accessoires" :key="product.id" class="group relative">
              <div
                class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                <a :href="product.href">
                  <span class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>
            </div>
          </div>

          <div class="mt-8 text-sm md:hidden">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Shop the collection
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA section -->
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
                    Promo en cours.
                    <br />
                    10% de remise.
                  </h2>
                  <div class="mt-6 text-base">
                    <a href="#" class="font-semibold text-white">
                      Voir la promo
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
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
    </main>

    <footer aria-labelledby="footer-heading" class="bg-gray-50">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-t border-gray-200 py-20">
          <div
            class="grid grid-cols-1 md:grid-flow-col md:auto-rows-min md:grid-cols-12 md:gap-x-8 md:gap-y-16"
          >
            <!-- Image section -->
            <div class="col-span-1 md:col-span-2 lg:col-start-1 lg:row-start-1">
              <img
                src="https://tailwindui.com/img/logos/mark.svg?color={#D32F2F}&shade=600"
                alt=""
                class="h-8 w-auto"
              />
            </div>

            <!-- Sitemap sections -->
            <div
              class="col-span-6 mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 md:col-start-3 md:row-start-1 md:mt-0 lg:col-span-6 lg:col-start-2"
            >
              <div class="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Robes & Burnous Kabyles</h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.products" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{
                        item.name
                      }}</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">Bijoux & Accessoires Kabyles</h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{
                        item.name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-900">Service client</h3>
                <ul role="list" class="mt-6 space-y-6">
                  <li
                    v-for="item in footerNavigation.customerService"
                    :key="item.name"
                    class="text-sm"
                  >
                    <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{
                      item.name
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Newsletter section -->
            <div
              class="mt-12 md:col-span-8 md:col-start-3 md:row-start-2 md:mt-0 lg:col-span-4 lg:col-start-9 lg:row-start-1"
            >
              <h3 class="text-sm font-medium text-gray-900">Restez informés des nouveautés</h3>
              <form class="mt-2 flex sm:max-w-md">
                <label for="email-address" class="sr-only">Votre email</label>
                <input
                  id="email-address"
                  type="text"
                  autocomplete="email"
                  required=""
                  class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <div class="ml-4 flex-shrink-0">
                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sourcrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-100 py-10 text-center">
          <p class="text-sm text-gray-500">Aller en haut de page</p>
        </div>
      </div>
    </footer>
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
            { name: 'Robe de fete', href: '#' },
            { name: 'Robe de sortie', href: '#' },
            { name: 'Robe de de maison', href: '#' },
            { name: 'Robe de simple', href: '#' }
          ]
        },
        {
          id: 'joularies',
          name: 'Bijoux',
          items: [
            { name: 'Colliers ', href: '#' },
            { name: 'Boucles ', href: '#' },
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
const categories = [
  {
    name: 'Robe de Fête ',
    href: '#',
    imageSrc: '/images/collections/fete.png',
    imageAlt: 'BRobe de Fête ',
    description: `Des robes de fête exquises, luxueuses, et vibrantes, inspirées des traditions kabyles.`
  },
  {
    name: 'Robe de Sortie ',
    href: '#',
    imageSrc: '/images/collections/sortie.png',
    imageAlt: 'Robe de Sortie ',
    description:
      'Des robes de sortie élégantes et confortables, parfaites pour le quotidien et les occasions spéciales.'
  },
  {
    name: 'Robe de Maison ',
    href: '#',
    imageSrc: '/images/collections/maison.png',
    imageAlt: 'Robe de Maison ',
    description:
      'Des robes de maison douillettes, traditionnelles et relaxantes, aux designs charmants.'
  }
]

const trendingProducts = [
  {
    id: 1,
    name: 'Thalssa',
    price: '$75',
    href: '#',
    imageSrc: '/images/collections/fete.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 2,
    name: 'Thalssa',

    price: '$75',
    href: '#',
    imageSrc: '/images/collections/fete.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 3,
    name: 'Thalssa',
    price: '$75',
    href: '#',
    imageSrc: '/images/collections/fete.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 4,
    name: 'Thalssa',
    price: '$75',
    href: '#',
    imageSrc: '/images/collections/fete.png',
    imageAlt: 'Thalssa'
  }
  // More products...
]

const accessoires = [
  {
    id: 1,
    name: 'Tassadi',
    price: '$75',
    href: '#',
    imageSrc: '/images/accessoires/1.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 2,
    name: 'Tassadi',

    price: '$75',
    href: '#',
    imageSrc: '/images/accessoires/2.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 3,
    name: 'Tassadi',
    price: '$75',
    href: '#',
    imageSrc: '/images/accessoires/3.png',
    imageAlt: 'Thalssa'
  },
  {
    id: 4,
    name: 'Tassadi',
    price: '$75',
    href: '#',
    imageSrc: '/images/accessoires/1.png',
    imageAlt: 'Thalssa'
  }
  // More products...
]

const perks = [
  {
    name: 'Free returns',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.'
  },
  {
    name: 'Same day delivery',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.'
  },
  {
    name: 'All year discount',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.'
  },
  {
    name: 'For the planet',
    imageUrl: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.'
  }
]
const footerNavigation = {
  products: [
    { name: 'Robe de fete', href: '#' },
    { name: 'Robe de sortie', href: '#' },
    { name: 'Robe de de maison', href: '#' },
    { name: 'Robe de simple', href: '#' },
    { name: 'Burnous de fete', href: '#' },
    { name: 'Burnous de sortie', href: '#' },
    { name: 'Burnous de de maison', href: '#' },
    { name: 'Burnous de simple', href: '#' }
  ],
  company: [
    { name: 'Colliers ', href: '#' },
    { name: 'Boucles ', href: '#' },
    { name: 'Bagues ', href: '#' },
    { name: 'Bracelets', href: '#' },
    { name: 'Broches ', href: '#' },
    { name: 'Bijoux de têtes', href: '#' },
    { name: 'Bijoux de pieds ', href: '#' },
    { name: 'Bijoux Ceintures ', href: '#' },
    { name: 'Accessoires', href: '#' },
    { name: 'Sacs', href: '#' },
    { name: 'Chapeaux', href: '#' },
    { name: 'Cintures', href: '#' }
  ],
  customerService: [
    { name: 'Contacter nous', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' }
  ]
}

const open = ref(false)
</script>