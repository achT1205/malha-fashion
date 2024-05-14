import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Button from "primevue/button"

import Carousel from 'primevue/carousel';


import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { unstyled: true });
/*app.use(PrimeVue, {
    unstyled: true
});*/
app.component('Button-T', Button);
app.component('Carousel-T', Carousel);
app.mount('#app')
