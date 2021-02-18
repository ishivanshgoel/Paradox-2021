const express = require('express')
const bodyparser = require('body-parser')
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


// middlewares
app.use(bodyparser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
const user = require('./Router/User/user')
const admin = require('./Router/Admin/admin')



app.use("/user",user)
app.use("/admin",admin)



const PORT = 5000;

app.listen(PORT,()=>{
    console.log('Express app listening at port ',PORT);
})