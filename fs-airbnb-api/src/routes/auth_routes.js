const express = require('express');
const router = express.Router();
const authService = require('../services/auth_service');

//User login
router.post('/login', (req, res) => {
    authService.prototype.login(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json("Error");
    });
});

router.post('/register', (req, res) => {
    authService.prototype.register(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.json("Error");
    });
});

module.exports = router;