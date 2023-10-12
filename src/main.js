import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCar, faHouse ,faPeopleRoof} from '@fortawesome/free-solid-svg-icons';



library.add(faCar,faHouse,faPeopleRoof)


createApp(App).component("fa", FontAwesomeIcon).use(store).use(router).mount('#app')
