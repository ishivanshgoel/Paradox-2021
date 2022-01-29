const createError = require('http-errors')

// secret admin token
const ADMINTOKEN = process.env.ADMIN_TOKEN

const validateAdmin = async (req, res, next)=>{
    
    if(!req.headers['authorization']) return next(createError.Unauthorized())

    const authHeader = req.headers['authorization'].split(' ')
    
    if(authHeader[1] === ADMINTOKEN)
        next()
    else return next(createError.Unauthorized())
}

module.exports = validateAdmin