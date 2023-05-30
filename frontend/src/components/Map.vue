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
        center: { lat: 0, lng: 0 }, // Initial center of the map
        zoom: 10, // Initial zoom level
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
            key: 'API_KEY'
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
            key: 'API_KEY'
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

            // Extract duration and distance from the route result
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
  <div>
    <div ref="mapContainer" style="height: 400px; width: 100%;"></div>
    <div class="details">
      <div>
        <strong>Departure:</strong> {{ departureAddress }}
      </div>
      <div>
        <strong>Destination:</strong> {{ destinationAddress }}
      </div>
      <div v-if="duration">
        <strong>Duration:</strong> {{ duration.text }}
        <br>
        <strong>Distance:</strong> {{ getDistanceText() }}
      </div>
    </div>
  </div>
</template>

<style>
.gm-style-cc {
  display: none !important;
}

#mapContainer {
  height: 400px;
  width: 100%;
}

.details {
  margin-top: 10px;
  font-size: 14px;
}
</style>
