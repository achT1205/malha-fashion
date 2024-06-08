
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
import { useForm } from 'vee-validate';
import { object, string} from 'yup'

const { errors, defineField, handleSubmit } = useForm({
    validationSchema: object({
        email: string().email('Le format du email est incorrect').required('Le email est requis'),
        password: string().min(8, 'Le mot de passe doit être au moins de 8 caractères').required('Le mot de passe est requis')
    })
});

const [email, emailAttrs] = defineField('email', {
    validateOnModelUpdate: false
});
const [password, passwordAttrs] = defineField('password', {
    validateOnModelUpdate: false
});

const newUser = ref({
    password: password,
    email: email
});

const onSubmit = handleSubmit((values) => {
    createUser(values.email, values.password);
});

const createUser = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            router.push('/');
        })
        .catch((error) => {
            console.log(error);
            toast.add({ severity: 'error', summary: `Error ${error.message}`, detail: error.message, life: 3000 });
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
            <form @submit.prevent="onSubmit">
                <div class="flex flex-column gap-4">
                    <div class="flex flex-column gap-2">
                        <IconField iconPosition="left" class="w-full">
                            <InputIcon class="pi pi-envelope" />
                            <InputText v-bind="emailAttrs" :invalid="errors.email ? true : false" id="email" type="text" class="w-full md:w-25rem" v-model="newUser.email" placeholder="Email" />
                        </IconField>
                        <small class="text-red-700" v-show="errors.email">{{ errors.email }}.</small>
                    </div>

                    <div class="flex flex-column gap-2">
                        <IconField iconPosition="left" class="w-full">
                            <InputIcon class="pi pi-lock z-2" />
                            <Password
                                v-bind="passwordAttrs"
                                :invalid="errors.password ? true : false"
                                id="password"
                                v-model="newUser.password"
                                placeholder="Password"
                                class="w-full"
                                :inputStyle="{ paddingLeft: '2.0rem' }"
                                inputClass="w-full md:w-25rem"
                                toggleMask
                                showIcon="pi pi-eye"
                            />
                        </IconField>
                        <small class="text-red-700" v-show="errors.password">{{ errors.password }}</small>
                    </div>

                    <Button type="submit" label="Créer" class="w-full mb-4"></Button>
                    <span class="font-semibold text-color-secondary"
                        >Vous avez un compte?
                        <router-link to="/auth/login" class="font-semibold cursor-pointer primary-color">Login</router-link>
                    </span>
                </div>
            </form>
        </div>
        <AppConfig simple></AppConfig>
    </div>
</template>
