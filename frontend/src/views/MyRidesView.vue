<template>
  <div>
    <main_title title="My Rides" />
    <div v-if="bookedRides">
      <h2>Booked Rides:</h2>
      <div @click="onClick(ride._id)" class="card" v-for="ride in bookedRides" :key="ride._id">

        <div class="wrapper">
          <p class="card-address">{{ departureAddresses[ride._id] }}</p>
          <p class="card-address">{{ destinationAddresses[ride._id] }}</p>
        </div>
        
        <div class="wrapper">
          <p class="card-time">{{ ride.departure_time }}</p>
          <p class="card-time">{{ ride.destination_time }}</p>
        </div>

        <div class="wrapper">
          <p class="card-text">{{ ride.driver }} &nbsp; {{ ride.driver_rating }} &nbsp;<rate /></p>
          <p class="card-text">{{ ride.price }} €</p>
        </div>

      
      </div>
    </div>
    <navbar />
  </div>
</template>


<script>
import axios from 'axios';
import main_title from '../components/main_title.vue';
import Rate from '../components/rate.vue';
import navbar from '../components/navbar.vue';
import { getBookedRides } from "../composables/ridesApi.js";


export default {
  components: {
    main_title,
    navbar,
    Rate
  },
  data() {
    return {
      bookedRides: null,
      error: null,
      departureAddresses: {}, 
      destinationAddresses: {}
    };
  },
  async created() {
  try {
    const { bookedRides, error } = await getBookedRides();
    this.bookedRides = bookedRides;
    this.error = error;

    this.fetchAddresses();
  } catch (error) {
    this.error = 'Failed to fetch booked rides';
  }
},

  methods: {
    onClick(id) {
  if (id) {
    this.$router.push({ name: 'BookedRide', params: { id: id } });
  } else {
    console.error('Invalid ride id');
  }
},

  async getAddressFromCoordinates(latitude, longitude) {
    try {
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          latlng: `${latitude},${longitude}`,
          key: 'API_Key',
        },
      });

      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted_address;
        return address;
      } else {
        throw new Error('No results found');
      }
    } catch (error) {
      return 'Unknown address';
    }
  },
  async fetchAddresses() {
    for (const ride of this.bookedRides) {
      const departureAddress = await this.getAddressFromCoordinates(
        ride.departure.lat,
        ride.departure.long
      );
      this.departureAddresses[ride._id] = departureAddress;

      const destinationAddress = await this.getAddressFromCoordinates(
        ride.destination.lat,
        ride.destination.long
      );
      this.destinationAddresses[ride._id] = destinationAddress;
    }
  },
},
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

.card-title {
  font-family: Bebas Neue;
  font-weight: normal;
  color: #166bc8;
  margin-bottom: 20px;
  margin-left: 50px;
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
