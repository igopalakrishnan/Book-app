const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dbConnect = require('./Config/dbConnect');
const error = require('./middleware/errorHandler');

//connect DB
dbConnect();


const usersRoutes = require('./routes/usersRoute');

//middleware
app.use(express.json());
app.use(error.errorHandler);

//Routes
app.use('/api', usersRoutes);


//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

