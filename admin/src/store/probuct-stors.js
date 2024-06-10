import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useProductStore = defineStore('product', () => {
  const storedProduct = ref(null)
  function onOpdateProduct(p) {
    storedProduct.value = p; 
    console.log("in store",  storedProduct.value);
  }

  return { storedProduct , onOpdateProduct}
})
