const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAcessToken: (userId)=> {
        return new Promise((resolve, reject) => {
            const payload = {
               
            }
            const secret = process.env.TOKEN_SECRET
            const options = {
                expiresIn : '1d',
                issuer: "paradox2021",
                audience: userId
            }
            JWT.sign(payload, secret, options, (err, token) => {
                if(err){
                    console.log(err.message)
                    reject(createError.InternalServerError())
                }
                return resolve(token)
            })
        })
    },

    verifyAccessToken: (req, res, next)=>{
        
        if(!req.headers['authorization']) return next(createError.Unauthorized())

        const authHeader = req.headers['authorization']

        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        JWT.verify(token, process.env.TOKEN_SECRET, (err, payload)=>{
            if(err) {
                const message = 'JsonWebTokenError' ? 'Unauthorized' : err.message
                return next(createError.Unauthorized(message))
            }
            req.payload = payload
            next()
        } )
    }
}