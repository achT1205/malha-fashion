<script setup>
import { ref } from 'vue';
import AppMenuItem from './AppMenuItem.vue';

const navigation = ref([
    {
        label: 'Dashboards',
        icon: 'pi pi-home',
        items: [
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-home',
                to: '/'
            },
            {
                label: 'Banking',
                icon: 'pi pi-fw pi-image',
                to: '/dashboard-banking'
            }
        ]
    },
    { separator: true },
    {
        label: 'E-Commerce',
        icon: 'pi pi-fw pi-wallet',
        items: [
            {
                label: 'Liste des collections',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/collection-list'
            },
            {
                label: 'Liste des catégories',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/category-list'
            },
            {
                label: 'Liste des occasions',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/occasion-list'
            },
            {
                label: 'Liste des tailles',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/size-list'
            },
            {
                label: 'Liste des Matières',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/material-list'
            },
            {
                label: 'Liste des Modèles',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/model-list'
            },
            {
                label: 'Product List',
                icon: 'pi pi-fw pi-list',
                to: '/ecommerce/product-list'
            }
        ]
    },
    { separator: true },
    {
        label: 'User Management',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'List',
                icon: 'pi pi-fw pi-list',
                to: '/profile/list'
            },
            {
                label: 'Create',
                icon: 'pi pi-fw pi-plus',
                to: '/profile/create'
            }
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in navigation" :key="item.label">
            <AppMenuItem v-if="!item.separator" :item="item" root :index="i" />

            <li v-else class="menu-separator"></li>
        </template>
    </ul>
</template>
