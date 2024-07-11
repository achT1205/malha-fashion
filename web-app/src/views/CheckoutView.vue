
<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon, TrashIcon } from '@heroicons/vue/20/solid'
import BaseInput from '../components/BaseInput.vue'
import BaseSelect from '../components/BaseSelect.vue'

const cartStore = useCartStore()
const shippingFee = 5
const taxesFee = 4
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' }
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' }
]

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
            <h2 class="text-lg font-medium text-gray-900">Contact information</h2>

            <div class="mt-4">
              <BaseInput
                v-model="user.firstName"
                label="Email address"
                type="email"
                id="email-address"
                name="email-address"
                autocomplete="email"
              />
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <h2 class="text-lg font-medium text-gray-900">Shipping information</h2>

            <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <BaseInput v-model="user.firstName" label="Prénom" type="text" />

              <BaseInput v-model="user.lastName" label="Nom" type="text" />

              <div >
                <BaseInput v-model="user.address" label="Adresse" type="text" />
              </div>

              <BaseInput v-model="user.city" label="Ville" type="text" />
              <BaseSelect
                :options="['Canada', 'Mexico']"
                v-model="user.country"
                label="Choisir un pays"
              />

              <BaseInput v-model="user.region" label="State / Province" type="text" />

              <BaseInput v-model="user.region" label="Postal code" type="number" />

              <BaseInput
                v-model="user.phone"
                label="Phone"
                type="text"
                name="phone"
                id="phone"
                autocomplete="tel"
              />
            </div>
          </div>

          <div class="mt-10 border-t border-gray-200 pt-10">
            <fieldset>
              <legend class="text-lg font-medium text-gray-900">Delivery method</legend>
              <RadioGroup
                v-model="selectedDeliveryMethod"
                class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
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
            <h2 class="text-lg font-medium text-gray-900">Payment</h2>

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
                  >Card number</label
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
                  >Name on card</label
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
                  >Expiration date (MM/YY)</label
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

        <!-- Order summary -->
        <div class="mt-10 lg:mt-0">
          <h2 class="text-lg font-medium text-gray-900">Order summary</h2>

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
                      >
                        <span class="sr-only">Remove</span>
                        <TrashIcon class="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div class="flex flex-1 items-end justify-between pt-2">
                    <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>

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
                <dt class="text-sm">Subtotal</dt>
                <dd class="text-sm font-medium text-gray-900">${{ cartStore.totalPrice }}</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Shipping</dt>
                <dd class="text-sm font-medium text-gray-900">${{ shippingFee }}</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-sm">Taxes</dt>
                <dd class="text-sm font-medium text-gray-900">${{ taxesFee }}</dd>
              </div>
              <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt class="text-base font-medium">Total</dt>
                <dd class="text-base font-medium text-gray-900">
                  ${{ shippingFee + taxesFee + cartStore.totalPrice }}
                </dd>
              </div>
            </dl>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <button
                type="submit"
                class="w-full rounded-md border border-transparent bg-gray-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Confirm order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>