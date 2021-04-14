import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/Index.vue') }]
  // },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Home.vue')
    }]
  },
  // {
  //   path: '/2',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [{
  //     path: '',
  //     component: () => import('pages/Home2.vue')
  //   }]
  // },

  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login.vue')
    // children: [{
    //   path: '',
    //   component: () => import('pages/S-Login.vue')
    // }]
  },
  // {
  //   path: '/artikel',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [{
  //     path: '',
  //     component: () => import('pages/Artikel.vue')
  //   }]
  // },
   {
    path: '/form',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Form.vue')
    }]
  },
  {
    path: '/tabel',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [{
      path: '',
      component: () => import('pages/Tabel.vue')
    }]
  },
  {
    path: '/about',
    meta: {
      admin: true
    },
    component: () => import('layouts/A-Layout.vue'),
    children: [{
      path: '',
      component: () => import('pages/About.vue')
    }]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
