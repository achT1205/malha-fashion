<template>
  <div class="bg-white" v-if="collection">
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
      :filters="filters"
      :products="products"
      :collection="collection"
    />
  </div>
</template>

<script setup>
import ProductsGrid from '../../components/ProductsGrid.vue'
import { computed, onMounted, ref } from 'vue'
import { ProductService } from '@/service/ProductService'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  if (id.value)
    ProductService.getCollection(id.value)
      .then((data) => {
        collection.value = data
      })
      .catch((error) => {
        // if (error.response && error.response.status == 404) {
        router.push({
          name: '404Resource',
          params: { resource: 'collection' }
        })
        /* } else {
          router.push({ name: 'NetworkError' })
        }*/
      })

  ProductService.getProducts().then((data) => (products.value = data))
  ProductService.getFilterOptions().then((data) => (filters.value = data))
  ProductService.getSortOptions().then((data) => (sortOptions.value = data))
})

const products = ref()
const collection = ref()
const sortOptions = ref()
const filters = ref()

const props = defineProps({
  id: { type: Number }
})
const id = computed(() => props.id)
</script>