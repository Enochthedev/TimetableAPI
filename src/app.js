const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import database
const connectDB = require('./data/db');

// Import routes
const authRoutes = require('./routes/auth.route');

// Use middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to database
connectDB();

// Use routes
app.use('/api/auth', authRoutes);

// Export the app
module.exports = app;
