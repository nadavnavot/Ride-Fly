<template>
  <div>
  <div @click="onClick" v-for="(cards, index) in items" :key="index" 
  class="card">
  <div class="wrapper">
  <h3 class="card-title departure">{{ cards.departure }}</h3>
  <svg style="margin-top: 4px;" xmlns="http://www.w3.org/2000/svg" width="17.333" height="7.969" viewBox="0 0 17.333 7.969">
  <g id="arrow" transform="translate(17.333) rotate(90)">
    <path id="Path_67" data-name="Path 67" d="M2.008,1.875C.93,2.908.038,3.782.027,3.818A.39.39,0,0,0,.5,4.336c.046-.021.761-.68,1.583-1.47l1.5-1.438L3.6,9.271c.018,8.393.007,7.882.176,8.02a.55.55,0,0,0,.423,0c.169-.138.159.374.176-8.02l.018-7.843,1.5,1.438c.821.79,1.537,1.452,1.586,1.47a.379.379,0,0,0,.494-.363c0-.12-.025-.169-.176-.328C7.564,3.405,4.028.014,3.993,0,3.979,0,3.087.839,2.008,1.875Z"/>
  </g>
</svg>
  <h3 class="card-title destination">{{ cards.destination }}</h3>
</div>
<div class="wrapper">

  <p class="card-time">{{ cards.departure_time }}</p>
 
  <p class="card-time">{{ cards.destination_time }}</p>
  </div>
  <div class="wrapper">
  <p class="card-text">{{ cards.driver }} &nbsp; {{ cards.rate }}</p>
  <p class="card-text">{{ cards.price }}<rate/></p></div>
  </div>
  </div>
</template>

<script>
import rate from '../components/rate.vue'
export default {
  components:{rate},
  name: 'card'
,
props: {
    items: {
      type: Array,
      required: true
    }
  },

methods: {
  onClick(){
    this.$router.push({path:'/Overview'})
  }
    }
  }

</script>

<style>
.card{
  cursor: pointer;
    width: 100%;
    height: 130px;
    padding: 10px;
    font-family: avenir;
    margin-top:20px;
    border: 1px black solid;
     margin-bottom: 5px;
     border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 9px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
  margin-bottom: 40px;
}
.wrapper{
display: flex;
justify-content: space-around;  text-align: center;
}

.card-title{
  font-family: Bebas Neue;
  font-weight: normal;
  color: #166BC8;
  margin-bottom:20px;
margin-left: 50px;

}

.card-time{
  color:black;
  font-family: 'Roboto';
  font-style: normal;
  margin-bottom: 20px;
}

.card-text{
  color:grey;
  font-family: 'Roboto';
  font-style: normal;
}
</style>

