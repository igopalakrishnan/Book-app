const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = () => {

    mongoose.connect(process.env.MONGODB_URI, {
        //useFindAndModify: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log('Database Connected.......'.cyan.bold))
        .catch(err => console.log(err));
}

module.exports = connectDB; 

