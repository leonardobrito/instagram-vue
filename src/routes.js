import Feed from '@/views/Feed/index.vue';

export default [
  {
    path: '/',
    name: 'feed',
    component: Feed,
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/New/index.vue'),
  },
];
