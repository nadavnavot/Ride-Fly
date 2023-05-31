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
  <main_title title="Chatroom" />
  <router-link to="/Messages">
 <message/></router-link>
<navbar/>
</template>

<style>

</style>