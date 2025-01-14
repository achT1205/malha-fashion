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
                path: '/ecommerce/product/create',
                name: 'product-create',
                meta: {
                    breadcrumb: ['E-Commerce', 'Product Create']
                },
                component: () => import('@/views/e-commerce/product/Create.vue')
            },
            {
                path: '/ecommerce/products/:id/edit',
                name: 'product-edit',
                meta: {
                    breadcrumb: ['E-Commerce', 'Product Edit']
                },
                component: () => import('@/views/e-commerce/product/Create.vue')
            },
            {
                path: '/ecommerce/products/:id',
                name: 'product-details',
                meta: {
                    breadcrumb: ['E-Commerce', 'Product Details']
                },
                component: () => import('@/views/e-commerce/product/ProductOverview.vue')
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
                component: () => import('@/views/e-commerce/product/parameters/CollectionList.vue')
            },
            {
                path: '/ecommerce/product/category-list',
                name: 'category-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Category List']
                },
                component: () => import('@/views/e-commerce/product/parameters/CategoryList.vue')
            },
            {
                path: '/ecommerce/product/occasion-list',
                name: 'occasion-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Occasion List']
                },
                component: () => import('@/views/e-commerce/product/parameters/OccasionList.vue')
            },
            {
                path: '/ecommerce/product/shipping-list',
                name: 'shipping-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Shippings List']
                },
                component: () => import('@/views/e-commerce/product/parameters/Shippings.vue')
            },
            {
                path: '/ecommerce/product/return-list',
                name: 'return-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Return List']
                },
                component: () => import('@/views/e-commerce/product/parameters/Returns.vue')
            },
            {
                path: '/ecommerce/product/care-list',
                name: 'care-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Care List']
                },
                component: () => import('@/views/e-commerce/product/parameters/MaterialAndCares.vue')
            },
            {
                path: '/ecommerce/product/size-list',
                name: 'size-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Size List']
                },
                component: () => import('@/views/e-commerce/product/parameters/SizeList.vue')
            },
            {
                path: '/ecommerce/product/material-list',
                name: 'material-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Material List']
                },
                component: () => import('@/views/e-commerce/product/parameters/MaterialList.vue')
            },
            {
                path: '/ecommerce/product/model-list',
                name: 'model-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Model List']
                },
                component: () => import('@/views/e-commerce/product/parameters/ModelList.vue')
            },
            {
                path: '/ecommerce/product/color-list',
                name: 'color-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Color List']
                },
                component: () => import('@/views/e-commerce/product/parameters/ColorList.vue')
            },
            {
                path: '/ecommerce/product/tag-list',
                name: 'tag-list',
                meta: {
                    breadcrumb: ['E-Commerce', 'Tag List']
                },
                component: () => import('@/views/e-commerce/product/parameters/TagList.vue')
            },
            {
                path: '/profile',
                name: 'admin-profile',
                meta: {
                    breadcrumb: ['Admin Management', 'Profile']
                },
                component: () => import('@/views/admin-management/Profile.vue')
            },
            {
                path: '/profiles/:id/edit',
                name: 'admin-profile-edit',
                meta: {
                    breadcrumb: ['Admin Management', 'Profile']
                },
                component: () => import('@/views/admin-management/Profile.vue')
            },
            {
                path: '/profile/list',
                name: 'admin-list',
                meta: {
                    breadcrumb: ['Admin Management', 'List']
                },
                component: () => import('@/views/admin-management/AdminList.vue')
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
