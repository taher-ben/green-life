import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DoctorsCv from '../components/DoctorsCv.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ourteam/cv',
      name: 'DoctorsCv',
      component: DoctorsCv,
      props:true
    },
    {
      path: '/WhatWeOffer',
      name: 'WhatWeOffer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WhatOffer.vue')
    },
    {
      path: '/About',
      name: 'AboutView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/NewsAndSubject',
      name: 'NewsAndSubject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsAndSubject.vue')
    },
    {
      path: '/Accreditation',
      name: 'AccreDitation',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccreDitation.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/ServicesEnv',
      name: 'ServicesEnv',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OurServices/ServicesEIA.vue')
    },
    {
      path: '/ServicesEIA',
      name: 'ServicesEIA',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OurServices/ServicesEIA.vue')
    }
  ]
})
export default router