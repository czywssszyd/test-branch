import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('../views/setup.vue')
  },
  {
    path: '/setup02',
    name: 'setup02',
    component: () => import('../views/setup02.vue')
  },
  {
    path: '/setup03',
    name: 'setup03',
    component: () => import('../views/setup03.vue')
  },
  {
    path: '/setup021',
    name: 'setup021',
    component: () => import('../views/setup021.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/todo.vue')
  },
  {
    path: '/templateAbout',
    name: 'templateAbout',
    component: () => import('../views/templateAbout.vue')
  },
  {
    path: '/templateAbout2',
    name: 'templateAbout2',
    component: () => import('../views/templateAbout2.vue')
  },
  {
    path: '/JSX',
    name: 'JSX',
    component: () => import('../views/JSX.vue')
  },
  {
    path: '/watchref',
    name: 'watchref',
    component: () => import('../views/watchref.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/reactive.vue')
  },
  {
    path: '/toRaw',
    name: 'toRaw',
    component: () => import('../views/toRaw.vue')
  },
  {
    path: '/toRef',
    name: 'toRef',
    component: () => import('../views/toRef.vue')
  },
  {
    path: '/customRef',
    name: 'customRef',
    component: () => import('../views/customRef.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
