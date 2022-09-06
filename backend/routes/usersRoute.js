const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middleware/authMiddleware');
const userRouter = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/generateToken');


userRouter.post('/users/register', asyncHandler(
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
        res.json({
            _id: userCreated._id,
            name: userCreated.name,
            email: userCreated.email,
            password: userCreated.password,
            token: generateToken(userCreated._id)
        })
    }
));


userRouter.post('/login', asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
        res.status(200);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);

        throw new Error('Invalid Credentials')
    }

}));

userRouter.put(
    '/update',
    authMiddleware,
    expressAsyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password || user.password;
            }

            const updatedUser = await user.save();

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                token: generateToken(updatedUser._id),
            });
        }
    })
);


userRouter.delete('/:id', (req, res) => {
    res.send('Delete route');
});


userRouter.get(
    '/',
    authMiddleware,
    expressAsyncHandler(async (req, res) => {
        const users = await User.find({});

        if (users) {
            res.status(200).json(users);
        } else {
            res.status(500);

            throw new Error('No users found at the moment');
        }
    })
);


userRouter.get('/profile', authMiddleware, asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate(
                'books'
            );

        if (!user) throw new Error("You don't have any profile yet")

        res.status(200)
        res.send(user);
    } catch (error) {
        res.status(500)
        throw new Error('server')
    }
}))


module.exports = userRouter;