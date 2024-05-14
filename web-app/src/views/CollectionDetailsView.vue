<template>
  <div class="bg-white">
    <section aria-labelledby="sale-heading">
      <div class="overflow-hidden pt-32 sm:pt-14">
        <div class="relative bg-gray-900">
          <div
            class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2"
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
    <ProductsGrid/>
  </div>
</template>

<script setup>
import ProductsGrid from '../components/ProductsGrid.vue'
</script>