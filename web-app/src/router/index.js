import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/categories/:id',
      name: 'Categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: () => import('../views/ProductDetailsView.vue')
    },
    {
      path: '/collections/:id',
      name: 'CollectionDetails',
      component: () => import('../views/CollectionDetailsView.vue')
    }
  ]
})

export default router
