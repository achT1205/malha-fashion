<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon, TrashIcon } from '@heroicons/vue/20/solid'
import BaseInput from '../components/BaseInput.vue'

const cartStore = useCartStore()
const shippingFee = 5
const taxesFee = 4
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4 à 10 jours ouvrables', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2 à 5 jours ouvrables', price: '$16.00' }
]
const paymentMethods = [
  { id: 'credit-card', title: 'Carte de crédit' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' }
]
const removeFromCart = (product) => {
  cartStore.removeItem(product)
}

const user = ref({})

const selectedDeliveryMethod = ref(deliveryMethods[0])
</script>
<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Checkout</h2>

      <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
        <div>
          <div>
            <h2 class="text-lg font-medium text-gray-900">Coordonnées</h2>

            <div class="mt-4">
              <label for="email-address" class="block text-sm font-medium text-gray-700"
                >Email address</label
              >
              <div class="mt-1">
                <BaseInput
                  v-model="user.email"
                  type="email"
                  id="email-address"
                  name="email-address"
                  autocomplete="email"
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Informations sur la livraison</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700"
                  >Prénom</label
                >
                <div class="mt-1">
                  <BaseInput
                    v-model="user.firstName"
                    type="text"
                    id="last-name"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">Nom</label>
                <div class="mt-1">
                  <BaseInput
                    v-model="user.lastName"
                    type="text"
                    id="last-name"
                    name="last-name"
                    autocomplete="family-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="address" class="block text-sm font-medium text-gray-700">Adresse</label>
                <div class="mt-1">
                  <BaseInput
                    v-model="user.address"
                    type="text"
                    name="address"
                    id="address"
                    autocomplete="street-address"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="apartment" class="block text-sm font-medium text-gray-700"
                  >Appartement, suite, etc. (facultatif).</label
                >
                <div class="mt-1">
                  <BaseInput
                    v-model="user.apartment"
                    type="text"
                    name="apartment"
                    id="apartment"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
                <div class="mt-1">
                  <BaseInput
                    type="text"
                    name="city"
                    v-model="user.city"
                    id="city"
                    autocomplete="address-level2"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
                <div class="mt-1">
                  <BaseInput
                    v-model="user.country"
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="region" class="block text-sm font-medium text-gray-700"
                  >État/Province</label
                >
                <div class="mt-1">
                  <BaseInput
                    v-model="user.region"
                    type="text"
                    name="region"
                    id="region"
                    autocomplete="address-level1"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="postal-code" class="block text-sm font-medium text-gray-700"
                  >Code Postal</label
                >
                <div class="mt-1">
                  <BaseInput
                    v-model="user.postalCode"
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autocomplete="postal-code"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="sm:col-span-2">
                <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
                <div class="mt-1">
                  <BaseInput
                    v-model="user.phone"
                    type="text"
                    name="phone"
                    id="phone"
                    autocomplete="tel"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Méthode de livraison</h2>

            <fieldset aria-label="Méthode de livraison" class="mt-4">
              <RadioGroup
                v-model="selectedDeliveryMethod"
                class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
              >
                <RadioGroupOption
                  as="template"
                  v-for="deliveryMethod in deliveryMethods"
                  :key="deliveryMethod.id"
                  :value="deliveryMethod"
                  :aria-label="deliveryMethod.title"
                  :aria-description="`${deliveryMethod.turnaround} for ${deliveryMethod.price}`"
                  v-slot="{ active, checked }"
                >
                  <div
                    :class="[
                      checked ? 'border-transparent' : 'border-gray-300',
                      active ? 'ring-2 ring-gray-500' : '',
                      'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                    ]"
                  >
                    <span class="flex flex-1">
                      <span class="flex flex-col">
                        <span class="block text-sm font-medium text-gray-900">{{
                          deliveryMethod.title
                        }}</span>
                        <span class="mt-1 flex items-center text-sm text-gray-500">{{
                          deliveryMethod.turnaround
                        }}</span>
                        <span class="mt-6 text-sm font-medium text-gray-900">{{
                          deliveryMethod.price
                        }}</span>
                      </span>
                    </span>
                    <CheckCircleIcon
                      v-if="checked"
                      class="h-5 w-5 text-gray-600"
                      aria-hidden="true"
                    />
                    <span
                      :class="[
                        active ? 'border' : 'border-2',
                        checked ? 'border-gray-500' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-lg'
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                </RadioGroupOption>
              </RadioGroup>
            </fieldset>
          </div>

          <!-- Payment -->
          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Paiement</h2>

            <fieldset class="mt-4">
              <legend class="sr-only">Payment type</legend>
              <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                <div
                  v-for="(paymentMethod, paymentMethodIdx) in paymentMethods"
                  :key="paymentMethod.id"
                  class="flex items-center"
                >
                  <input
                    v-if="paymentMethodIdx === 0"
                    :id="paymentMethod.id"
                    name="payment-type"
                    type="radio"
                    checked=""
                    class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                  />
                  <input
                    v-else
                    :id="paymentMethod.id"
                    name="payment-type"
                    type="radio"
                    class="h-4 w-4 border-gray-300 text-gray-600 focus:ring-gray-500"
                  />
                  <label
                    :for="paymentMethod.id"
                    class="ml-3 block text-sm font-medium text-gray-700"
                    >{{ paymentMethod.title }}</label
                  >
                </div>
              </div>
            </fieldset>

            <div class="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
              <div class="col-span-4">
                <label for="card-number" class="block text-sm font-medium text-gray-700"
                  >Numéro de carte</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autocomplete="cc-number"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-4">
                <label for="name-on-card" class="block text-sm font-medium text-gray-700"
                  >Nom sur la carte</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    id="name-on-card"
                    name="name-on-card"
                    autocomplete="cc-name"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div class="col-span-3">
                <label for="expiration-date" class="block text-sm font-medium text-gray-700"
                  >Date d'expiration (MM/AA)</label
                >
                <div class="mt-1">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autocomplete="cc-exp"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
                <div class="mt-1">
                  <input
                    type="text"
                    name="cvc"
                    id="cvc"
                    autocomplete="csc"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Récapitulatif de la commande -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Récapitulatif de la commande</h2>

          <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
            <h3 class="sr-only">Items in your cart</h3>
            <ul role="list" class="divide-y divide-gray-200">
              <li
                v-for="product in cartStore.items"
                :key="product.id"
                class="flex px-4 py-6 sm:px-6"
              >
                <div class="flex-shrink-0">
                  <img
                    :src="product.image"
                    :alt="`${product.name}_${product.color}_${product.size}`"
                    class="w-20 h-24 rounded-md"
                  />
                </div>

                <div class="ml-6 flex flex-1 flex-col">
                  <div class="flex">
                    <div class="min-w-0 flex-1">
                      <h4 class="text-sm">
                        <a
                          :href="product.href"
                          class="font-medium text-gray-700 hover:text-gray-800"
                          >{{ product.title }}</a
                        >
                      </h4>
                      <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                      <p class="mt-1 text-sm text-gray-500">{{ product.size }}</p>
                    </div>

                    <div class="ml-4 flow-root flex-shrink-0">
                      <button
                        type="button"
                        class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                        @click="removeFromCart(product)"
                      >
                        <span class="sr-only">Remove</span>
                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-1 items-end justify-between pt-2">
                    <p>
                      <span
                        :class="
                          product.discountPrice &&
                          product.discountPrice < product.price * product.quantity
                            ? 'line-through text-red-600'
                            : ''
                        "
                      >
                        {{ product.price * product.quantity }} €</span
                      >

                      <span
                        class="mt-1 text-sm font-medium text-gray-900 ml-4"
                        v-if="
                          product.discountPrice &&
                          product.discountPrice < product.price * product.quantity
                        "
                        >{{ product.discountPrice }}
                        €
                      </span>
                    </p>

                    <div class="ml-4">
                      <label for="quantity" class="sr-only">Quantity</label>
                      <select
                        v-model="product.quantity"
                        @change="cartStore.editItem(product, product.quantity)"
                        id="quantity"
                        name="quantity"
                        class="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 sm:text-sm"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex items-center justify-between">
                <dt class="text-sm">Total(Sans frais)</dt>
                <dd class="text-sm font-medium text-gray-900">{{ cartStore.totalPrice }} €</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Expédition</dt>
                <dd class="text-sm font-medium text-gray-900">{{ shippingFee }} €</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Taxes</dt>
                <dd class="text-sm font-medium text-gray-900">{{ taxesFee }} €</dd>
              </div>
              <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-gray-900">
                  <p>
                    <span :class="cartStore.totalDiscountPrice ? 'line-through text-red-600' : ''"
                      >{{ shippingFee + taxesFee + cartStore.totalPrice }} €
                    </span>

                    <span class="ml-3"
                      >{{ shippingFee + taxesFee + cartStore.totalDiscountPrice }} €</span
                    >
                  </p>
                </dd>
              </div>
            </dl>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                class="w-full rounded-md border border-transparent bg-gray-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirmer la commande
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
