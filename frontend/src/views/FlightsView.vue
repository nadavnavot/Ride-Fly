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
    <main_title title="My Flights" />
    <flights/>
    <navbar/>
</template>