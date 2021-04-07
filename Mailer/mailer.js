const mailHtml = require('./mailHtml')
const nodemailer = require('nodemailer')

var mailer = async (to, name)=>{

    const message = mailHtml(name)
    const user = 'admin@paradox21.tech'
    const pass = 'dNkky$B5'

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    })
    
    const mailoptions = {
        from: user,
        to: to,
        subject: 'PARADOX 2021 - Registration Successful!',
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