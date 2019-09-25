const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const PropertyService = require('../services/property_services');

//Get all users
router.get('/', async(req, res) => {
    const users = await User.find();
    res.json(users);
});

//Get a specific user by id
router.get('/:id', async(req, res) => {

    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.json({ msg: 'Unknown Id' });
    }
});

//create user
router.post('/', (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        cell_number: req.body.cell_number,
        gender: req.body.gender,
        birth_date: req.body.birth_date,
        user_type: req.body.user_type
    });

    user.save().then(data => {
        res.json({ msg: 'User has been added successfully' });
    }).catch(err => {
        res.json({ msg: err });
    });
});

//update user
router.put('/:id', async(req, res) => {
    try {
        const _user = await User.updateOne({ _id: req.params.id }, 
        { $set: { email: req.body.email,
        cell_number: req.body.cell_number,
        gender: req.body.gender,
        birth_date: req.body.birth_date,
        first_name: req.body.first_name,
        last_name: req.body.last_name } });
        res.json({ msg: "User was updated successfully" });
    } catch (err) {
        res.json({ msg: "Failed to update the requested profile" })
    }
});

//delete user
router.delete('/:id', async(req, res) => {

    User.deleteOne({ _id: req.params.id }).then(
            () => PropertyService.prototype.deleteUserProperties(req.params.id)
            .then(() =>
                res.json({ msg: 'user was deleted' })
            ).catch(() => {
                res.json({ msg: 'Failed to delete user content' })
            }))
        .catch(() => res.json({ msg: 'Unable to delete user' }));
});
module.exports = router;