<template>
  <div>
    <main_title title="My Rides" />
    <div v-if="bookedRides">
      <h2>Upcoming Rides</h2>
      <div class="card-container">
        <div @click="onClick(ride._id)" :class="getCardClass(index)" v-for="(ride, index) in bookedRides" :key="ride._id">
          <div class="wrapper center">
            <p class="card-address">{{ destinationAddresses[ride._id] }}</p>
          </div>
          <div class="wrapper">
            <div class="time-column">
              <div class="time-label">Departure Time:</div>
              <p class="card-time">{{ ride.departure_time }}</p>
            </div>
            <div class="time-column">
              <p class="time-label">Arrival Time:</p>
              <p class="card-time">{{ ride.destination_time }}</p>
            </div>
          </div>
          <div class="wrapper">
            <p class="card-text right-section">{{ ride.driver }} &nbsp;</p>
            <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
          </div>      
        </div>
      </div>
    </div>

    <h2>Past Rides</h2>
    <div class="card-container">
      <div class="card black bg-grey">
        <div class="wrapper center">
          <p class="card-address">Charleroi Airport</p>
        </div>
        <div class="wrapper center">
          <div class="time-column">
            <p class="time-label">Departure Time:</p>
            <p class="card-time black">23:10</p>
          </div>
          <div class="time-column">
            <p class="time-label">Arrival Time:</p>
            <p class="card-time black">12:10</p>
          </div>
        </div>
        <div class="wrapper"> 
          <p class="card-text left-section blue">Done</p>
          <p class="card-text right-section">Pedro</p>
          <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
        </div>      
      </div>
    </div>

    <div class="card-container">
      <div class="card black bg-grey">
        <div class="wrapper center">
          <p class="card-address">Zagreb Airport</p>
        </div>
        <div class="wrapper center">
          <div class="time-column">
            <p class="time-label">Departure Time:</p>
            <p class="card-time black">18:30</p>
          </div>
          <div class="time-column">
            <p class="time-label">Arrival Time:</p>
            <p class="card-time black">6:30</p>
          </div>
        </div>
        <div class="wrapper"> 
          <p class="card-text left-section blue">Done</p>
          <p class="card-text right-section">Pedro</p>
          <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
        </div>      
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
            key: 'API_KEY',
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
    
    getCardClass(index) {
      return index % 2 === 0 ? 'card bg-blue white' : 'card bg-yellow black';
    },
  },
};
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  cursor: pointer;
  width: 100%; /* width: 50% in XD file*/
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
  z-index: 9998;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.card-title {
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.time-column {
  flex: 1;
}

.time-label {
  font-family: 'Roboto';
  font-style: normal;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0%;
}

.card-time {
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

.bg-grey {
  background-color: #AEB3BD;
}

.black {
  color: black;
} 

.white {
  color: white;
} 

.center {
  display: flex;
  align-items: center; /* Centers items vertically */
  justify-content: center; /* Centers items horizontally */
}
</style>
