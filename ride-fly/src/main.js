import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import moment from 'moment';
import io from 'socket.io-client'; */

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

/* Vue.config.productionTip = false

Vue.prototype.$moment = moment;

Vue.prototype.$socket = io('http://localhost:${process.env.VUE_APP_SOCKET_PORT}');

new Vue({
    render: h => (App),
}).$mount('#app') */