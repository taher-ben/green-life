import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceDetails from '../components/ServiceDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ServiceDetails/id',
      name: 'ServiceDetails',
      component: ServiceDetails,
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
    }
  ]
})
export default router
