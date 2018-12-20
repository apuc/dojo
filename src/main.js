import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import MainLayout from './views/MainLayout';
import AuthLayout from './views/AuthLayout';

Vue.component('main-layout', MainLayout);
Vue.component('auth-layout', AuthLayout);

Vue.directive('scroll', {
  inserted(el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };

    window.addEventListener('scroll', f);
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
