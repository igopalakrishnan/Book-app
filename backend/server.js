require('dotenv').config();
const path = require('path');
const express = require('express');
const routes = require('./routes/userRoutes');
const error = require('./middleware/errorMiddleware');
const bookRouter = require('./routes/bookRoutes');
require('./config/dbConnect')();
const app = express();

//Routes
app.use(express.json());

app.use('/api/users', routes.userRouter);
app.use('/api/books', bookRouter.bookRouter);


const __dirname2 = path.resolve();
app.use('/uploads', express.static(path.join(__dirname2, '/uploads')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname2, '/frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname2, 'frontend', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}
//====Catch Error
app.use(error.notfoundErrorMiddleware);
app.use(error.errorMiddlewareHandler);

//End of deployment
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});