<template>
  <div>
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="mobileFiltersOpen">
      <Dialog class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
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
                  @click="mobileFiltersOpen = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4 border-t border-gray-200">
                <Disclosure
                  as="div"
                  v-for="section in props.filters"
                  :key="section.id"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                    >
                      <span class="font-medium text-gray-900">{{ section.name }}</span>
                      <span class="ml-6 flex items-center">
                        <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                        <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
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
                          class="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                        />
                        <label
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          class="ml-3 min-w-0 flex-1 text-gray-500"
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

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">{{ props.collection.name }}</h1>

        <div class="flex items-center">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Sort
                <span v-if="selectSortOption" class="ml-1"> by : {{ selectSortOption.name }}</span>
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
                class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem
                    v-for="option in localSortOptions"
                    :key="option.name"
                    v-slot="{ active }"
                  >
                    <a
                      @click="handleSortOptionChange(option)"
                      :class="[
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm cursor-pointer'
                      ]"
                      >{{ option.name }}</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>

          <button type="button" class="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span class="sr-only">View grid</span>
            <Squares2X2Icon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            @click="mobileFiltersOpen = true"
          >
            <span class="sr-only">Filters</span>
            <FunnelIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <section aria-labelledby="products-heading" class="pb-24 pt-6">
        <h2 id="products-heading" class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <!-- Filters -->
          <form class="hidden lg:block">
            <Disclosure
              as="div"
              v-for="section in localFilters"
              :key="section.id"
              class="border-b border-gray-200 py-6"
              v-slot="{ open }"
            >
              <h3 class="-my-3 flow-root">
                <DisclosureButton
                  class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                >
                  <span class="font-medium text-gray-900">{{ section.name }} </span>
                  <span class="ml-6 flex items-center">
                    <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                    <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel class="pt-6">
                <div class="space-y-4">
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
                      :checked="option.checked"
                      v-model="option.checked"
                      class="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <label
                      :for="`filter-${section.id}-${optionIdx}`"
                      class="ml-3 text-sm text-gray-600"
                      >{{ option.label }}</label
                    >
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </form>

          <!-- Product grid -->
          <div class="lg:col-span-3">
            <div
              class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3"
            >
              <ProductCardWithQuickView
                v-for="product in props.products"
                :key="product.id"
                :product="product"
              />
            </div>
            <div class="card">
              <Paginator-T
                :rows="currentPageSize"
                :totalRecords="products.length"
                :rowsPerPageOptions="[10, 20, 30]"
                @page="onHandlePageChange"
              >
                <template #start="slotProps"> Page: {{ slotProps.state.page + 1 }} </template>
              </Paginator-T>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
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
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon
} from '@heroicons/vue/20/solid'
import ProductCardWithQuickView from './ProductCardWithQuickView.vue'
import { debounce } from 'lodash-es'
import { ref, reactive, computed, onMounted, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  sortOptions: { type: Array, default: () => [] },
  filters: { type: Array, default: () => [] },
  products: { type: Array, default: () => [] },
  collection: { type: Object, default: () => ({}) },
  page: { type: Number, default: 1 },
  pageSize: { type: Number, default: 10 }
})

const currentPage = ref(1) //computed(() => props.page)
const currentPageSize = ref(10) // computed(() => props.pageSize)
const selectSortOption = ref()
const loading = ref(false)
const totalPages = ref(0) // This should be set based on backend data

const localSortOptions = ref([...props.sortOptions])
const localFilters = ref([...props.filters])
const mobileFiltersOpen = ref(false)

const fetchFilteredData = debounce(async (query) => {
  loading.value = true
  try {
    const response = await axios.get(
      `/api/products?_limit=${currentPageSize.value}&_page=${currentPage.value}`,
      {
        params: query
      }
    )
    console.log('Data:', response.data)
    // Update your data view here
    //totalPages.value = calculateTotalPages(response.data.totalCount, pageSize.value);
  } catch (error) {
    console.error('API Error:', error)
  } finally {
    loading.value = false
  }
}, 300)

const updateRouterQuery = (params) => {
  const currentQuery = { ...router.currentRoute.value.query, ...params }
  router.push({ query: currentQuery })
}

watch(
  localFilters,
  () => {
    const query = {}
    localFilters.value.forEach((filter) => {
      if (filter.options.every((_) => !_.checked)) {
        const currentQuery = router.currentRoute.value.query
        const name = currentQuery[filter.id]
        if (name) {
          delete router.currentRoute.value.query[filter.id]
          router.push({ query: router.currentRoute.value.query }) //to be fixed
          // return
        }
      } else {
        const checkedOptions = filter.options
          .filter((option) => option.checked)
          .map((option) => option.value)
        if (checkedOptions.length > 0) {
          query[filter.id] = checkedOptions.join(',')
        }
      }
    })
    query.page = currentPage.value
    query.pageSize = currentPageSize.value
    updateRouterQuery(query)
    fetchFilteredData(query)
  },
  { deep: true }
)

watch(
  () => route.query.sort,
  (newSort) => {
    localSortOptions.value.forEach((option) => {
      option.current = option.name === newSort
    })
  }
)

const updateFilterAndSortFromRoute = (query) => {
  const sortQuery = query.sort
  const filterQueries = Object.keys(query).filter(
    (k) => k !== 'sort' && k !== 'page' && k !== 'pageSize'
  )

  if (sortQuery) {
    localSortOptions.value.forEach((option) => {
      option.current = option.name === sortQuery
      selectSortOption.value = option
    })
  }

  filterQueries.forEach((key) => {
    const filter = localFilters.value.find((f) => f.id === key)
    if (filter) {
      const values = query[key].split(',')
      filter.options.forEach((option) => {
        option.checked = values.includes(option.value)
      })
    }
  })
}
const handleSortOptionChange = (selectedOption) => {
  localSortOptions.value.forEach((option) => {
    option.current = option === selectedOption
    selectSortOption.value = selectedOption
  })
  const sortParams = {
    sort: selectedOption.name,
    page: currentPage.value,
    pageSize: currentPageSize.value
  }
  updateRouterQuery(sortParams)
  fetchFilteredData(sortParams)
}

const onHandlePageChange = (ev) => {
  const pageParams = {
    page: ev.page + 1,
    pageSize: ev.rows
  }
  updateRouterQuery(pageParams)
  fetchFilteredData(pageParams)
}
/*
function calculateTotalPages(totalCount, pageSize) {
  return Math.ceil(totalCount / pageSize);
}

*/

onMounted(() => {
  watchEffect(() => {
    const initialQuery = route.query
    currentPage.value = parseInt(initialQuery.page)
    currentPageSize.value = parseInt(initialQuery.pageSize)
    updateFilterAndSortFromRoute(initialQuery)
  })
})
</script>