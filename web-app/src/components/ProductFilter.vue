
<script setup>
import { ref, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import BaseInput from '@/components/BaseInput.vue'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false }
]
const filters = ref()

const minPrice = ref(20)
const maxPrice = ref(1000)

const priceRange = ref([20, 1000])

filters.value = [
  {
    id: 'price',
    name: 'Prix',
    options: [{ value: 'traditionals', label: 'Célébrations traditionnelles', checked: false }]
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'dresses', label: 'Robe', checked: false }
    ]
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'Blanc', checked: false },
      { value: 'pink', label: 'Rose', checked: false },
      { value: 'blue', label: 'Bleu', checked: false },
      { value: 'green', label: 'Vert', checked: false },
      { value: 'red', label: 'Rouge', checked: false }
    ]
  },
  {
    id: 'material',
    name: 'Matière',
    options: [
      { value: 'coton', label: 'Cotonhite', checked: false },
      { value: 'wool', label: 'Laine', checked: false }
    ]
  },
  {
    id: 'model',
    name: 'Model',
    options: [{ value: 'classical', label: 'Classique', checked: false }]
  },
  {
    id: 'occasion',
    name: 'Occasion',
    options: [{ value: 'traditionals', label: 'Célébrations traditionnelles', checked: false }]
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'small', label: 'Small', checked: false },
      { value: 'medium', label: 'Medium', checked: false },
      { value: 'large', label: 'Large', checked: false }
    ]
  }
]
const activeFilters = [
  { value: 'new-arrivals', label: 'Nouvels arrivés' },
  { value: 'women-dresses', label: 'Robes femme' },
  { value: 'gilr-dresses', label: 'Robes fille' },
  { value: 'men-urnous', label: 'Burnous homme' },
  { value: 'boy-urnous', label: 'Burnous garçon' }
]

const open = ref(false)

const leftPercentage = computed(
  () => ((priceRange.value[0] - minPrice.value) / (maxPrice.value - minPrice.value)) * 100
)
const rightPercentage = computed(
  () => 100 - ((priceRange.value[1] - minPrice.value) / (maxPrice.value - minPrice.value)) * 100
)
</script>
<template>
  <div class="bg-white">
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 sm:hidden" @close="open = false">
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
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    >
                      <span class="font-medium text-gray-900">{{ section.name }}</span>
                      <span class="ml-6 flex items-center">
                        <ChevronDownIcon
                          :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-mobile-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          type="checkbox"
                          :checked="option.checked"
                          class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                        />
                        <label
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-500"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="py-24">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>
        <p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Thoughtfully designed Collection 1 for the workspace, home, and travel.
        </p>
      </div>
    </div>

    <!-- Filters -->
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" class="sr-only">Filters</h2>

      <div class="border-b border-gray-200 bg-white pb-4">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sort
                <ChevronDownIcon
                  class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a
                      :href="option.href"
                      :class="[
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm'
                      ]"
                      >{{ option.name }}</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <button
            type="button"
            class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            @click="open = true"
          >
            Filters
          </button>

          <div class="hidden sm:block">
            <div class="flow-root">
              <PopoverGroup class="-mx-4 flex items-center divide-x divide-gray-200">
                <Popover
                  v-for="section in filters"
                  :key="section.name"
                  class="relative inline-block px-4 text-left"
                >
                  <PopoverButton
                    class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <span>{{ section.name }}</span>
                    <span
                      v-if="
                        section.id != 'price' && section.options.filter((o) => o.checked).length
                      "
                      class="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700"
                      >{{ section.options.filter((o) => o.checked).length }}</span
                    >
                    <ChevronDownIcon
                      class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <PopoverPanel
                      class="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none flex w-screen max-w-max"
                    >
                      <div class="space-y-4" v-if="section.id != 'price'">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <input
                            :id="`filter-${section.id}-${optionIdx}`"
                            :name="`${section.id}[]`"
                            :value="option.value"
                            type="checkbox"
                            v-model="option.checked"
                            :checked="option.checked"
                            class="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                          />
                          <label
                            :for="`filter-${section.id}-${optionIdx}`"
                            class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                            >{{ option.label }}</label
                          >
                        </div>
                      </div>
                      <div class="space-y-4" v-else>
                        <!--                        <div class="grid grid-flow-col auto-cols-max">
                          <div>
                            <BaseInput v-model="minPrice" type="number" class="p-2" />
                          </div>
                          <div class="mt-6 ml-10 mr-10">-</div>
                          <div>
                            <BaseInput v-model="maxPrice" type="number" class="p-2" />
                          </div>
                        </div>-->
                        <div class="w-full p-4">
                          <div class="flex justify-between items-center mb-4">
                            <BaseInput
                              v-model="minPrice"
                              type="number"
                              :id="'min-price'"
                              :label="`Min Price: ${minPrice} €`"
                              class="mr-2"
                            />

                            <!-- <div>
                              <label for="min-price" class="block text-sm font-medium text-gray-700"
                                >Min Price: £{{ priceRange[0] }}</label
                              >
                              <input
                                id="min-price"
                                type="number"
                                v-model="priceRange[0]"
                                class="border rounded p-2 mt-1"
                                @change="handleRangeChange"
                              />
                            </div>-->
                            <BaseInput
                              v-model="maxPrice"
                              type="number"
                              :id="'max-price'"
                              :label="`Min Price: ${maxPrice} €`"
                              class="ml-2"
                              :max="priceRange[1]"
                              :min="minPrice"
                            />
                            <!--<div>
                              <label for="max-price" class="block text-sm font-medium text-gray-700"
                                >Max Price: £{{ priceRange[1] }}</label
                              >
                              <input
                                id="max-price"
                                type="number"
                                v-model="priceRange[1]"
                                class="border rounded p-2 mt-1"
                                @change="handleRangeChange"
                              />
                            </div>-->
                          </div>
                          <div class="relative mt-4">
                            <input
                              type="range"
                              :min="priceRange[0]"
                              :max="maxPrice"
                              v-model="minPrice"
                              @input="handleRangeChange"
                              :value="priceRange[0]"
                              class="absolute w-full mt-[-7.5px] z-10"
                            />
                            <input
                              type="range"
                              :min="minPrice"
                              :max="priceRange[1]"
                              v-model="maxPrice"
                              @input="handleRangeChange"
                              :value="priceRange[1]"
                              class="absolute w-full mt-[-7.5px] z-10"
                            />
                            <div class="absolute top-0 w-full h-1 bg-gray-200"></div>
                            <div
                              class="absolute top-0 h-1 bg-blue-500"
                              :style="{ left: leftPercentage + '%', right: rightPercentage + '%' }"
                            ></div>
                          </div>
                          <div class="flex justify-between mt-2">
                            <span>£{{ minPrice }}</span>
                            <span>£{{ maxPrice }}</span>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div>
          </div>
        </div>
      </div>

      <!-- Active filters -->
      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8">
          <h3 class="text-sm font-medium text-gray-500">
            Collections
            <span class="sr-only">, active</span>
          </h3>

          <div aria-hidden="true" class="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block" />

          <div class="mt-2 sm:ml-4 sm:mt-0">
            <div class="-m-1 flex flex-wrap items-center">
              <span
                v-for="activeFilter in activeFilters"
                :key="activeFilter.value"
                class="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
              >
                <span>{{ activeFilter.label }}</span>
                <button
                  type="button"
                  class="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                >
                  <span class="sr-only">Remove filter for {{ activeFilter.label }}</span>
                  <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
input[type='range'] {
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  pointer-events: none;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #1f2937;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 50%;
  border: 2px solid #ffffff;
}

input[type='range']::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #1f2937;
  cursor: pointer;
  pointer-events: auto;
  border-radius: 50%;
  border: 2px solid #ffffff;
}
</style>