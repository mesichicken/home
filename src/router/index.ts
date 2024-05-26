import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/work-experience',
      name: 'work-experience',
      component: () => import('../views/WorkExperienceView.vue')
    }
  ]
})

export default router
