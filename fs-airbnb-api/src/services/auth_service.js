const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const validation = require('../services/validation_service');
const bcrypt = require('bcrypt');


module.exports = class AuthService {

    register(user) {
        return new Promise((resolve, reject) => {
            validation.prototype.validateEmailAccessibility(user.email)
                .then(valid => {
                    reject("This email has already been assigned to a user");
                });

            const new_user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                cell_number: req.body.cell_number,
                user_type: req.body.user_type
            });

            new_user.save().then(data => {
                res.json({ msg: 'User has been added successfully' });
            }).catch(err => {
                res.json({ msg: err });
            });
        });
    }

    login(user) {
        return new Promise((resolve, reject) => {

            User.findOne({ email }).then((res, err) => {
                if (bcrypt.compareSync(pass)) {

                }
            });
        });
    }

};