import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: { name: 'Login' } },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
    meta: {
      layout: 'AuthLayout',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Index.vue'),
    meta: {
      layout: 'HomeLayout',
    },
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
