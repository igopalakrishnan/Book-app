const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Book = require('../models/Book');

const bookRouter = express.Router();

bookRouter.post('/books', expressAsyncHandler(async(req, res) => {
    const book = await Book.create(req.body);

    if(book) {
        res.status(200);
        res.json(book);
    }else {
        res.status(400);
        throw new Error('Book creating failed')
    }
}))


bookRouter.get('/books', expressAsyncHandler(async(req, res) => {
    const book = await Book.find({});

    if(book) {
        res.status(200);
        res.json(book);
    }else {
        res.status(400);
        throw new Error('There is no books');
    }
}));


bookRouter.put('/:id',expressAsyncHandler(async(req, res) => {
    res.send(req.params.id);
}))


module.exports = bookRouter;