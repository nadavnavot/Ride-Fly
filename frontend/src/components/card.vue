<template>
  <div>
    <div
      @click="onClick(ride._id)"
      class="card"
      v-for="ride in ridesData"
      :key="ride._id"
    >
      <div class="wrapper">
        <h3 class="card-title departure black">{{ departureAddresses[ride._id] }}</h3>
         <svg
          style="margin-top: 4px;"
          xmlns="http://www.w3.org/2000/svg"
          width="17.333"
          height="7.969"
          viewBox="0 0 17.333 7.969"
        >
          <g id="arrow" transform="translate(17.333) rotate(90)">
            <path
              id="Path_67"
              data-name="Path 67"
              d="M2.008,1.875C.93,2.908.038,3.782.027,3.818A.39.39,0,0,0,.5,4.336c.046-.021.761-.68,1.583-1.47l1.5-1.438L3.6,9.271c.018,8.393.007,7.882.176,8.02a.55.55,0,0,0,.423,0c.169-.138.159.374.176-8.02l.018-7.843,1.5,1.438c.821.79,1.537,1.452,1.586,1.47a.379.379,0,0,0,.494-.363c0-.12-.025-.169-.176-.328C7.564,3.405,4.028.014,3.993,0,3.979,0,3.087.839,2.008,1.875Z"
            />
          </g>
        </svg>
        <h3 class="card-title destination blue">{{ destinationAddresses[ride._id] }}</h3>
      </div>
      <div class="wrapper">
        <p class="card-time margin-left">{{ ride.departure_time }}</p>
        <p class="card-time margin-right">{{ ride.destination_time }}</p>
      </div>
      <div class="wrapper">
    <div class="left-section">
      <p class="card-text darkblue">{{ ride.driver }}</p>
      <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
      <p class="card-text">
        <span class="black">{{ ride.driver_rating }}</span>
        &nbsp;<rate />
      </p>
    </div>
    <p class="card-text right-section">{{ ride.price }} €</p>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import rate from '../components/rate.vue';
import { getAllRides } from '../composables/ridesApi.js';

export default {
  components: { rate },
  name: 'card',
  data() {
    return {
      ridesData: [],
      error: null,
      departureAddresses: {},
      destinationAddresses: {},
    };
  },
  methods: {
    onClick(id) {
      if (id) {
        this.$router.push({ name: 'Overview', params: { id: id } });
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
        console.log('Error:', error);
        return 'Unknown address';
      }
    },
    async fetchAddresses() {
  for (const ride of this.ridesData) {
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
  async mounted() {
    try {
      const { ridesData, error } = await getAllRides();
      this.ridesData = ridesData;
      this.error = error;

      this.fetchAddresses();
    } catch (error) {
      this.error = error;
    }
  },
};
</script>

<style>
.card {
  cursor: pointer;
  width: 100%;
  height: 120px;
  padding: 10px;
  font-family: Roboto;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  background-color: white;
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
  font-family: Bebas Neue;
  font-weight: normal;
  color: #166bc8;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-time {
  color: black;
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

.wrapper {
  display: flex;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.right-section {
  margin-left:auto;
  margin-right: 10px;
}

.blue {
  color: #166bc8;
}

.darkblue {
  color: #1B2B71;
  font-weight: bold;
}

.yellow {
  color: #f1c933;
}

.black {
  color: black;
} 

.margin-left {
  margin-left: 25px;
}

.margin-right {
  margin-right: 25px;
}

</style>



