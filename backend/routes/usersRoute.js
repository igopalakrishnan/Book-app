const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const User = require('../models/User');


router.post('/users/register', asyncHandler(
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


router.post('/login', asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
        res.status(200);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);

        throw new Error('Invalid Credentials')
    }

}));

module.exports = router;