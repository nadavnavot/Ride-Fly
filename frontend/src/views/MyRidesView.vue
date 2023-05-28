<template>
  <div>
    <main_title title="My Rides" />

    <navbar />

    <div v-if="error">{{ error }}</div>
    <div v-if="bookedRides">
      <h2>Booked Rides:</h2>
      <ul>
        <li v-for="ride in bookedRides" :key="ride._id">
          {{ ride._id }} 
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import main_title from '../components/main_title.vue';
<<<<<<< HEAD
import navbar from '../components/navbar.vue';
import { getBookedRides } from "../composables/ridesApi.js";

export default {
  components: {
    main_title,
    navbar,
  },
  data() {
    return {
      bookedRides: null,
      error: null,
    };
  },
  async created() {
    try {
      const { bookedRides, error } = await getBookedRides();
      this.bookedRides = bookedRides;
      this.error = error;
    } catch (error) {
      console.error('Failed to fetch booked rides:', error);
      this.error = 'Failed to fetch booked rides';
    }
  },
};
</script>
=======
import rides from '../components/rides.vue';
import navbar from '../components/navbar.vue';


export default {
  components: {
    main_title, 
    rides,
    navbar
},
data() {
    return {
      // cards: [
      //   { departure: 'San Vincente',departure_time: '6:25' , destination: 'Seville airport',destination_time: '7:00' , driver: 'John', rate:'4.2', price:'5' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Josh', rate:'3.7', price:'7' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Joe', rate:'4.5', price:'9' }
      // ]
    }}
}
</script>

<template>
<div class="header">
  <div class="header-title">
    <main_title title="My Rides" />
  </div>
    <div class="header-icon">
      <img src="/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/icons/Add.svg" alt="Icon" />
    </div>
  </div>
    <rides/>
    <navbar/>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.header-icon {
  margin-left: auto;
}
</style>
>>>>>>> fa842373eb7cc45b391ee573fedc388837450b26
