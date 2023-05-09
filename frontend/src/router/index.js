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
      path: '/FlightsView',
      name: 'FlightsView',
      component: () => import('../views/FlightsView.vue')
    },
    {
      path: '/ChatroomView',
      name: 'ChatroomView',
      component: () => import('../views/ChatroomView.vue')
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
    },
    {
      path: '/MessagesView/:id',
      name: 'Messages',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MessagesView.vue')
    }
  ]
})

export default router
