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
    path: '/FriendsList/',
    name: 'FriendsListView',
    component: () => import('../views/FriendsListView')
  },
  {
    path: '/UserDynamics/:userId/',
    name: 'UserDynamicsView',
    component: () => import('../views/UserDynamicsView')
  },
  {
    path: '/Register/',
    name: 'RegisterView',
    component: () => import('../views/RegisterView')
  },
  {
    path: '/404/',
    name: 'NotFoundView',
    component: () => import('../views/NotFoundView')
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
