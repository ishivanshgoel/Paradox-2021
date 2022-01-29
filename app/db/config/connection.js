const mongoose = require("mongoose")

const connection = async () => {
    try {
        console.log('URI ', process.env.DB_URI)
        await mongoose.connect(process.env.DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        console.log('Connected to the Database!!')

    } catch (err) {
        console.log('Error: ', err)
        console.log('Database Connection failed!!')
    }

};

module.exports = connection