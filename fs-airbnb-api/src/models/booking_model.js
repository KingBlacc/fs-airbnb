const mongoose = require('mongoose');

const BookingModel = mongoose.Schema({
    date_from: {
        type: String,
        required: true
    },
    date_to: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    property_id: {
        type: String,
        required: true
    },
    booking_status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Booking', BookingModel);