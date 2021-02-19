const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAcessToken: (userId)=> {
        return new Promise((resolve, reject) => {
            const payload = {
               
            }
            const secret = 'some super secret'
            const options = {
                expiresIn = "1h",
                issuer: "paradox2021",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if(err) return reject(err)
                return resolve(token)
            })
        })
    }
}