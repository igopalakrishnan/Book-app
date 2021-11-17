const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.use('/users/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await User.create({
            name,
            email,
            password
        });

        console.log(user);

        res.send(user);
    } catch (error) {
        console.log(error);

    }
})

module.exports = router;