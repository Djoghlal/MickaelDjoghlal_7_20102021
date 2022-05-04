import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Connect',
    component: () => import('../views/Connect.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/HomeMembers.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('../views/Profil.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Vérification du token présent ou non dans le localStorage
router.beforeEach(async (to, next) => {
  if (to.meta.requiresAuth === true && localStorage.getItem('token')) {
    // Le token existe donc on est ok
    localStorage.setItem('token', localStorage.getItem('token'))
  } else {
    console.log("Le token n'est pas correct")
    // location.href = 'http://localhost:8080/'
  }
})

export default router
