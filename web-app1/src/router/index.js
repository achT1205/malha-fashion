import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Categories = () => import('../views/product/CategoriesView.vue')
const Details =  () => import('../views/product/DetailsView.vue')
const CollectionDetails = () => import('../views/product/CollectionDetailsView.vue')
const ShoppingCart = () => import('../views/ShoppingCartView.vue')
const Checkout = () => import('../views/CheckoutView.vue')
const NotFound = ()=> import ( '@/views/NotFound.vue')
const NetworkError = ()=> import ( '@/views/NetworkError.vue')



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories/:id',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: Details,
      props : (route) =>({id:parseInt(route.params.id)})

    },
    {
      path: '/collections/:id',
      name: 'CollectionDetails',
      component: CollectionDetails,
      props : (route) =>({id:parseInt(route.params.id), page:parseInt(route.query.page) || 1, pageSize:parseInt(route.query.pageSize) || 10})
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/checkout',
      name: 'CheckoutView',
      component: Checkout
    },
    {
      path: '/test',
      name: 'MyTest',
      component: () => import('../views/MyTest.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
