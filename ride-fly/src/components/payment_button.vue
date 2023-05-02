
<template>
    <stripe-checkout
   ref="checkoutRef"
   mode="payment"
   :pk="publishableKey"
   :line-items="lineItems"
   :success-url="successURL"
   @loading="v =>loading = v"
   />
  <button class="button" @click="submit">Book ride</button>
  </template> 


<script>
   import {StripeCheckout} from '@vue-stripe/vue-stripe'
   export default{
    name:'payment_button',
   components:{
   StripeCheckout
   },
   data(){
   this.publishableKey = "pk_test_51Mw29pAznyd0NJ8kTv8jge0iLqG76cJX3KGwvpFWQWK0519ahyQ3rKqO1E4Tbmn3nVDhTxfDZuYca7xdLgNb22tw004Dvy4Poi"
   return{
   loading:false,
   lineItems:[
     {
       price:'price_1MwA6LAznyd0NJ8k6ji3RZbW',
       quantity:1
     }
   ],
   successURL:'http://localhost:5178/Success'
   }
   },
   methods:{
   submit(){
   this.$refs.checkoutRef.redirectToCheckout()
   }  
   }
   }
   </script>

<style>
.button{
  color: black;
  background-color:#F1C933;
  padding:15px;
  border-radius: 9px;
  border:none;
  width: 140px;
  font-size: larger;
  cursor: pointer;
  position:fixed;
  right: 0;
  bottom: 0;
  margin-bottom:130px;
  margin-right: 20px;
  }
</style>