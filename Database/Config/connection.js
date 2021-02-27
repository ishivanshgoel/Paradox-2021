const mongoose = require('mongoose');

// database credentials
const credentials = require('./credentials.json')

const username = credentials.username
const password = credentials.password

// name of the collection
const collection = credentials.collection

const uri = `mongodb+srv://${username}:${password}@cluster0.oinug.mongodb.net/${collection}?retryWrites=true&w=majority`;


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