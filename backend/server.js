const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConnect = require('./Config/dbConnect');

//connect DB
dbConnect();


//Routes
app.use('/api/users/register', (req, res) => {
    res.send('register Route')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//dLcXHZFGpnWTDqPX