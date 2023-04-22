const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../data/models/user.model');

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });

        // If user not found, return error
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if password matches hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        // If password doesn't match, return error
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If authentication successful, create JWT token
        const payload = {
            user: {
                id: user._id,
                role: user.role
            }
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const signup = async (req, res) => {
    const { firstName, lastName, email, password, faculty, department, role } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Create user object
    const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        faculty,
        department,
        role
    });
    
    try {
      // Save user to database
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user' });
    }
    };

module.exports = {
    login,
    signup
}
