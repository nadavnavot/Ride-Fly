// import api from "./routes/api.js";
const api = require('./routes/api.js');
const cors = require('cors');

// The app constant creates a new Express application instance.
const express = require("express");
const app = express();
app.use(cors())

// JSON
app.use(express.json())

// Load Routes
app.use("/api", api)


// The http constant creates an HTTP server instance that wraps the app instance.
const http = require("http").Server(app);
//The io constant creates a new Socket.io instance, passing the http server as an argument.
const io = require("socket.io")(http, {
  // The cors object is an option passed to socket.io which defines Cross-Origin Resource Sharing settings to allow clients to connect from other domains.
  cors: {
    origin: "*",  // don't use in production
    // ALSO POSSIBLE, SAFER BUT MORE CHANCE OF CORS ISSUES
    // origin: "http://localhost:5173",
    methods: ['GET', 'POST']
  }
});

// Mongoose is imported, and two empty arrays are initialized to keep track of users and messages.
const mongoose = require("mongoose");
let users = [];
let messages = [];

// Connects the application to a MongoDB database using the Mongoose library.
mongoose.connect("mongodb+srv://Adinda:In1992diaadinda@cluster0.gf4ehvm.mongodb.net/ride_fly")


//** Chat Model*//

// Creates a Mongoose schema for a chat message, which contains a username and a msg.
const ChatSchema = mongoose.Schema({
  username: String,
  msg: String
});

// Creates a new Mongoose model for the chat schema, using the mongoose.model method.
const ChatModel = mongoose.model("chat", ChatSchema);

// ChatModel.find((err, result) => {
//   if (err) throw err;

//   messages = result;
// });

// messages = ChatModel.find();


io.on("connection", client => {
  client.emit('loggedIn', {
    users: users.map(s => s.username),
    messages: messages
  });

  console.log("step 1", io);

  client.on('newuser', username => {
    console.log(`${username} has arrived at the party.`);
    client.username = username;

    users.push(client);

    io.emit('userOnline', client.username);
  });

  console.log("step 2", client);

  client.on('msg', msg => {
    let message = new ChatModel({
      username: client.username,
      msg: msg
    });

    message.save()
      .then((result) => {
        messages.push(result);
        io.emit('msg', result);
      });

    /*     message.save();
    
        messages.push(result);
    
        io.emit('msg', result); */
  });


  // Disconnect
  client.on("disconnect", () => {
    console.log(`${client.username} has left the party.`);
    io.emit("userLeft", client.username);
    users.splice(users.indexOf(client), 1);
  });
});


// Start the server

http.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port %s", process.env.PORT || 3000);
});