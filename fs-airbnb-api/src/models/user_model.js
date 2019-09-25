const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const salt_rounds = 10;

const UserModel = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cell_number: {
        type: String,
        required: true 
    },
    gender: {
        type: String
    },
    birth_date: {
        type: String 
    },
    user_type: {
        type: String,
        required: true
    } 
});

UserModel.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt_rounds);
    next();
});

module.exports = mongoose.model('Users', UserModel);      