<template>
    <form @submit.prevent="sendMessage()" class='chat-box'>
        <div class="chatview">
            <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.sender }}: {{ message.content }}
      </li>
    </ul>
        </div>
        <div class="input_message">
      <input
      v-model="newMessage"
      />
      <button type="submit">Send</button></div>
    </form>
  </template>

<script lang="ts">
import io from 'socket.io-client';
const socket = io('http://localhost:5174'); // Replace with your server URL

export default {
name:'Chatbox',
  data() {
    return {
      messages: [{id:1, content: 'hello' , sender: 'Berre'}],
      newMessage: '',
    };
  },
  created() {
    socket.on('message', (message) => {
      this.messages.push(message);
    });
  },
  mounted() {
    // Listen for 'message' event from the server and update messages data
    console.log(socket);
    socket.on('message', (message) => {
      this.messages.push(message);
      console.log(message);
    });
    // Fetch initial data
  socket.emit('message');
  socket.on('data', (data) => {
console.log(data);
  });
  },
  methods: {
    sendMessage() {
      // Emit 'message' event to the server with the new message
      
      socket.emit('message', {
        id: Date.now(),
        sender: 'User',
        content: this.newMessage,
      });
      
     
      // Clear the input field
      this.newMessage = '';
    },
  },
};
</script>

<style scoped>
.chat-box {
  width: 100%;
  display: flex;
  height: 60vh;
  background-color: whitesmoke;
  border-radius: 8px;
}

.chatview {
    position: relative;
    height: 50vh;
    width: 100%;
    border-color: #F1C933;
}
.input_message {
    width: 100%;
    display:flex;
    position: absolute;
    bottom: 0;
    margin: 2px;
    border: 0;
}

input {
    width: 85%;
    height: 35px;
    outline-width: 0;
    border-width: 0;
}

button {
width: 20%;
opacity: 1;
background-color: #166BC8;
color: white;
border-radius: 0px 10px 10px 0px;
height: 35px;
}
</style>