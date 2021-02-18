const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connection = require('./Database/Config/connection')


//connect to database
connection()
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to database!!')
});









const PORT = 5000;

app.listen(PORT,()=>{
    console.log('Express app listening at port ',PORT);
})