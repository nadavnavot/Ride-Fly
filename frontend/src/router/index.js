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
      component: () => import('../views/ChatroomView.vue')
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: () => import('../views/RideOverview.vue')
    },

    {
      path: '/Success',
      name: 'Success',
      component: () => import('../views/Success.vue')
    },
    {
      path: '/Messages',
      name: 'Messages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this routegit 
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MessagesView.vue')
    }
  ]
})

export default router
