const mongoose = require('mongoose');

const PropertyModel = mongoose.Schema({
    property_name: {
        type: String,
        required: true
    },
    property_location: {
        type: String,
        required: true
    },
    property_price: {
        type: Number,
        required: true
    },
    property_image_url: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }, 
    bedroom_count: {
        type: Number,
        required: true
    },
    bathroom_count: {
        type: Number,
        required: true
    }, 
    garage_count: {
        type: Number,
        required: true
    },
    minimum_stays:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Properties', PropertyModel); 