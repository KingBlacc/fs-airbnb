const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
const body_parser = require('body-parser');

require('dotenv/config');

//Middleware to ensure that whenever a request is made, a body parser is ran
app.use(body_parser.json());
app.use(cors());

//Middleware to connect to Routes
app.use('/api/users', require('./src/routes/user_routes'));
app.use('/api/properties', require('./src/routes/property_routes'));
app.use('/api/bookings', require('./src/routes/booking_routes'));

//Connection to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Successfully connected to Database'));

//Set Serve to listen on
app.listen(6063);