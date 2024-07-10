import { defineStore } from 'pinia';
import { ref, computed } from 'vue'

// Utilitaire pour gérer le stockage dans localStorage
const useLocalStorage = (key, initialValue) => {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue !== null ? storedValue : initialValue;
};


export const useCartStore = defineStore('cart', () => {
    const items = ref( useLocalStorage('cartItems', []))
    function addItem(product) {
        const existingItem = items.value.find(item => item.id === product.id && product.color === item.color && product.size === item.size);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          items.value.push(product);
        }
        saveCart();
    }
    function editItem(product, quantity) {
        const index = items.value.findIndex(item => item.id === product.id && product.color === item.color && product.size === item.size);
        items.value[index].quantity = quantity
        saveCart();
    }
    function removeItem(product) {
        const index = items.value.findIndex(item => item.id === product.id && product.color === item.color && product.size === item.size);
        items.value.splice(index, 1)
        saveCart();
    }
    function clearCart() {
        items.value = [];
        saveCart();
    }
    function  saveCart() {
        localStorage.setItem('cartItems', JSON.stringify(items.value));
    }
    function loadCart() {
        items.value = useLocalStorage('cartItems', []);
    }
    
    const itemCount = computed(() =>items.value.length)
    const totalPrice = computed(()=> items.value.reduce((total, item) => total + item.price * item.quantity, 0))
    
    return { addItem, removeItem, clearCart, saveCart , loadCart, itemCount, totalPrice, items, editItem }
})
