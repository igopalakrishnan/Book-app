const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect(process.env.MONGODB_URI, {
        //useFindAndModify: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log('DB Connected.......'))
        .catch(err => console.log(err));
}

module.exports = dbConnect; 

