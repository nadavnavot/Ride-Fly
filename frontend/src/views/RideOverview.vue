<template>
  <div>
    <arrow />
    <main_title style="text-align: center;" title="Ride Overview" />
    <Map :departureCoordinates="departureCoordinates" :destinationCoordinates="destinationCoordinates" />
    <div class="container">
    <div class="row">
      <h1>{{ $route.params.id }}</h1>
    </div>
    <div class="row">
      <div v-if="error">{{ error }}</div>
    </div>
    <div class="row" v-if="rideData">
      <div>
        <p>{{ rideData.departure_time }}</p>
        <p>{{ rideData.destination_time }}</p>
      </div>
    </div>
    <div class="row" v-if="rideData">
      <div>
        <p class="driver">{{ rideData.driver }}</p>
        <img src="img/hills-family-dental-platte-city-mo-servicespage-fillings-image.svg" alt="Avatar">
        <p>{{ rideData.driver_rating }}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="15.4" height="14.69" viewBox="0 0 15.4 14.69">
  <g id="Star" transform="translate(0)">
    <path id="Path_68" data-name="Path 68" d="M9.419-511.945c-.048.036-.358.768-1.043,2.48-.533,1.335-.982,2.437-.994,2.449s-1.158.1-2.549.191-2.577.176-2.634.185a.409.409,0,0,0-.191.1.31.31,0,0,0-.021.407c.033.042.952.826,2.04,1.736l1.979,1.654-.63,2.51c-.349,1.381-.634,2.546-.634,2.592a.318.318,0,0,0,.324.328c.109,0-.012.073,2.419-1.457,1.152-.725,2.113-1.317,2.137-1.317s.988.592,2.137,1.317c2.434,1.53,2.31,1.457,2.419,1.457a.318.318,0,0,0,.324-.328c0-.046-.285-1.211-.634-2.592l-.63-2.51,1.967-1.645c1.082-.9,2-1.684,2.04-1.733a.321.321,0,0,0-.2-.522c-.058-.009-1.243-.094-2.634-.185s-2.54-.179-2.549-.191-.458-1.114-.994-2.449c-.691-1.721-.994-2.443-1.043-2.48a.345.345,0,0,0-.2-.055A.345.345,0,0,0,9.419-511.945Z" transform="translate(-1.921 512)" fill="#f1c933"/>
  </g>
</svg>

        <p class="price">{{ rideData.price }} €</p>
      </div>
      <div>
        <payment_button :id="$route.params.id" />
      </div>
    </div>
  </div>
  </div>
  <banner></banner>
</template>

<script>
import main_title from '../components/main_title.vue';
import payment_button from '../components/payment_button.vue';
import arrow from '../components/arrow_back.vue';
import Map from '../components/Map.vue';
import banner from '../components/banner.vue';
import { getRideById } from "../composables/ridesApi.js";

export default {
  components: {
    main_title,
    payment_button,
    arrow,
    Map,
    banner
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

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  font-size: 18px;
}

.row {
  margin-bottom: 20px;
}

.row > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.driver {
  color: #1B2B71;
}

.driver,
.price {
  font-family: 'Bebas Neue', sans-serif;
  font-weight: bold;
}
</style>