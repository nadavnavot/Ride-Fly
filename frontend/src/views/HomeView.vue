<script>
import main_title from '../components/main_title.vue';
import card from '../components/card.vue';
import navbar from '../components/navbar.vue';
import date from '../components/date.vue';
import banner from '../components/banner.vue';

export default {
  components: {
    main_title, card, navbar, date, banner
  }
};
</script>

<template>
    <main_title title="Home" />
    <div class="margin-top">
    <date/></div>
    <card :items="cards" />
    <banner/>
<navbar/>
</template>

<style>
.margin-top{
margin-top: 15px;
}
</style>