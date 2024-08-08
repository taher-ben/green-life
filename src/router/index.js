import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetails from '../components/ServiceDetails.vue'
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
      path: '/ServiceDetails/:id',
      name: 'ServiceDetails',
      component: ServiceDetails,
      props:true
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
      path: '/ComponentsTest',
      name: 'ComponentsTest',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ComponentsTest.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactUs.vue')
    }
  ]
})
export default router