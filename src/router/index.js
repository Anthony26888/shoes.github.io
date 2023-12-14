// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/San-pham',
        name: 'ListProduct',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/ListProduct.vue'),
      },
      {
        path: '/Thong-tin-san-pham',
        name: 'InfoProduct',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/InfoProduct.vue'),
      },
      {
        path: '/Giai-phap',
        name: 'Solution',       
        component: () => import(/* webpackChunkName: "home" */ '@/views/Solution.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
