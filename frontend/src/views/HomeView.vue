<script>
import main_title from '../components/main_title.vue';
import card from '../components/card.vue';

export default {
  components: {
    main_title, card
  }
};
</script>

<template>
  <div>
    <main_title title="Home" />
    <card :items="cards" />
  </div>


  <!-- <img src="../assets/background.png"> -->
</template>

<!-- <style>
img {
  width: 100%;
  margin-top: 80px;
  margin-left: -10px;
}
</style> -->