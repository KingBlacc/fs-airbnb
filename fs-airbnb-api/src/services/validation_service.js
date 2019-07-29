const User = require('../models/user_model');

module.exports = class ValidationService {

    validateEmailAccessibility(email) {
        return User.findOne({ email: email }).then(function(result) {
            return result !== null;
        });
    }


};