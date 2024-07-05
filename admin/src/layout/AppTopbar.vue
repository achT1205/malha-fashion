<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue';
import { useLayout } from '@/layout/composables/layout';
import AppSidebar from '@/layout/AppSidebar.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import { usePrimeVue } from 'primevue/config';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { useDocument, useFirestore } from 'vuefire';
import { doc } from 'firebase/firestore';

const router = useRouter();
const user = useCurrentUser();
const auth = useFirebaseAuth();
const profile = ref(null);
const db = useFirestore();

watch(
    user,
    async (val) => {
        if (val && val.uid) {
            profile.value = await useDocument(doc(db, 'admins', val.uid));
        }
    },
    { deep: true }
);

const logout = async () => {
    await signOut(auth)
        .then(() => {
            console.log('logged out');
            router.push('/auth/login');
        })
        .catch((error) => {
            console.log(error);
        });
};

const $primevue = usePrimeVue();

defineExpose({
    $primevue
});

const { onMenuToggle, toggleSearchBar, layoutConfig } = useLayout();
const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
const sidebarRef = ref(null);

const logo = computed(() => {
    return layoutConfig.colorScheme.value === 'dark' ? 'white' : 'dark';
});

onMounted(async () => {
    bindOutsideClickListener();
    //profile.value = await useDocument(doc(db, 'admins', user.uid));
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar">
        <div class="topbar-left">
            <a tabindex="0" class="menu-button p-trigger" @click="onMenuToggle">
                <i class="pi pi-chevron-left"></i>
            </a>
            <img class="horizontal-logo" src="/layout/images/logo-white.svg" alt="diamond-layout" />
            <span class="topbar-separator"></span>
            <AppBreadcrumb></AppBreadcrumb>
            <img class="mobile-logo" :src="'/layout/images/logo-' + logo + '.svg'" alt="diamond-layout" />
        </div>

        <div class="layout-topbar-menu-section">
            <AppSidebar ref="sidebarRef"></AppSidebar>
        </div>
        <div class="layout-mask modal-in"></div>

        <div class="topbar-right">
            <ul class="topbar-menu">
                <li class="search-item">
                    <a tabindex="0" @click="toggleSearchBar()" class="p-trigger">
                        <i class="pi pi-search"></i>
                    </a>
                </li>
                <li class="static sm:relative">
                    <a tabindex="0" v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveActiveClass: 'fadeout', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                        <i class="pi pi-bell"></i>
                        <span class="topbar-badge">5</span>
                    </a>
                    <ul class="list-none p-3 m-0 border-round shadow-2 absolute surface-overlay hidden origin-top w-full sm:w-19rem mt-2 right-0 z-5 top-auto">
                        <li>
                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-shopping-cart mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">New Order</span>
                                    <span class="text-color-secondary">You have <strong>3</strong> new orders.</span>
                                </span>
                            </a>
                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-check-square mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Withdrawn Completed</span>
                                    <span class="text-color-secondary">Funds are on their way.</span>
                                </span>
                            </a>
                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-chart-line mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Monthly Reports</span>
                                    <span class="text-color-secondary">Monthly Reports are ready.</span>
                                </span>
                            </a>
                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-comments mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Comments</span>
                                    <span class="text-color-secondary"><strong>2</strong> new comments.</span>
                                </span>
                            </a>
                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-exclamation-circle mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Chargeback Request</span>
                                    <span class="text-color-secondary"><strong>1</strong> to review.</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="profile-item static sm:relative" v-if="profile && profile">
                    <a tabindex="0" v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveActiveClass: 'fadeout', leaveToClass: 'hidden', hideOnOutsideClick: true }">
                        <img v-if="profile.value && profile.value.avatar && profile.value.avatar.url" :src="profile.value.avatar.url" alt="diamond-layout" class="profile-image" />
                        <Avatar v-else :label="user.email[0].toUpperCase()" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle" />
                        <span class="profile-name" v-if="profile.value && profile.value.firstName && profile.value.lastName">{{ profile.value.firstName }} {{ profile.value.lastName }}</span>
                        <span class="profile-name" v-else>{{ user.email }}</span>
                    </a>
                    <ul class="list-none p-3 m-0 border-round shadow-2 absolute surface-overlay hidden origin-top w-full sm:w-12rem mt-2 right-0 z-5 top-auto">
                        <li>
                            <router-link :to="`/profiles/${user.uid}/edit`" class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer">
                                <i class="pi pi-user mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Profile</span>
                                </span>
                            </router-link>

                            <a v-ripple class="p-ripple flex p-2 border-round align-items-center hover:surface-hover transition-colors transition-duration-150 cursor-pointer" @click="logout">
                                <i class="pi pi-power-off mr-3"></i>
                                <span class="flex flex-column">
                                    <span class="font-semibold">Logout</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li v-else>
                    <Button @click="router.push('/auth/login')" label="Login" severity="secondary" outlined />
                </li>
            </ul>
        </div>
    </div>
</template>
