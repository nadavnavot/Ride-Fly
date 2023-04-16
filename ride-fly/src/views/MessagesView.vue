<script>
export default {
  components: {
    chatbox
}  
}
import chatbox from '../components/chatbox.vue';
/* import ChatRoom from '../components/ChatRoom.vue'; */
/* import ChatApp from '../components/ChatApp.vue'; */
</script>

<template>
    <chatbox></chatbox>
<!--    <ChatRoom></ChatRoom> -->
<!--    <ChatApp></ChatApp> -->

 <!--- username --->

 <!-- <div id="app">
  <div class="chat-name">
    <input type="text" placeholder="Enter the name" v-model="sender">  
  </div>
 </div>
 -->
 <!--- chat messages --->

 <!-- <div class="chatlist">

  <div class="chat-list-item" v-for="(m, index) in messages" :key="index">
    <h1>
      {{ m.username }}
      <span>{{ m.message }}</span>
      <small>{{ m.time }}</small>
    </h1>
  </div>

 </div> -->

 <!--- chat control panel --->
 <!-- <div class="chat-control">
  <form @submit.prevent="sendMessage">
    <input type="text" placeholder="Type here ..." v-model="message">
    <button type="submit">send</button>
  </form>

 </div>
 -->


</template>

<!-- <script> -->

<!-- /* export default {
  data: () => ({  
    
    messages: [],

    message: '',

    sender: ''

}),

methods: {

  sendMessage(){
    this.$socket.emit('send', ({message: this.message, sender: 
    
    this.sender, time: this.$moment().format('hh:mm') }));

  }

},

mounted() {
  this.$socket.on('update', (data) => {
    this.messages = data;
  })
},

}
</script>


<style scoped>
* {
  box-sizing: border-box;
} */

/* </style> */ -->