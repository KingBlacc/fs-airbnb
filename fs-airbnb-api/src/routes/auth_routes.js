const express = require('express');
const router = express.Router();
const authService = require('../services/auth_service');

//User login
router.post('/login', (req, res) => {
    authService.prototype.login(req.body).then(data => {
        res.json({ msg: 'User has logged in successfully' });
    }).catch(err => {
        res.json({ msg: err });
    });
});

router.post('/register', (req, res) => {
    authService.prototype.register(req.body).then(data => {
        res.json({ msg: 'User has been added successfully' });
    }).catch(err => {
        res.json({ msg: err });
    });
});

module.exports = router;