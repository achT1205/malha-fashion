import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import ProductView from '../views/ProductView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/collections/:name',
      component: CollectionsView,
      name:'collections'
    },
    {
      path: '/products/:slug',
      component: ProductView,
      name:'product'
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
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
