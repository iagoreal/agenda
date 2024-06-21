import { createRouter, createWebHistory } from 'vue-router'
import Contact from '../views/DetailView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/contacts',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts/:id',
      name: 'details',
      component: Contact 
    }
  ]
})

export default router
