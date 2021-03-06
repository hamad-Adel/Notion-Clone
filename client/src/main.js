import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// Tailwind
import './assets/tailwind.css';

// Global components
import AppLayout from './layouts/AppLayout.vue';

Vue.component('AppLayout', AppLayout);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
