const mailHtml = require('./mailHtml')
const nodemailer = require('nodemailer')

var mailer = async (to, name)=>{

    const message = mailHtml(name)

    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })
    
    const mailoptions = {
        from: user,
        to: to,
        subject: process.env.SUBJECT,
        html: message
      }
    
    return await transporter.sendMail(mailoptions, function (error, info) {
        if (error) {
            console.log(error)
            return false
        } else {
            console.log('Email sent: ' + info.response)
            return true
        }
    })
}

module.exports = mailer