import { createRouter, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DoctorsCv from '../components/DoctorsCv.vue'
import NewsCom from '../components/NewsCom.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ourteam/:id/:ed/:pro',
      name: 'DoctorsCv',
      component: DoctorsCv,
      props:true
    },
    {
      path: '/NewsCom/:id/:pro',
      name: 'NewsCom',
      component: NewsCom,
      props:true
    },
    {
      path: '/WhatOffer',
      name: 'WhatWeOffer',
      component: () => import('../views/WhatOffer.vue')
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/NewsAndSubject',
      name: 'NewsAndSubject',

      component: () => import('../views/NewsAndSubject.vue')
    },
    {
      path: '/Accreditation',
      name: 'AccreDitation',

      component: () => import('../views/AccreDitation.vue')
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',

      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/ServicesEIA',
      name: 'ServicesEIA',
      component: () => import('../views/OurServices/ServicesEIA.vue')
    },
    {
      path: '/ServicesWNRS',
      name: 'ServicesWNRS',
      component: () => import('../views/OurServices/ServicesWNRS.vue')
    },
    {
      path: '/ServicesAWSQME',
      name: 'ServicesAWSQME',
      component: () => import('../views/OurServices/ServicesAWSQME.vue')
    },
    {
      path: '/ServicesEATP',
      name: 'ServicesEATP',
      component: () => import('../views/OurServices/ServicesEATP.vue')
    },
    {
      path: '/ServicesEC',
      name: 'ServicesEC',
      component: () => import('../views/OurServices/ServicesEC.vue')
    }
    
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
export default router