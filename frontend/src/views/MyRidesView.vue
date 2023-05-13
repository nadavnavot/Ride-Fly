<script>
import main_title from '../components/main_title.vue';
import rides from '../components/rides.vue';
import navbar from '../components/navbar.vue';


export default {
  components: {
    main_title, 
    rides,
    navbar
},
data() {
    return {
      // cards: [
      //   { departure: 'San Vincente',departure_time: '6:25' , destination: 'Seville airport',destination_time: '7:00' , driver: 'John', rate:'4.2', price:'5' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Josh', rate:'3.7', price:'7' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Joe', rate:'4.5', price:'9' }
      // ]
    }}
}
</script>

<template>
<div class="header">
  <div class="header-title">
    <main_title title="My Rides" />
  </div>
    <div class="header-icon">
      <img src="/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/icons/Add.svg" alt="Icon" />
    </div>
  </div>
    <rides/>
    <navbar/>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.header-icon {
  margin-left: auto;
}
</style>