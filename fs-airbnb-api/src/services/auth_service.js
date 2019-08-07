const express = require("express");
const router = express.Router();
const User = require("../models/user_model");
const validation = require("../services/validation_service");
const bcrypt = require("bcrypt");

module.exports = class AuthService {
    register(user) {
        return new Promise((resolve, reject) => {
            validation.prototype.checkEmailAvailable(user.email).then(valid => {
                if (valid) {
                    reject("This email has already been assigned to a user");
                } else {
                    const new_user = new User({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        password: user.password,
                        cell_number: user.cell_number,
                        user_type: user.user_type
                    });

                    new_user
                        .save()
                        .then(data => {
                            resolve(data._id);
                        })
                        .catch(err => {
                            resolve(err);
                        });
                }
            });
        });
    }

    login(user) {
        return new Promise((resolve, reject) => {
            let email = user.email;
            User.findOne({ email }).then((res, err) => {
                if (res) {
                    if (bcrypt.compareSync(user.password, res.password)) {
                        resolve(res._id);
                    } else {
                        reject("Password incorrect");
                    }
                } else {
                    reject("User not found");
                }
            });
        });
    }
};