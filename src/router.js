import Vue from 'vue';
import Router from 'vue-router';
import Feed from './views/Feed.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed,
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('./views/New.vue'),
    },
  ],
});
