<script setup>
import { StarIcon } from '@heroicons/vue/20/solid'
const props = defineProps({
  reviews: { type: Array, required: true }
})

const plateformReviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 }
  ]
}
</script>

<template>
  <div class="bg-white">
    <section class="bg-white py-24 sm:py-12">
      <div class="text-center mb-10">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customer Reviews</h2>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <div class="mt-3 grid grid-cols-1 justify-items-end">
              <div>
                <div class="flex items-end">
                  <StarIcon
                    v-for="rating in [0, 1, 2, 3, 4]"
                    :key="rating"
                    :class="[
                      plateformReviews.average > rating ? 'text-black-400' : 'text-gray-300',
                      'h-5 w-5 flex-shrink-0'
                    ]"
                    aria-hidden="true"
                  />
                </div>
                <p class="sr-only">{{ plateformReviews.average }} out of 5 stars</p>
              </div>
              <p class="ml-2 mt-3 text-sm text-gray-900">
                Based on {{ plateformReviews.totalCount }} reviews
              </p>
            </div>
          </div>
          <div
            class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
          >
            <dl class="space-y-3 w-2/3">
              <div
                v-for="count in plateformReviews.counts"
                :key="count.rating"
                class="flex items-center text-sm"
              >
                <dt class="flex flex-1 items-center">
                  <p class="w-3 font-medium text-gray-900">
                    {{ count.rating }}<span class="sr-only"> star reviews</span>
                  </p>
                  <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                    <StarIcon
                      :class="[
                        count.count > 0 ? 'text-black-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      ]"
                      aria-hidden="true"
                    />

                    <div class="relative ml-3 flex-1">
                      <div class="h-3 rounded-full border border-gray-200 bg-gray-100" />
                      <div
                        v-if="count.count > 0"
                        class="absolute inset-y-0 rounded-full border border-black bg-black"
                        :style="{
                          width: `calc(${count.count} / ${plateformReviews.totalCount} * 100%)`
                        }"
                      />
                    </div>
                  </div>
                </dt>
                <dd class="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                  {{ Math.round((count.count / plateformReviews.totalCount) * 100) }}%
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            <div
              v-for="review in props.reviews"
              :key="review.id"
              class="pt-8 sm:inline-block sm:w-full sm:px-4"
            >
              <figure class="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                <blockquote class="text-gray-900">
                  <p v-html="review.content"></p>
                  <p class="mt-2">
                    <time
                      :datetime="review.datetime"
                      class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                      >{{ review.date }}</time
                    >
                  </p>
                </blockquote>
                <figcaption class="mt-6 flex items-center gap-x-4">
                  <img
                    class="h-10 w-10 rounded-full bg-gray-50"
                    :src="review.avatarSrc"
                    :alt="`${review.author}.`"
                  />
                  <div>
                    <div class="ml-4">
                      <h4 class="text-sm font-bold text-gray-900">{{ review.author }}</h4>
                      <div class="mt-1 flex items-center">
                        <StarIcon
                          v-for="rating in [0, 1, 2, 3, 4]"
                          :key="rating"
                          :class="[
                            review.rating > rating ? 'text-black-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          ]"
                          aria-hidden="true"
                        />
                      </div>
                      <p class="sr-only">{{ review.rating }} out of 5 stars</p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>