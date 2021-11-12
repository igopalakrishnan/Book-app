const express = require('express');
const app = express();
const mongoose = require('mongoose');

//connect DB
mongoose.connect(dbUrl, {})

//Routes
app.use('/api/users/register', (req, res) => {
    res.send('register Route')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})