<template>
  <stripe-checkout
    ref="checkoutRef"
    mode="payment"
    :pk="publishableKey"
    :line-items="lineItems"
    :success-url="successURL"
    @loading="v => loading = v"
  />
  <button class="button" @click="submit">Book ride</button>
</template>

<script>
import { ref } from 'vue';
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  name: 'payment_button',
  components: {
    StripeCheckout
  },
  data() {
    return {
      publishableKey: "pk_test_51Mw29pAznyd0NJ8kTv8jge0iLqG76cJX3KGwvpFWQWK0519ahyQ3rKqO1E4Tbmn3nVDhTxfDZuYca7xdLgNb22tw004Dvy4Poi",
      loading: false,
      lineItems: [
        {
          price: 'price_1MwA6LAznyd0NJ8k6ji3RZbW',
          quantity: 1
        }
      ],
      successURL: 'http://localhost:5173/Success',
      error: ref(null)
    };
  },
  methods: {
    async submit() {
  this.$refs.checkoutRef.redirectToCheckout()
    .then(async (result) => {
      if (result.error) {
        console.error('Payment error:', result.error);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        // When payment is succeeded
        const id = this.rideData._id;
        try {
          await this.updateRide(id); 
          this.$router.push({ path: '/Success' });
        } catch (error) {
          console.error('Failed to update ride:', error);
          this.error = 'Failed to update ride.';
        }
      }
    })
    .catch(error => {
      console.error('Failed to redirect to checkout:', error);
      this.error = 'Failed to redirect to checkout.';
    });
},

}
};
</script>

<style>
.button {
  color: black;
  background-color: #F1C933;
  padding: 15px;
  border-radius: 9px;
  border: none;
  width: 140px;
  font-size: larger;
  cursor: pointer;
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 130px;
  margin-right: 20px;
}
</style>
