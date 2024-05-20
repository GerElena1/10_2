const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ToDo.vue') },
      { path: '/Help', component: () => import('src/pages/Help.vue') },
      { path: '/Contacts', component: () => import('src/pages/Contacts.vue') },
      { path: '/AboutAs', component: () => import('src/pages/AboutAs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
