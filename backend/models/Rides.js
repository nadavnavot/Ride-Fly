const mongoose = require('mongoose');



// Defining Schema
const ridesSchema = new mongoose.Schema({
    departure_location: { type: String, required: true, trim: true },
    departure_time: { type: String, required: true, trim: true },
})

// Model 
const RidesModel = mongoose.model("rides", ridesSchema)

module.exports = RidesModel