
<script>
import main_title from '../components/main_title.vue';
import payment_button from '../components/payment_button.vue';

export default {
  components: {
    main_title,
    payment_button
}  
}

</script>
<template>
    <main_title title="Ride Overview"/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d297735.4853243169!2d-5.900818214996545!3d37.38613608828828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sS%C3%A9ville%2C%20Espagne!5e0!3m2!1sfr!2sbe!4v1681659201222!5m2!1sfr!2sbe" width="100%" height="350" style="margin-top: 80px;border-radius:9px;border: none;text-align: center;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <payment_button/>

</template>
 


