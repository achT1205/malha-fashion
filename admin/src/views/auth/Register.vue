<script setup>
import AppConfig from '@/layout/AppConfig.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useToast } from 'primevue/usetoast';
const toast = useToast();
const router = useRouter();
const auth = useFirebaseAuth();

const newUser = ref({
    email: '',
    password: ''
});
const createUser = async () => {
    createUserWithEmailAndPassword(auth, newUser.value.email, newUser.value.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            router.push('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.add({ severity: 'error', summary: `Error ${error.code}`, detail: error.message, life: 3000 });
        });
};
</script>

<template>
    <div>
        <div class="flex flex-column align-items-center gap-4">
            <div class="mb-3">
                <h2>Register</h2>
                <p>Let's get started</p>
            </div>
            <div class="flex flex-column gap-4">
                <IconField iconPosition="left" class="w-full">
                    <InputIcon class="pi pi-envelope" />
                    <InputText id="email" type="text" class="w-full md:w-25rem" v-model="newUser.email" placeholder="Email" />
                </IconField>
                <IconField iconPosition="left" class="w-full">
                    <InputIcon class="pi pi-lock z-2" />
                    <Password id="password" v-model="newUser.password" placeholder="Password" class="w-full" :inputStyle="{ paddingLeft: '2.0rem' }" inputClass="w-full md:w-25rem" toggleMask showIcon="pi pi-eye" />
                </IconField>
                <Button label="Créer" class="w-full mb-4" @click="createUser"></Button>
                <span class="font-semibold text-color-secondary"
                    >Vous avez un compte?
                    <router-link to="/auth/login" class="font-semibold cursor-pointer primary-color">Login</router-link>
                </span>
            </div>
        </div>
        <AppConfig simple></AppConfig>
    </div>
</template>
