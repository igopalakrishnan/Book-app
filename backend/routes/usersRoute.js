const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const User = require('../models/User');


router.post('/users/register', expressAsyncHandler(
    async (req, res) => {

        const { name, email, password } = req.body;


        const userExists = await User.findOne({ email: email });

        if (userExists) {
            throw new Error('User Exists');
        }

        const userCreated = await User.create({
            name,
            email,
            password
        });
        res.send(userCreated);
    }
));


router.post('/login', (req, res) => {

    res.send('login');
})

module.exports = router;