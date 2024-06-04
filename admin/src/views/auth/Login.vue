<script setup>
import AppConfig from '@/layout/AppConfig.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useFirebaseAuth } from 'vuefire';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const router = useRouter();

const auth = useFirebaseAuth();

const currentUser = ref({
    email: '',
    password: ''
});

const singin = async () => {
    signInWithEmailAndPassword(auth, currentUser.value.email, currentUser.value.password)
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
                <h2>Login to your account</h2>
                <p>
                    Forgot password? <router-link to="/auth/forgotpassword" class="font-semibold cursor-pointer primary-color">Click here</router-link>
                    to reset.
                </p>
            </div>
            <InputText v-model="currentUser.email" id="email" placeholder="Email" class="w-20rem" />
            <Password v-model="currentUser.password" id="password" placeholder="Password" :feedback="true" inputClass="w-20rem"></Password>
            <Button @click="singin" label="CONTINUE" type="button" class="w-20rem"></Button>
        </div>
        <AppConfig simple />
    </div>
</template>
