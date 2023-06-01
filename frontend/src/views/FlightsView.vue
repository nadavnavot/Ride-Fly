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
<div class="header">
  <div class="header-title">
    <main_title title="Flights" />
  </div>
    <div class="header-icon">
      <img src="" alt="Icon" />
    </div>
  </div>
    <flights/>
    <banner></banner>    
    <navbar/>
    </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.header-icon {
  margin-left: auto;
}
</style>