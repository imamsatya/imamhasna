import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/form',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Form.vue')
      }
    ]
  },
  {
    path: '/tabel',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Tabel.vue')
      }
    ]
  },
  {
    path: '/about',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/About.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
