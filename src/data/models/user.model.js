const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'lecturer', 'student'],
        required: true
    },
    // Additional fields for specific roles
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: function() {
        return this.role === 'student';
        }
    }],
    assignedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: function() {
        return this.role === 'lecturer';
        }
    }],
    assignedTitle: {
        type: String,
        required: function() {
        return this.role === 'lecturer';
        }
    },
    // Additional fields for all roles
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
