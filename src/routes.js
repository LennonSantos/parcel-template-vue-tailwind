const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/HomePage.vue')
  },

  {
    path: '/store',
    name: 'store',
    component: () => import('./pages/StorePage.vue')
  }
]

export default routes
