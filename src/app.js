const express = require('express');
const app = express();

//make a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//export the app

module.exports = app;
