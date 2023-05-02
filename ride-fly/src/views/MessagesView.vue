<template>
	<div id="app">
		<div class="header">
			<h1>Chatroom</h1>
			<p class="username">Username: {{ username }}</p>
			<p class="online">Online: {{ users.length }}</p>
		</div>
		<ChatRoom v-bind:messages="messages" v-on:sendMessage="this.sendMessage" />
	</div>
</template>

<script>
import io from 'socket.io-client';
import ChatRoom from '../components/ChatRoom.vue'

export default {
	name: 'ride-fly',
	components: {
		ChatRoom
	},
	created() {
		this.client = io("http://localhost:3000");
		
		this.client.on('loggedIn', data => {
			this.messages = data.messages;
			this.users = data.users;
			this.client.emit('newuser', this.username);
		});
		
		this.client.on('userOnline', user => {
			this.users.push(user);
		});

		this.client.on('userLeft', user => {
			this.users.splice(this.users.indexOf(user), 1);
		});

		this.client.on('msg', message => {
			this.messages.push(message);
		});
	},
	data: function () {
		return {
			username: "",
			client: null,
			messages: [],
			users: []
		}
	},
	methods: {
		joinServer: function () {
			this.client.connect();
		},
		// listen: function () {
			
			// },
			sendMessage: function (message) {
				this.client.emit('msg', message);
			}
		},
		mounted: function () {
			this.username = prompt("What is your username?", "Anonymous");
			if (!this.username) {
				this.username = "Anonymous";
			}
			this.joinServer();
		}
	}
</script>


<style lang="scss">
body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	color: #2C3E50;
	margin: 0;
	padding: 0;
}
#app {
	display: flex;
	flex-direction: column;
	height: 100vh;
	width: 100%;
	max-width: 768px;
	margin: 0 auto;
	padding: 15px;
	box-sizing: border-box;
}
</style>