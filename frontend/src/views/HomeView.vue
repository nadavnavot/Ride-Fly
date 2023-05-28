<script>
import main_title from '../components/main_title.vue';
import card from '../components/card.vue';
import navbar from '../components/navbar.vue';


export default {
  components: {
    main_title, card, navbar
  }
};
</script>

<template>
  <div>
    <main_title title="Home" />
    <card :items="cards" />
  </div>


  <!-- <img src="../assets/background.png"> -->
<navbar/>
</template>

<!-- <style>
img {
  width: 100%;
  margin-top: 80px;
  margin-left: -10px;
}
</style> -->