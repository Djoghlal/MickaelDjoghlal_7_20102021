import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/connect',
    alias: '/',
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
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  console.log(to)
  if (to.meta.requiresAuth === true && token !== null) {
    // console.log('Le token est ok')
    // Le token existe donc on est ok
    next()
  } else if (to.path !== '/register' /* || to.name !== 'Register' */) {
    // console.log("Le token n'est pas correct")
    next('/register')
  } else {
    next()
  }
})

export default router
