const nodemailer = require('nodemailer')
const transporterConfig = require('./Config/transporter')

const transporter = nodemailer.createTransport(transporterConfig)

var mailer = (mailOptions)=>{
    return transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            reject(error)
        } else {
            resolve('Email sent: ' + info.response)
        }
    })
}

module.exports = mailer