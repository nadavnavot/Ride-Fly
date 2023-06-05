<script>
  import arrow from '../components/arrow_back.vue'
  import main_title from '../components/main_title.vue';
  import Rate from '../components/rate.vue';
  import { getRideById } from "../composables/ridesApi.js";
  import Map from '../components/Map.vue';
  import message_button from '../components/message_button.vue';
  import banner from '../components/banner.vue';
  import navbar from '../components/navbar.vue';
  
  export default {
    components: {
      main_title,
      Rate,
      Map,
      arrow,
      message_button,
      navbar,
      banner
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

<template>
  
      <div class="title-wrapper">
      <arrow class="arrow-back"/>
      <main_title class="main-title" title="Ride Detail" />
    </div>
    <Map :departureCoordinates="departureCoordinates" :destinationCoordinates="destinationCoordinates" />

    <div v-if="rideData">
    <div class="row">
        <p>Booking status: <strong :style="{ color: rideData.booked ? 'green' : 'red' }">{{ rideData.booked ? 'Booked' : 'Not Confirmed' }}</strong></p>
       <div class="center">
        <p>Booking time: {{ formatBookingTime(rideData.booked_time) }}</p>
      </div>
      </div>
      <div class="row">
        <p class="time">Departure Time: {{ rideData.departure_time }}</p>
      <div class="center">
        <p class="time">Destination Time: {{ rideData.destination_time }}</p>
      </div>
    </div>
    <div class="column">
      <div class="row">
          <svg class="datesvg" xmlns="http://www.w3.org/2000/svg" width="13.818" height="14.407"
            viewBox="0 0 13.818 14.407">
            <g id="image_4_" data-name="image (4)" transform="translate(0 0)">
              <path id="Path_88" data-name="Path 88"
                d="M22.708-511.933a.831.831,0,0,0-.2.19c-.085.126-.088.138-.1.518l-.012.392-.969.009a6.514,6.514,0,0,0-1.06.047.658.658,0,0,0-.31.313c-.053.114-.056.343-.056,6.232,0,4.745.009,6.142.035,6.235a.617.617,0,0,0,.363.363c.176.053,12.846.053,13.021,0a.617.617,0,0,0,.363-.363c.026-.094.035-1.49.035-6.235,0-5.89,0-6.118-.056-6.232a.658.658,0,0,0-.31-.313,6.514,6.514,0,0,0-1.06-.047l-.969-.009-.012-.392c-.009-.381-.012-.392-.1-.518a.831.831,0,0,0-.2-.19c-.108-.061-.155-.067-.594-.067-.506,0-.577.015-.732.158s-.181.249-.181.647v.366H24.216v-.366c0-.4-.032-.515-.182-.647S23.809-512,23.3-512C22.863-512,22.816-511.994,22.708-511.933Zm.893,1.426v.878h-.585v-1.756H23.6Zm7.2,0v.878h-.585v-1.756H30.8Zm-8.4.679c0,.413.038.533.214.688.146.129.266.155.726.155.366,0,.407-.006.545-.073a.613.613,0,0,0,.231-.2c.082-.117.085-.135.094-.527l.012-.4H29.6l.012.4c.009.392.012.41.094.527a.613.613,0,0,0,.231.2c.138.067.179.073.545.073.46,0,.58-.026.726-.155.176-.155.214-.275.214-.688v-.357H33.2v2.078H20.615v-2.078H22.4Zm10.8,6.976v4.64H20.615v-9.28H33.2Z"
                transform="translate(-20 512)" />
              <path id="Path_89" data-name="Path 89"
                d="M102-314.531v3.469h9.017V-318H102Zm2.108-2.093v.732h-1.493v-1.464h1.493Zm2.078,0v.732h-1.464v-1.464h1.464Zm2.108,0v.732H106.83v-1.464h1.464Zm2.108,0v.732h-1.493v-1.464H110.4Zm-6.294,2.078v.732h-1.493v-1.464h1.493Zm2.078,0v.732h-1.464v-1.464h1.464Zm2.108,0v.732H106.83v-1.464h1.464Zm2.108,0v.732h-1.493v-1.464H110.4Zm-6.294,2.108v.732h-1.493v-1.464h1.493Zm2.078,0v.732h-1.464v-1.464h1.464Zm2.108,0v.732H106.83v-1.464h1.464Zm2.108,0v.732h-1.493v-1.464H110.4Z"
                transform="translate(-99.6 323.679)" />
            </g>
          </svg>
          <p>&nbsp; Thursday 08.06.2023</p>
        <div class="center">

        <svg xmlns="http://www.w3.org/2000/svg" width="11.829" style="margin-top: 5px;" height="12.734"
          viewBox="0 0 11.829 12.734">
          <g id="person" transform="translate(-50.8 481.589)">
            <path id="Path_83" data-name="Path 83"
              d="M56.339-481.572a3.159,3.159,0,0,0-.88.257,2.97,2.97,0,0,0-1.647,2.05,22.255,22.255,0,0,0-.037,2.768,2.933,2.933,0,0,0,.923,1.8l.231.219v1.35l-.127.112a4.361,4.361,0,0,1-1.084.548c-1.523.649-2.217,1.179-2.624,2.007a2.409,2.409,0,0,0-.28,1.179l-.014.427H62.629v-.34a2.694,2.694,0,0,0-.848-2.039,6.014,6.014,0,0,0-2.076-1.24,3.566,3.566,0,0,1-1.162-.614,2.527,2.527,0,0,1-.037-.718v-.672l.231-.219a2.918,2.918,0,0,0,.923-1.8,22.256,22.256,0,0,0-.037-2.768,2.964,2.964,0,0,0-2.168-2.235A3.543,3.543,0,0,0,56.339-481.572Zm.859.652a2.323,2.323,0,0,1,1.8,1.759,6.266,6.266,0,0,1,.049,1.505,4.764,4.764,0,0,1-.078,1.462,2.485,2.485,0,0,1-.954,1.286l-.147.1.009.908c.012.978.009.96.176,1.2.159.225.484.415,1.361.787a4.594,4.594,0,0,1,2.209,1.465,2.368,2.368,0,0,1,.3.755c.012.055.026.124.032.15.014.049-.248.052-5.237.052H51.469l.017-.081a2.515,2.515,0,0,1,.231-.695,1.544,1.544,0,0,1,.369-.5,5.935,5.935,0,0,1,2.033-1.188c.911-.4,1.191-.582,1.352-.891l.078-.144.009-.908.006-.908-.2-.144a2.483,2.483,0,0,1-.885-1.211L54.4-476.4l-.009-1.26a6.04,6.04,0,0,1,.052-1.514,2.332,2.332,0,0,1,1.788-1.75A2.892,2.892,0,0,1,57.2-480.92Z"
              transform="translate(0 0)" />
          </g>
        </svg>
            <p>&nbsp;1</p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="row" v-if="rideData">
        <img src="../../img/driver.svg" alt="Driver Image">
        <span style="margin-left: 10px;"></span>
        <h2 class="driver">{{ rideData.driver }}</h2>
        <p class="rating">{{ rideData.driver_rating }}</p>
        <rate />
        <div class="center">
          <h4 class="price">{{ rideData.price }} €</h4>
        </div>
      </div>
    </div>
    </div>
  <div class="button-wrapper">
    <message_button class="button-message"/>
  </div>

<banner/>
<navbar/>
</template>
  


  
<style>
.container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  margin-top: 10px;
}

.font-bold {
  font-family: Bebas Neue;
  font-size: 18px;
  font-weight: bold;
}

.driver {
  color: #1B2B71;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.price {
  margin-left: 140px;
  font-size: 18px;
}

.rating {
  margin-left: 10px;
}


.time {
  font-size: 16px;
  margin: 0;
}

.button-message{
  position:absolute;
    top:20px;
    right:0;
}

.button-wrapper {
  position: relative;
}


.title-wrapper {
white-space: nowrap;
}

.main-title{
 text-align: center;
 display: inline;
margin-left: 80px;

}

.arrow-back{
  display: inline;

}


.center {
  margin-left: auto;
  margin-right: 0;
}
</style>
  