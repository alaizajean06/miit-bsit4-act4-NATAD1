import { createRouter, createWebHistory } from 'vue-router'
import InsertRecord from '@/views/InsertRecord.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'InsertRecord',
      component: () => import('../views/InsertRecord.vue')
    },
    {
      path: '/getRecord',
      name: 'getRecord',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GetRecord.vue')
    },
    
  ]
})

export default router