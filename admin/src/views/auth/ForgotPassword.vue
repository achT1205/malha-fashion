<script setup>
import AppConfig from '@/layout/AppConfig.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDashboard = () => {
    router.push({ name: 'e-commerce' });
};
</script>
<template>
    <div>
        <div class="flex flex-column align-items-center gap-4">
            <div class="mb-3">
                <h2>Forgot Password</h2>
                <p>Enter your email to reset your password</p>
            </div>

            <IconField iconPosition="left">
                <InputIcon class="pi pi-envelope" />
                <InputText id="email" type="text" class="w-full md:w-25rem" placeholder="Email" />
            </IconField>
            <div class="flex gap-3 w-full md:w-25rem">
                <Button label="CANCEL" class="flex-auto" outlined @click="navigateToDashboard"></Button>
                <Button label="SUBMIT" class="flex-auto" @click="navigateToDashboard"></Button>
            </div>
        </div>

        <AppConfig simple></AppConfig>
    </div>
</template>
