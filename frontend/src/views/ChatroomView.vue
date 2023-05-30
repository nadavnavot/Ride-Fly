<script>
export default {
  components: {
    main_title,
    message,
    navbar
}  
}
import main_title from '../components/main_title.vue';
import message from '../components/message.vue';
import navbar from '../components/navbar.vue';
</script>

<template>
  <div>
    <div class="header">
  <div class="header-title">
    <main_title title="Chat" />
  </div>
    <div class="header-icon">
      <img src="/Users/carloslaptop4/Desktop/IDPA/year 2/SEMESTER 2/Product 4/Ride-Fly/frontend/icons/Notifications.svg" alt="Icon" />
    </div>
  </div>
  <router-link to="/Messages">
 <message></message></router-link>

<navbar/>
</div>
</template>

<style>

/* Style time text */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.header-icon {
  margin-left: auto;
}

svg {
  float: right;
  margin-top: 311px;
} 
</style>