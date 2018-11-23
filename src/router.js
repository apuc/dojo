import Vue from 'vue';
import Router from 'vue-router';
import AuthLogin from './components/Auth/AuthLogin';
import AuthRegistration from './components/Auth/AuthRegistration';
import AuthResetPassword from './components/Auth/AuthResetPassword';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'auth'},
      component: AuthLogin,
    },
    {
      path: '/registration',
      name: 'registration',
      meta: {layout: 'auth'},
      component: AuthRegistration,
    },
    {
      path: '/reset_password',
      name: 'reset_password',
      meta: {layout: 'auth'},
      component: AuthResetPassword,
    },
  ]
})
