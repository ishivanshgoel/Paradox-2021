const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const createErrors = require('http-errors')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const connection = require('./app/db/config/connection')
const user = require('./app/routes/user/user')
const admin = require('./app/routes/admin/admin')
const path = require('path')
const app = express()


//connect to database
connection()
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected to database!!')
});
db.on('disconnected', ()=>{
    console.log('Mongoose connection is disconnected')
})

process.on('SIGINT', async ()=>{
    await db.close()
    process.exit(0)
})


// middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors())

//static
app.use(express.static(path.join(__dirname, 'client/build')));

// logs
app.use(morgan('dev'))


app.use("/userServer",user)
app.use("/adminServer",admin)

// Routes

app.get("/*", (req, res) => {
    console.log("Serve static")
    res.sendFile(path.join(__dirname, '.' ,"/client/build", "index.html"));
});

// not found route
app.use(async (req, res, next)=>{
    next(createErrors.NotFound())
})


// error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log('Express app listening at port ',PORT);
})