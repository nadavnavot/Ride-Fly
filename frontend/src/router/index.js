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
<<<<<<< HEAD
      path: '/ChatroomView',
      name: 'ChatroomView',
      component: () => import('../views/ChatroomView.vue')
    },
    {
      path: '/Overview/:id',
    name: 'Overview',
      component: () => import('../views/RideOverview.vue'),
      props: true
=======
      path: '/Chat',
      name: 'Chat',
      component: () => import('../views/ChatroomView.vue')
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: () => import('../views/RideOverview.vue')
>>>>>>> fa842373eb7cc45b391ee573fedc388837450b26
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
