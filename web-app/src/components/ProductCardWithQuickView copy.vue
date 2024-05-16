<template>
  <div class="group relative m-2 p-3" v-if="props.product">
    <div class="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
      <router-link :to="`/products/${props.product.id}`">
        <img
          :src="props.product.imageSrc"
          :alt="props.product.imageAlt"
          class="h-full w-full object-cover object-center"
        />
      </router-link>
    </div>
    <h3 class="mt-4 text-sm text-gray-700">
      <router-link :to="`/products/${props.product.id}`">
        {{ props.product.name }}
      </router-link>
    </h3>
    <p class="mt-1 text-sm text-gray-500">{{ props.product.color }}</p>
    <p class="mt-1 text-sm font-medium text-gray-900">{{ props.product.price }}</p>
    <div
      class="mt-3 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 z-10 w-full rounded-md bg-white bg-opacity-75 text-sm text-gray-900 opacity-0 focus:opacity-100 group-hover:opacity-100"
    >
      <button
        type="button"
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <ShoppingBagIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
      <button
        @click="open = true"
        class="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-50 px-8 py-3 text-base font-medium text-pink-700 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        <EyeIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
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
                      <img
                        :src="props.product.imageSrc"
                        :alt="props.product.imageAlt"
                        class="object-cover object-center"
                      />
                    </div>
                    <div class="sm:col-span-8 lg:col-span-7">
                      <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">
                        {{ props.product.name }}
                      </h2>

                      <section aria-labelledby="information-heading" class="mt-2">
                        <h3 id="information-heading" class="sr-only">Product information</h3>

                        <p class="text-2xl text-gray-900">{{ props.product.price }}</p>

                        <!-- Reviews -->
                        <div class="mt-6">
                          <h4 class="sr-only">Reviews</h4>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <StarIcon
                                v-for="rating in [0, 1, 2, 3, 4]"
                                :key="rating"
                                :class="[
                                  props.product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                  'h-5 w-5 flex-shrink-0'
                                ]"
                                aria-hidden="true"
                              />
                            </div>
                            <p class="sr-only">{{ props.product.rating }} out of 5 stars</p>
                            <a
                              href="#"
                              class="ml-3 text-sm font-medium text-pink-600 hover:text-pink-500"
                              >{{ props.product.reviewCount }} reviews</a
                            >
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" class="mt-10">
                        <h3 id="options-heading" class="sr-only">Product options</h3>

                        <form>
                          <!-- Colors -->
                          <div>
                            <h4 class="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup v-model="selectedColor" class="mt-4">
                              <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                              <span class="flex items-center space-x-3">
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
                              </span>
                            </RadioGroup>
                          </div>

                          <!-- Sizes -->
                          <div class="mt-10">
                            <div class="flex items-center justify-between">
                              <h4 class="text-sm font-medium text-gray-900">Size</h4>
                              <a
                                href="#"
                                class="text-sm font-medium text-pink-600 hover:text-pink-500"
                                >Size guide</a
                              >
                            </div>

                            <RadioGroup v-model="selectedSize" class="mt-4">
                              <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
                              <div class="grid grid-cols-4 gap-4">
                                <RadioGroupOption
                                  as="template"
                                  v-for="size in props.product.sizes"
                                  :key="size.name"
                                  :value="size"
                                  :disabled="!size.inStock"
                                  v-slot="{ active, checked }"
                                >
                                  <div
                                    :class="[
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      active ? 'ring-2 ring-pink-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    ]"
                                  >
                                    <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                                    <span
                                      v-if="size.inStock"
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
                            type="submit"
                            class="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                          >
                            Add to bag
                          </button>
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
import { ShoppingBagIcon, EyeIcon, XMarkIcon } from '@heroicons/vue/24/outline'
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
import { ref } from 'vue'

const props = defineProps({
  product: {
    type: [String, null],
    required: true
  }
})

const open = ref(false)
const selectedColor = ref({ name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' })
const selectedSize = ref({ name: 'S', inStock: true })
</script>