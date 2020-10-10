import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SignInPage',
    component: () => import('../views/SignInPage.vue'),
  },
  {
    path: '/SignUp',
    name: 'SignUpPage',
    component: () => import('../views/SignUpPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
