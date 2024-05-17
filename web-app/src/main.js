import './assets/main.css'
import 'primevue/resources/themes/lara-light-pink/theme.css'//import 'primevue/resources/themes/md-light-pink/theme.css'//import 'primevue/resources/themes/aura-light-green/theme.css'
import "primeicons/primeicons.css";
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Tag from "primevue/tag"
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';


const app = createApp(App)
app.directive('tooltip', Tooltip);
app.use(createPinia())
app.use(router)
app.use(PrimeVue);
app.component('Tag-T', Tag);
app.component('Carousel-T', Carousel);
app.component('Button-T', Button);
app.mount('#app')
