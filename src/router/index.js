import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView')
  },
  {
    path: '/FirendsList',
    name: 'FirendsList',
    component: () => import('../views/FirendsList')
  },
  {
    path: '/UserDynamics',
    name: 'UserDynamics',
    component: () => import('../views/UserDynamics')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
