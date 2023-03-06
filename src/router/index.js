import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: MainPage,
  // },
  {
    path: '/counter',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
