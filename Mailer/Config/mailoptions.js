const mailOptions = ({from, to, subject, html}) =>{ 
    return {
        from: from,
        to: to,
        subject: subject,
        html: html
  }
}

module.exports = mailOptions