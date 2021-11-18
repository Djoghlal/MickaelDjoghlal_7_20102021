import { createRouter, createWebHistory } from 'vue-router'
import Connect from '../views/Connect.vue'

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: Connect
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeMembers.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
