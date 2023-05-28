<template>
  <div>
    <arrow />
    <main_title style="text-align: center;" title="Ride Overview" />
    <Map :departureCoordinates="departureCoordinates" :destinationCoordinates="destinationCoordinates" />
    <h1>{{ $route.params.id }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="rideData">
      <p>Departure Time: {{ rideData.departure_time }}</p>
      <p>Destination Time: {{ rideData.destination_time }}</p>
      <p>Driver: {{ rideData.driver }}</p>
      <p>Driver Rating: {{ rideData.driver_rating }}</p>
      <p>Price: {{ rideData.price }} €</p>
    </div>
    <div v-if="rideData">
      <payment_button :rideData="rideData" />
    </div>
  </div>
</template>

<script>
import main_title from '../components/main_title.vue';
import payment_button from '../components/payment_button.vue';
import arrow from '../components/arrow_back.vue';
import Map from '../components/Map.vue';
import { getRideById } from "../composables/ridesApi.js";

export default {
  components: {
    main_title,
    payment_button,
    arrow,
    Map
  },
  data() {
    return {
      rideData: null,
      departureCoordinates: null,
      destinationCoordinates: null,
      error: null
    };
  },
  async created() {
    const id = this.$route.params.id;
    const { rideData, error } = await getRideById(id);

    if (error) {
      console.error('Failed to fetch ride data:', error);
    } else {
      this.rideData = rideData;
      this.departureCoordinates = {
        lat: parseFloat(rideData.departure.lat),
        lng: parseFloat(rideData.departure.long)
      };
      this.destinationCoordinates = {
        lat: parseFloat(rideData.destination.lat),
        lng: parseFloat(rideData.destination.long)
      };
    }
  }
};
</script>
