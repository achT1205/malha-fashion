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
    },
    {
      path: '/test',
      name: 'MyTest',
      component: () => import('../views/MyTest.vue')
    },
    {
      path: '/test1',
      name: 'MyTest1',
      component: () => import('../views/MyTest1.vue')
    }
  ]
})

export default router
