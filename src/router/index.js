import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/Login/',
    name: 'LoginView',
    component: () => import('../views/LoginView')
  },
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView')
  },
  {
    path: '/FirendsList/',
    name: 'FirendsList',
    component: () => import('../views/FirendsList')
  },
  {
    path: '/UserDynamics/:userId/',
    name: 'UserDynamics',
    component: () => import('../views/UserDynamics')
  },
  {
    path: '/Register/',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/404/',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/404/"
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
