import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import PageLoaded from './mixins/PageLoaded';
import axios from './plugins/axios';
import router from './router/';
import store from './store/';

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
require('./assets/css/style.css');
require('./assets/css/media.css');
Vue.mixin(PageLoaded)
Vue.use(axios)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
