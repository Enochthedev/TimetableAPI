const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../data/models/user.model');
const Department = require('../data/models/department.model');
require('dotenv').config();

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });

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

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

const signup = async (req, res) => {
    const { firstName, lastName, email, password, faculty, department, role } = req.body;
    const roleLower = role.toLowerCase();
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //if admin role, skip the department check
    if(roleLower === 'admin') {
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            faculty,
            roleLower
        });
        try {
            // Save user to database
            await user.save();
            res.status(201).json({ message: 'Admin User created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to create user' });
        }
        return;
    }
    // Check if department exists
    const existingDepartment = await Department.findOne({ _id: department });
    if (!existingDepartment) {
        return res.status(400).json({ message: 'Department does not exist' });
    }

    // Create user object
    const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        faculty,
        department,
        roleLower
    });
    
    try {
      // Save user to database
        await user.save();
        //add user to department
        await Department.updateOne(
            { _id: department },
            { $push: { users: user._id } }
        );
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user' });
    }
    
};

module.exports = {
    login,
    signup
}
