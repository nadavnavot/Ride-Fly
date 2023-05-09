<script>
import main_title from '../components/main_title.vue';
<<<<<<< HEAD
=======
import card from '../components/card.vue';
import navbar from '../components/navbar.vue';
>>>>>>> 77261373f63dbad1330ea5cecfa08ac1172ecd54


export default {
  components: {
<<<<<<< HEAD
    main_title}}
=======
    main_title, 
    card, 
    navbar
},
data() {
    return {
      // cards: [
      //   { departure: 'San Vincente',departure_time: '6:25' , destination: 'Seville airport',destination_time: '7:00' , driver: 'John', rate:'4.2', price:'5' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Josh', rate:'3.7', price:'7' },
      //   { departure: 'Departure',departure_time: '6:25' , destination: 'Arrival', destination_time: '7:00' ,driver: 'Joe', rate:'4.5', price:'9' }
      // ]
    }}
}
>>>>>>> 77261373f63dbad1330ea5cecfa08ac1172ecd54
</script>
<template>
  <div>
    <main_title title="My Rides" />
<<<<<<< HEAD

=======
    <card items="cards" />
    <navbar/>
    </div>
>>>>>>> 77261373f63dbad1330ea5cecfa08ac1172ecd54
</template>

