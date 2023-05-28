<script>
import main_title from '../components/main_title.vue';
import card from '../components/card.vue';
import navbar from '../components/navbar.vue';


export default {
  components: {
<<<<<<< HEAD
    main_title, card, navbar
  }
};
</script>

<template>
  <div>
    <main_title title="Home" />
    <card :items="cards" />
  </div>


=======
  main_title, 
  card, 
  navbar
},
data() {
    return {
      cards: [
        { departure: 'San Vincente',departure_time: '6:25' , destination: 'Seville airport',destination_time: '7:00' , driver: 'John', rate:'4.2', price:'5' },
        { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Josh', rate:'3.7', price:'7' },
        { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Joe', rate:'4.5', price:'9' }
      ]
    }}
}
</script>

<template>
<div>
  <main_title  title="Home" />
  <card :items="cards" />
  <navbar/>
</div>
>>>>>>> fa842373eb7cc45b391ee573fedc388837450b26
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