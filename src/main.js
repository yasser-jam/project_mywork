import { createApp } from 'vue';
import store from './store/index.js'
import router from './router.js'
import App from './app.vue';

import BaseCard from './components/UI/BaseCard.vue';


const app = createApp(App);

app.component('base-card', BaseCard)
app.use(router)
app.use(store)

app.mount('#app')
