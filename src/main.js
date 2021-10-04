import { createApp } from 'vue';
import App from './App.vue';
import router from './Router.js';
import store from './store/index.js'
import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';



const app = createApp(App)
app.use(router)    
app.use(store)    
app.component('base-card', BaseCard)
app.component('base-spinner', BaseSpinner)

app.mount('#app');
