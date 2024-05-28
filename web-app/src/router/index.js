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
      component: () => import('../views/product/CategoriesView.vue')
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: () => import('../views/product/DetailsView.vue'),
      props : (route) =>({id:parseInt(route.params.id)})

    },
    {
      path: '/collections/:id',
      name: 'CollectionDetails',
      component: () => import('../views/product/CollectionDetailsView.vue'),
      props : (route) =>({id:parseInt(route.params.id), page:parseInt(route.query.page) || 1, pageSize:parseInt(route.query.pageSize) || 10})
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: () => import('../views/ShoppingCartView.vue')
    },
    {
      path: '/checkout',
      name: 'CheckoutView',
      component: () => import('../views/CheckoutView.vue')
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
    },

    
  ]
})

export default router
