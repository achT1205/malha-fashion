<template>
  <div class="group relative" v-if="props.product">
    <div class="border border-surface-200 dark:border-surface-700 rounded-md m-2 p-3">
      <router-link :to="`/products/${props.product.id}`">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img
              :src="props.product.image.src"
              :alt="props.product.name"
              class="w-full rounded-md"
            />
            <Tag-T
              :value="productStatus.status"
              :severity="productStatus.severity"
              class="absolute"
              style="left: 5px; top: 5px"
            />
          </div>
        </div>
        <div class="mb-3 font-medium">{{ props.product.name }}</div>
      </router-link>
      <div class="flex justify-between items-center">
        <div class="mt-0 font-semibold text-xl">
          {{ props.product.price }} <span class="ml-1">€</span>
        </div>
        <span>
          <Button-T icon="pi pi-heart" severity="secondary" outlined />
          <Button-T icon="pi pi-shopping-cart" severity="primary" class="ml-2" />
          <Button-T icon="pi pi-eye" severity="info" class="ml-2" @click="open = true" />
        </span>
      </div>
    </div>

    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enter-to="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 md:scale-100"
              leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <DialogPanel
                class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
              >
                <div
                  class="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                >
                  <button
                    type="button"
                    class="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    @click="open = false"
                  >
                    <span class="sr-only">Close</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div
                    class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"
                  >
                    <div
                      class="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5"
                    >
                      <Carousel-T
                        :value="selectedColor.images"
                        :numVisible="numVisible"
                        :numScroll="numScroll"
                        :autoplayInterval="autoplayInterval"
                        :responsiveOptions="responsiveOptions"
                        :showNavigators="showNavigators"
                        :showIndicators="showIndicators"
                        circular
                      >
                        <template #item="slotProps">
                          <img
                            :src="slotProps.data.src"
                            :alt="slotProps.data.alt"
                            class="object-cover object-center"
                          />
                        </template>
                      </Carousel-T>
                    </div>

                    <div class="sm:col-span-8 lg:col-span-7">
                      <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                        {{ props.product.name }}
                      </h2>

                      <section aria-labelledby="information-heading" class="mt-2">
                        <h3 id="information-heading" class="sr-only">Product information</h3>

                        <p class="text-2xl text-gray-900">{{ selectedColor.price }}</p>

                        <!-- Reviews -->
                        <div class="mt-6">
                          <h3 class="sr-only">Reviews</h3>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <StarIcon
                                v-for="rating in [0, 1, 2, 3, 4]"
                                :key="rating"
                                :class="[
                                  selectedColor.reviews.average > rating
                                    ? 'text-gray-900'
                                    : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                ]"
                                aria-hidden="true"
                              />
                            </div>
                            <p class="sr-only">
                              {{ selectedColor.reviews.average }} out of 5 stars
                            </p>
                            <a
                              :href="selectedColor.reviews.href"
                              class="ml-3 text-sm font-medium text-pink-600 hover:text-pink-500"
                              >{{ selectedColor.reviews.totalCount }} reviews</a
                            >
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" class="mt-10">
                        <h3 id="options-heading" class="sr-only">Product options</h3>

                        <form>
                          <!-- Colors -->
                          <div>
                            <h3 class="text-sm font-medium text-gray-900">Color</h3>

                            <RadioGroup v-model="selectedColor" class="mt-4">
                              <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                              <div class="flex items-center space-x-3">
                                <RadioGroupOption
                                  as="template"
                                  v-for="color in props.product.colors"
                                  :key="color.name"
                                  :value="color"
                                  v-slot="{ active, checked }"
                                >
                                  <div
                                    :class="[
                                      color.selectedClass,
                                      active && checked ? 'ring ring-offset-1' : '',
                                      !active && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    ]"
                                    v-tooltip.bottom="color.name"
                                  >
                                    <RadioGroupLabel as="span" class="sr-only">{{
                                      color.name
                                    }}</RadioGroupLabel>
                                    <span
                                      aria-hidden="true"
                                      :class="[
                                        color.class,
                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                      ]"
                                    />
                                  </div>
                                </RadioGroupOption>
                              </div>
                            </RadioGroup>
                          </div>

                          <!-- Sizes -->
                          <div class="mt-10" v-if="!isAccessory">
                            <div class="flex items-center justify-between">
                              <h3 class="text-sm font-medium text-gray-900">Size</h3>
                              <a
                                href="#"
                                class="text-sm font-medium text-pink-600 hover:text-pink-500"
                                >Size guide</a
                              >
                            </div>

                            <RadioGroup v-model="selectedSize" class="mt-4">
                              <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                              <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                <RadioGroupOption
                                  as="template"
                                  v-for="size in selectedColor.sizes"
                                  :key="size.name"
                                  :value="size"
                                  :disabled="size.quantity === 0"
                                  v-slot="{ active, checked }"
                                >
                                  <div
                                    :class="[
                                      size.quantity > 0
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      active ? 'ring-2 ring-pink-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                    ]"
                                  >
                                    <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                                    <span
                                      v-if="size.quantity > 0"
                                      :class="[
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-pink-500' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-md'
                                      ]"
                                      aria-hidden="true"
                                    />
                                    <span
                                      v-else
                                      aria-hidden="true"
                                      class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        class="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line
                                          x1="0"
                                          y1="100"
                                          x2="100"
                                          y2="0"
                                          vector-effect="non-scaling-stroke"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </RadioGroupOption>
                              </div>
                            </RadioGroup>
                          </div>

                          <button
                            type="button"
                            :class="[
                              available
                                ? 'bg-pink-600 hover:bg-pink-700 focus:ring-pink-500'
                                : 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
                              'mt-6 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2'
                            ]"
                          >
                            {{
                              !selectedSize
                                ? 'Select your size'
                                : selectedSize && !available
                                ? 'OUTOFSTOCK'
                                : 'Add to bag'
                            }}
                          </button>
                          <p class="absolute left-4 top-4 text-center sm:static sm:mt-6">
                            <router-link
                              class="font-medium text-pink-600 hover:text-pink-500"
                              :to="`/products/${product.id}`"
                            >
                              Voir le details
                            </router-link>
                          </p>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup>
import { XMarkIcon } from '@heroicons/vue/24/outline'
import {
  Dialog,
  DialogPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  TransitionChild,
  TransitionRoot
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { ref, computed, watch } from 'vue'
const props = defineProps({
  product: {
    type: [String, null],
    required: true
  },
  threshold: {
    type: Number,
    required: true,
    default: 20
  },
  autoplayInterval: {
    type: [Number, null],
    required: true,
    default: null
  },
  numVisible: {
    type: Number,
    required: true,
    default: 1
  },
  numScroll: {
    type: Number,
    required: true,
    default: 1
  },
  showNavigators: {
    type: Boolean,
    required: true,
    default: false
  },
  showIndicators: {
    type: Boolean,
    required: true,
    default: true
  }
})

const open = ref(false)
const selectedColor = ref(props.product.colors[0])
const category = props.product.category
const selectedSize = ref()

const available = computed(() => {
  if (category.name === 'bag' || category.name === 'accessory')
    return selectedColor.value.quantity > 0
  return selectedSize.value?.quantity > 0
})

const isAccessory = computed(() => {
  return category.name === 'bag' || category.name === 'accessory'
})

watch(selectedColor, (newValue, oldValue) => {
  if (newValue !== oldValue) selectedSize.value = null
})

const productStatus = computed(() => {
  const status = { status: 'OUTOFSTOCK', severity: 'danger' }

  if (!props.product.colors) return status
  else {
    let totalQuantity = 0
    if (category.name === 'bag' || category.name === 'accessory') {
      totalQuantity = props.product.colors.reduce((sum, color) => sum + color.quantity, 0)
    } else {
      totalQuantity = props.product.colors.reduce((sum, color) => {
        return sum + color.sizes.reduce((sizeSum, size) => sizeSum + size.quantity, 0)
      }, 0)
    }

    if (totalQuantity > props.threshold) {
      status.status = 'INSTOCK'
      status.severity = 'success'
    } else if (totalQuantity <= props.threshold && totalQuantity > 0) {
      status.status = 'LOWSTOCK'
      status.severity = 'warning'
    } else {
      status.status = 'OUTOFSTOCK'
      status.severity = 'danger'
    }
    return status
  }
})
</script>