import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const routes = [
    {
        path: '/',
        component: AppLayout,
        children: [
            {
                path: '/',
                name: 'e-commerce',
                meta: {
                    breadcrumb: ['E-COMMERCE DASHBOARD']
                },
                component: () => import('@/views/dashboards/Ecommerce.vue')
            },
            {
                path: '/dashboard-banking',
                name: 'dashboard-banking',
                meta: {
                    breadcrumb: ['BANKING DASHBOARD']
                },
                component: () => import('@/views/dashboards/Banking.vue')
            },
            {
                path: '/ecommerce/product/product-list',
                name: 'product-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Product List']
                },
                component: () => import('@/views/e-commerce/product/ProductList.vue')
            },
            {
                path: '/ecommerce/product/collection-list',
                name: 'collection-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Collection List']
                },
                component: () => import('@/views/e-commerce/product/CollectionList.vue')
            },
            {
                path: '/ecommerce/product/category-list',
                name: 'category-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Category List']
                },
                component: () => import('@/views/e-commerce/product/CategoryList.vue')
            },
            {
                path: '/ecommerce/product/occasion-list',
                name: 'occasion-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Occasion List']
                },
                component: () => import('@/views/e-commerce/product/OccasionList.vue')
            },
            {
                path: '/ecommerce/product/size-list',
                name: 'size-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Size List']
                },
                component: () => import('@/views/e-commerce/product/SizeList.vue')
            },
            {
                path: '/ecommerce/product/material-list',
                name: 'material-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Material List']
                },
                component: () => import('@/views/e-commerce/product/MaterialList.vue')
            },
            {
                path: '/ecommerce/product/model-list',
                name: 'model-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Model List']
                },
                component: () => import('@/views/e-commerce/product/ModelList.vue')
            },
            {
                path: '/ecommerce/product/color-list',
                name: 'color-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Color List']
                },
                component: () => import('@/views/e-commerce/product/ColorList.vue')
            },
            {
                path: '/ecommerce/product/tag-list',
                name: 'tag-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Tag List']
                },
                component: () => import('@/views/e-commerce/product/TagList.vue')
            },
            {
                path: '/profile/create',
                name: 'user-create',
                meta: {
                    breadcrumb: ['User Management', 'Create']
                },
                component: () => import('@/views/user-management/UserCreate.vue')
            },
            {
                path: '/profile/list',
                name: 'user-list',
                meta: {
                    breadcrumb: ['User Management', 'List']
                },
                component: () => import('@/views/user-management/UserList.vue')
            },
            {
                path: '/auth/login',
                name: 'login',
                component: () => import('@/views/auth/Login.vue')
            },
            {
                path: '/auth/access',
                name: 'accessDenied',
                component: () => import('@/views/auth/AccessDenied.vue')
            },
            {
                path: '/auth/error',
                name: 'error',
                component: () => import('@/views/auth/Error.vue')
            },
            {
                path: '/auth/register',
                name: 'register',
                component: () => import('@/views/auth/Register.vue')
            },
            {
                path: '/auth/forgotpassword',
                name: 'forgotpassword',
                component: () => import('@/views/auth/ForgotPassword.vue')
            },
            {
                path: '/auth/newpassword',
                name: 'newpassword',
                component: () => import('@/views/auth/NewPassword.vue')
            },
            {
                path: '/auth/verification',
                name: 'verification',
                component: () => import('@/views/auth/Verification.vue')
            },
            {
                path: '/auth/lockscreen',
                name: 'lockscreen',
                component: () => import('@/views/auth/LockScreen.vue')
            },
            {
                path: '/ecommerce/commande/commande-list',
                name: 'commande-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Commande List']
                },
                component: () => import('@/views/e-commerce/commande/CommandeList.vue')
            },
            {
                path: '/ecommerce/client/client-list',
                name: 'client-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Client List']
                },
                component: () => import('@/views/e-commerce/client/ClientList.vue')
            },
            {
                path: '/ecommerce/promo/promo-list',
                name: 'promo-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Promo List']
                },
                component: () => import('@/views/e-commerce/promo/PromoList.vue')
            },










            {
                path: '/:pathMatch(.*)*',
                name: 'notfound',
                component: () => import('@/views/NotFound.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    }
});

export default router;
