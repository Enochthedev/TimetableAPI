//this is the lecturehall model

const mongoose = require('mongoose');

const lectureHallSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('LectureHall', lectureHallSchema);