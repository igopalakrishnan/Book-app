const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect('mongodb+srv://gopalakrishna:dLcXHZFGpnWTDqPX@cluster0.r94d2.mongodb.net/book-app?retryWrites=true&w=majority', {
        //useFindAndModify: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
        .then(() => console.log('DB Connected.......'))
        .catch(err => console.log(err));
}

module.exports = dbConnect;