<template>
    <Greet />
    <h1>My flights</h1>
</template>
<script>
import Greet from '../components/greet.vue';
export default{
    name:'FlightsView',
    components :{
        Greet
    }
}
</script>