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
                label: 'Gestion de produits',
                icon: '',
                items: [
                    {
                        label: 'Paramètres',
                        icon: '',
                        items: [
                            {
                                label: 'Liste des collections',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/collection-list'
                            },
                            {
                                label: 'Liste des catégories',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/category-list'
                            },
                            {
                                label: `Modes d'expédition`,
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/shipping-list'
                            },
                                                        {
                                label: 'Modes de retour',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/return-list'
                            },
                                                        {
                                label: 'Matériels et entretiens',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/care-list'
                            },
                                                        {
                                label: 'Liste des occasions',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/occasion-list'
                            },
                            {
                                label: 'Liste des tailles',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/size-list'
                            },
                            {
                                label: 'Liste des Matières',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/material-list'
                            },
                            {
                                label: 'Liste des Modèles',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/model-list'
                            },
                            {
                                label: 'Listes des Mots-Clés',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/tag-list'
                            },
                            {
                                label: 'Liste des Couleurs',
                                icon: 'pi pi-fw pi-list',
                                to: '/ecommerce/product/color-list'
                            }
                        ]
                    },
                    {
                        label: 'Nouveau produit',
                        icon: 'pi pi-fw pi-plus',
                        to: '/ecommerce/product/create'
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        to: '/ecommerce/product/product-list'
                    }
                ]
            },
            {
                label: 'Gestion des commandes',
                icon: '',
                items: [
                    {
                        label: 'Liste des commandes',
                        icon: 'pi pi-fw pi-list',
                        to: '/ecommerce/commande/commande-list'
                    }
                ]
            },
            {
                label: 'Gestion des clients',
                icon: '',
                items: [
                    {
                        label: 'Liste des clients',
                        icon: 'pi pi-fw pi-list',
                        to: '/ecommerce/client/client-list'
                    }
                ]
            },
            {
                label: 'Gestion des codes promo',
                icon: '',
                items: [
                    {
                        label: 'Liste des prolotion',
                        icon: 'pi pi-fw pi-list',
                        to: '/ecommerce/promo/promo-list'
                    }
                ]
            }
        ]
    },
    { separator: true },

    {
        label: 'Auth',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Register',
                icon: 'pi pi-fw pi-user-plus',
                to: '/auth/register'
            }
            /*
                    {
                        label: 'Login',
                        icon: 'pi pi-fw pi-sign-in',
                        to: '/auth/login'
                    },
                    {
                        label: 'Error',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/auth/error'
                    },
                    {
                        label: 'Access Denied',
                        icon: 'pi pi-fw pi-lock',
                        to: '/auth/access'
                    },
                    
                    {
                        label: 'Forgot Password',
                        icon: 'pi pi-fw pi-question',
                        to: '/auth/forgotpassword'
                    },
                    {
                        label: 'New Password',
                        icon: 'pi pi-fw pi-cog',
                        to: '/auth/newpassword'
                    },
                    {
                        label: 'Verification',
                        icon: 'pi pi-fw pi-envelope',
                        to: '/auth/verification'
                    },
                    {
                        label: 'Lock Screen',
                        icon: 'pi pi-fw pi-eye-slash',
                        to: '/auth/lockscreen'
                    }*/
        ]
    },
    { separator: true },
    {
        label: 'Utilisateurs',
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
