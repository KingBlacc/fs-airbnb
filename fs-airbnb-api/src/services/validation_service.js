const User = require('../models/user_model');

module.exports = class ValidationService {

    checkEmailAvailable(email) {
        return User.findOne({ email: email }).then(function(result) {
            if (result) {
                return false;
            } else {
                return true;
            }
        });
    }


};