<script>
import axios from 'axios';

export default {
  name: 'Map',
  props: {
    departureCoordinates: Object,
    destinationCoordinates: Object
  },
  data() {
    return {
      map: null,
      directionsService: null,
      directionsRenderer: null,
      departureAddress: '',
      destinationAddress: '',
      duration: null
    };
  },
  mounted() {
    this.loadMap();
  },
  watch: {
    departureCoordinates: {
      immediate: true,
      handler(value) {
        if (value) {
          this.getDepartureAddress(value);
          this.calculateRoute();
        }
      }
    },
    destinationCoordinates: {
      immediate: true,
      handler(value) {
        if (value) {
          this.getDestinationAddress(value);
          this.calculateRoute();
        }
      }
    }
  },
  methods: {
    calculateDistanceInKm(distanceInMeters) {
      const distanceInKm = distanceInMeters / 1000;
      return distanceInKm.toFixed(2);
    },
    loadMap() {
      const options = {
        center: { lat: 0, lng: 0 },
        zoom: 10, 
        disableDefaultUI: true
      };

      this.map = new google.maps.Map(this.$refs.mapContainer, options);
      this.directionsService = new google.maps.DirectionsService();
      this.directionsRenderer = new google.maps.DirectionsRenderer({ map: this.map });
    },
    getDepartureAddress(coordinate) {
      axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            latlng: `${coordinate.lat},${coordinate.lng}`,
            key: 'API_KEY '
          }
        })
        .then((response) => {
          if (response.data.results.length > 0) {
            this.departureAddress = response.data.results[0].formatted_address;
          }
        })
        .catch((error) => {
          console.error('Error retrieving departure address:', error);
        });
    },
    getDestinationAddress(coordinate) {
      axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            latlng: `${coordinate.lat},${coordinate.lng}`,
            key: 'API_KEY '
          }
        })
        .then((response) => {
          if (response.data.results.length > 0) {
            this.destinationAddress = response.data.results[0].formatted_address;
          }
        })
        .catch((error) => {
          console.error('Error retrieving destination address:', error);
        });
    },
    calculateRoute() {
      if (this.departureCoordinates && this.destinationCoordinates) {
        const request = {
          origin: this.departureCoordinates,
          destination: this.destinationCoordinates,
          travelMode: google.maps.TravelMode.DRIVING
        };

        this.directionsService.route(request, (result, status) => {
          if (status === 'OK') {
            this.directionsRenderer.setDirections(result);

            const leg = result.routes[0].legs[0];
            this.duration = {
              text: leg.duration.text,
              distance: leg.distance.text
            };
          } else {
            console.error('Error calculating route:', status);
          }
        });
      }
    },
    getDistanceText() {
      if (this.duration && this.duration.distance) {
        return this.duration.distance;
      }
      return '';
    }
  }
};
</script>

<template>
    <div ref="mapContainer" style="height: 270px; width: 100%; margin-top: 20px; margin-bottom: 5px;"></div>
      <div class="row">
        <div class="margins">
        <h1 class="Address">
          {{ departureAddress }}
        </h1></div>
          <div class="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.333" height="7.969" viewBox="0 0 17.333 7.969">
            <g id="arrow" transform="translate(17.333) rotate(90)">
              <path id="Path_67" data-name="Path 67" d="M2.008,1.875C.93,2.908.038,3.782.027,3.818A.39.39,0,0,0,.5,4.336c.046-.021.761-.68,1.583-1.47l1.5-1.438L3.6,9.271c.018,8.393.007,7.882.176,8.02a.55.55,0,0,0,.423,0c.169-.138.159.374.176-8.02l.018-7.843,1.5,1.438c.821.79,1.537,1.452,1.586,1.47a.379.379,0,0,0,.494-.363c0-.12-.025-.169-.176-.328C7.564,3.405,4.028.014,3.993,0,3.979,0,3.087.839,2.008,1.875Z"/>
            </g>
          </svg>
        </div>
        <div class="margins">
        <h1 class="Address">
          {{ destinationAddress }}
          
        </h1></div>
      </div>
      <div class="row">
        <div v-if="duration">
          <p>Duration: {{ duration.text }}</p>
        </div>
        <p style="margin-left: auto; margin-right: 0;">Distance: {{ getDistanceText() }}</p>
      </div>
</template>


<style>
.gm-style-cc {
  display: none !important;
}

.font-regular {
  font-family: Roboto;
  font-size: 16px;
  font-weight: regular;
}

.row {
  display: flex;
}

.Address{
  flex: 1;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: Bebas Neue;
  font-size: 18px;
  font-weight: bold;
}

.margins{
padding-left: 10px;
padding-left: 10px;
}

.arrow{
margin-top: 40px;
  margin-right:50px;
  margin-left: 60px;
}

</style>
