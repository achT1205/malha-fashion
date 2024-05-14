import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Tag from "primevue/button"
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Tag-T', Tag);
app.component('Carousel-T', Carousel);
app.component('Button', Button);
app.mount('#app')
