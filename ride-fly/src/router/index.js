import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Success from '../views/Success.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/MyRides',
      name: 'My Rides',
      component: () => import('../views/MyRidesView.vue')
    },
    {
      path: '/Flights',
      name: 'Flights',
      component: () => import('../views/FlightsView.vue')
    },
    {
      path: '/Chat',
      name: 'Chat',
      component: () => import('../views/ChatView.vue')
    },
    {
    path: '/overview',
    name: 'Overview',
    component: () => import('../views/RideOverview.vue')
     },
  
    {
      path: '/Success',
      name: 'Success',
      component: () => import('../views/Success.vue')
    }
  ]
})

export default router
