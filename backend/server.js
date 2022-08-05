const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dbConnect = require('./Config/dbConnect');
const error = require('./middleware/errorHandler');

dotenv.config();

//connect DB
dbConnect();


const usersRoutes = require('./routes/usersRoute');
const bookRouter = require('./routes/bookRoutes');

//middleware
app.use(express.json());

//ErrorCatch
app.use(error.errorMiddlewareHandler);

//Routes
app.use('/api', usersRoutes);
app.use('/api', bookRouter)


//port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

