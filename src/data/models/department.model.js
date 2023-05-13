const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    yearsOfStudy: {
            type: Number,
            required: true
        },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    }],
    lecturers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});




module.exports = mongoose.model('Department', departmentSchema);
