//this will take the location of each hall and store it in the database as a location object

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Location', locationSchema);