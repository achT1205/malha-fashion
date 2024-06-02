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
                path: '/ecommerce/product-list',
                name: 'product-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Product List']
                },
                component: () => import('@/views/e-commerce/ProductList.vue')
            },
            {
                path: '/ecommerce/collection-list',
                name: 'collection-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Collection List']
                },
                component: () => import('@/views/e-commerce/CollectionList.vue')
            },
            {
                path: '/ecommerce/category-list',
                name: 'category-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Category List']
                },
                component: () => import('@/views/e-commerce/CategoryList.vue')
            },
            {
                path: '/ecommerce/occasion-list',
                name: 'occasion-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Occasion List']
                },
                component: () => import('@/views/e-commerce/OccasionList.vue')
            },
            {
                path: '/ecommerce/size-list',
                name: 'size-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Size List']
                },
                component: () => import('@/views/e-commerce/SizeList.vue')
            },
            {
                path: '/ecommerce/material-list',
                name: 'material-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Material List']
                },
                component: () => import('@/views/e-commerce/MaterialList.vue')
            },
            {
                path: '/ecommerce/model-list',
                name: 'model-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Model List']
                },
                component: () => import('@/views/e-commerce/ModelList.vue')
            },
            {
                path: '/ecommerce/color-list',
                name: 'color-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Color List']
                },
                component: () => import('@/views/e-commerce/ColorList.vue')
            },
            {
                path: '/ecommerce/tag-list',
                name: 'tag-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Tag List']
                },
                component: () => import('@/views/e-commerce/TagList.vue')
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
