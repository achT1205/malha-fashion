<template>
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
                  <a :href="item.href" class="text-gray-500 hover:text-gray-600">{{ item.name }}</a>
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
                class="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500"
              />
              <div class="ml-4 flex-shrink-0">
                <button
                  type="submit"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
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
</template>

<script setup>
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
</script>