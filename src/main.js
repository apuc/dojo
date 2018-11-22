import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import MainLayout from './views/MainLayout';
import AuthLayout from './views/AuthLayout';

Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
