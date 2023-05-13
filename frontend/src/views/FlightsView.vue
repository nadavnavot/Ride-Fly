<script>
import main_title from '../components/main_title.vue';
import flights from '../components/flights.vue';
import navbar from '../components/navbar.vue';

export default {
  components: {
    main_title,
    flights,
    navbar
}  
}
</script>

<template>
<div class="header">
  <div class="header-title">
    <main_title title="Flights" />
  </div>
    <div class="header-icon">
      <img src="/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/icons/Add.svg" alt="Icon" />
    </div>
  </div>
    <flights/>
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