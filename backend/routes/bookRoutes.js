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
    
    const book = await Book.findById(req.params.id);

    if(book) {

        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200);
        res.send(updatedBook);
    }else {
        res.status(500);
        throw new Error('Update failed');
    }
}));


bookRouter.delete('/:id', expressAsyncHandler(async(req, res) => {
    
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        res.status(200);
        res.send(deletedBook);
        
    } catch (error) {
        res.json(error)
        
    }
}))


module.exports = bookRouter;