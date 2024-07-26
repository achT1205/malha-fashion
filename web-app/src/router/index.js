import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import ResetPasswordView from '../views/ResetPasswordView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CollectionsView from '../views/CollectionsView.vue'
import ProductView from '../views/ProductView.vue'
import CheckoutView from '../views/CheckoutView.vue'





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
      name:'product',
      props : (route) =>({ slug: route.params.slug, size : route.query.size | '' })
    },
    {
      path: '/checkout',
      component: CheckoutView,
      name:'checkout'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPasswordView 
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView 
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView 
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
