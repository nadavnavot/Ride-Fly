<script>
import main_title from '../components/main_title.vue';
import flights from '../components/flights.vue';
import navbar from '../components/navbar.vue';
import banner from '../components/banner.vue';

export default {
  components: {
    main_title,
    flights,
    banner,
    navbar,
}  
}
</script>

<template>
  <div>
    <main_title title="Flights" />
    <flights/>
    <banner/>
    <navbar/>
  </div>
</template>