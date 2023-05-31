import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Success from '../views/Success.vue';




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
      path: '/ChatroomView',
      name: 'ChatroomView',
      component: () => import('../views/ChatroomView.vue')
    },
    {
      path: '/Messages',
      name: 'Messages',
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/Overview/:id',
    name: 'Overview',
      component: () => import('../views/RideOverview.vue'),
    },
    {
      path: '/BookedRide/:id',
      name: 'BookedRide',
      component: () => import('../views/BookedRideOverview.vue'),
    },


    {
      path: '/Success/:id',
      name: 'Success',
      component: () => import('../views/Success.vue')
 },

  ]
})

export default router
