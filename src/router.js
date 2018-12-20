import Vue from 'vue';
import Router from 'vue-router';
import AuthLogin from './components/Auth/AuthLogin';
import AuthRegistration from './components/Auth/AuthRegistration';
import AuthResetPassword from './components/Auth/AuthResetPassword';
import Profile from './components/Profile/Profile';
import ProfileFeed from './components/Profile/ProfileFeed';
import ProfileCourses from './components/Profile/ProfileCourses';
import ProfileAbout from './components/Profile/ProfileAbout';

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
    // {
    //   path: '/',
    //   name: 'main',
    //   meta: {layout: 'main'},
    //   component: Profile,
    //   children: [
    //     { path: '', component: ProfileFeed },
    //     { path: 'courses', component: ProfileCourses },
    //     { path: 'about', component: ProfileAbout },
    //   ]
    // },
    {
      path: '/user/:id',
      name: 'main',
      meta: {layout: 'main'},
      redirect: '/user/:id/courses',
      component: Profile,
      children: [
        // { path: 'feed', component: ProfileFeed },
        { path: 'courses', component: ProfileCourses },
        { path: 'about', component: ProfileAbout },
      ]
    },
  ]
})
