<template>
  <div>
    <main_title title="My Rides" />
    <div v-if="bookedRides">
      <h2>Upcoming Rides</h2>
      <div @click="onClick(ride._id)" class="card bg-blue" v-for="ride in bookedRides" :key="ride._id">
        <div class="wrapper">
          <p class="card-address">{{ destinationAddresses[ride._id] }}</p>
        </div>
        <div class="wrapper">
          <p class="card-time">{{ ride.departure_time }} &nbsp; {{ ride.destination_time }}&nbsp;</p>
        </div>
        <div class="wrapper">
          <p class="card-text right-section">{{ ride.driver }} &nbsp;</p>
          <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
        </div>      
      </div>
    </div>

    <h2>Past Rides</h2>
    <div class="card black bg-yellow">
      <div class="wrapper">
        <p class="card-address">Sevilla Airport</p>
      </div>
      <div class="wrapper">
        <p class="card-time black">22:10  25/1</p>
      </div>
      <div class="wrapper"> 
        <p class="card-text left-section blue">Done</p>
        <p class="card-text right-section">Pedro</p>
        <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
      </div>      
    </div>
    <banner></banner>
    <navbar />
  </div>
</template>


<script>
import axios from 'axios';
import main_title from '../components/main_title.vue';
import Rate from '../components/rate.vue';
import navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';
import { getBookedRides } from "../composables/ridesApi.js";


export default {
  components: {
    main_title,
    navbar,
    banner,
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
          key: 'AIzaSyAsfiqTHERuY69mAFw6m2FP3g8nXFpSPnQ',
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
  height: 120px;
  padding: 10px;
  font-family: 'Bebas Neue';
  font-weight: bold;
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.card-title {
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-time {
  color: white;
  font-family: 'Roboto';
  font-style: normal;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-text {
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.left-section {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.right-section {
  margin-left: auto;
  margin-right: 10px;
}

.blue {
  color: #166bc8;
}

.bg-blue {
  background-color: #166bc8;
}

.darkblue {
  color: #1B2B71;
  font-weight: bold;
}

.yellow {
  color: #f1c933;
}

.bg-yellow {
  background-color: #f1c933;
}

.bg-yellow {
  background-color: #AEB3BD;
}

.black {
  color: black;
} 
</style>



