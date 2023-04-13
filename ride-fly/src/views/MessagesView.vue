<script>
export default {
  components: {
    main_header
}  
}
import main_header from '../components/main_header.vue';
</script>

 <script src="/socket.io/socket.io.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script>
    var socket = null;
    var app = new Vue({
      // State 0: select username
      // State 1: chat application
      el: '#app',
      data: {
        messages: [],
        message: '',
        username: '',
        state: 0
      },
      methods: {
        sendMessage: function () {
          socket.emit('message', this.message);
          this.message = '';
        },
        setUsername: function () {
          socket.emit('join', this.username);
          this.username = '';
          this.state = 1;
        },
        continueWithoutUsername: function () {
          socket.emit('join', null);
          this.state = 1;
        }
      },
      created: function () {
        socket = io();
      },
      mounted: function () {
        socket.on('message', function (message) {
          app.messages.push(message);
          // this needs to be done AFTER vue updates the page!!
          app.$nextTick(function () {
            var messageBox = document.getElementById('chatbox');
            messageBox.scrollTop = messageBox.scrollHeight;
          });
        });
      }
    });
  </script>

<template>
    <main_header title="Messages"></main_header>
  <div id="app">
    <div v-if="state == 0">
      <h3>Welcome! Please choose a username</h3>
      <form @submit.prevent="setUsername">
        <input type="text" placeholder="Username..." v-model:value="username" />
        <input type="submit" value="Join" />
      </form>
      <button @click="continueWithoutUsername">Join as a Guest</button>
    </div>
    <div v-if="state == 1">
      <ul id="chatbox">
        <li v-for="message in messages">
          <b>{{ message.user }}:</b> {{ message.message }}
        </li>
      </ul>
      <form @submit.prevent="sendMessage">
        <input type="text" placeholder="Message..." v-model:value="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: sans-serif;
  background: url('http://www.cornwallnewswatch.com/wp-content/uploads/2014/07/Fire-01.jpg');
  color: white;
}

#chatbox {
  height: 200px;
  max-width: 400px;
  overflow-y: scroll;
}

</style>

<script src="/socket.io/socket.io.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
  var socket = null;
  var app = new Vue({
    // State 0: select username
    // State 1: chat application
    el: '#app',
    data: {
      messages: [],
      message: '',
      username: '',
      state: 0
    },
    methods: {
      sendMessage: function () {
        socket.emit('message', this.message);
        this.message = '';
      },
      setUsername: function () {
        socket.emit('join', this.username);
        this.username = '';
        this.state = 1;
      },
      continueWithoutUsername: function () {
        socket.emit('join', null);
        this.state = 1;
      }
    },
    created: function () {
      socket = io();
    },
    mounted: function () {
      socket.on('message', function (message) {
        app.messages.push(message);
        // this needs to be done AFTER vue updates the page!!
        app.$nextTick(function () {
          var messageBox = document.getElementById('chatbox');
          messageBox.scrollTop = messageBox.scrollHeight;
        });
      });
    }
  });
</script>