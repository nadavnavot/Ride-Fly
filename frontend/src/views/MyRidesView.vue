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
