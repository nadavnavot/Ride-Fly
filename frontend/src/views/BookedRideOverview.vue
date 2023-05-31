<template>
    <div>
      <main_title title="Ride Detail" />
      <arrow/>
     <Map :departureCoordinates="departureCoordinates" :destinationCoordinates="destinationCoordinates" />

     <div v-if="error">{{ error }}</div>
    <div v-if="rideData">
      <p>Booking status: <span :style="{ color: rideData.booked ? 'green' : 'red' }">{{ rideData.booked ? 'Booked' : 'Not booked' }}</span></p>
      <p>Booking time: {{ formatBookingTime(rideData.booked_time) }}</p>
      <p>Departure Time: {{ rideData.departure_time }}</p>
      <p>Destination Time: {{ rideData.destination_time }}</p>
      <p>Driver: {{ rideData.driver }}</p>
      <p>Driver Rating: {{ rideData.driver_rating }}</p>
      <p>Price: {{ rideData.price }} €</p>
    </div>
    </div>
  </template>
  
  <script>
  import arrow from '../components/arrow_back.vue'
  import main_title from '../components/main_title.vue';
  import Rate from '../components/rate.vue';
  import { getRideById } from "../composables/ridesApi.js";
import Map from '../components/Map.vue';

  
  export default {
    components: {
      main_title,
      Rate,
      Map,
      arrow
    },
    methods: {
  formatBookingTime(time) {
    const bookingTime = new Date(time);
    return bookingTime.toLocaleString('en-BE');
  }
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

  
  <style>
  .card {
    cursor: pointer;
    width: 100%;
    height: 130px;
    padding: 10px;
    font-family: avenir;
    margin-top: 20px;
    border: 1px black solid;
    margin-bottom: 5px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 9px;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
    margin-top: 40px;
    margin-bottom: 40px;
  }
  
  .wrapper {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  
  .card-address {
    color: black;
    font-family: 'Roboto';
    font-style: normal;
    margin-bottom: 20px;
  }
  
  .card-time {
    color: black;
    font-family: 'Roboto';
    font-style: normal;
    margin-bottom: 20px;
  }
  
  .card-text {
    color: black;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
  }
  </style>
  