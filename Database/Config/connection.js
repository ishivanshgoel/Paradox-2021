const mongoose = require('mongoose');

const uri = process.env.DB_URI;

const connectDatabase = async () => {
    await mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useUnifiedTopology : true,
            useFindAndModify : false,
            useCreateIndex : true
        });
}

module.exports = connectDatabase