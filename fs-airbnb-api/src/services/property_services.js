const Property = require('../models/property_model');

module.exports = class PropertyService {

    deleteUserProperties(id) {
        return Property.deleteMany({ user_id: id }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log('Failed to discard user records');
        });
    }

};