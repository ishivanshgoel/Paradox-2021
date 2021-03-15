const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('../../Database/Models/User')
const Question = require('../../Database/Models/Question')
const validateAdmin = require('./validateAdmin')
const LoginValidationSchema = require('../../Database/Validation Schemas/Login')

/**
 * @param {/login} 
 * @param {/details} 
 * @param {/update}
 * @author ishivanshgoel
 */

// define the home page route
router.post('/login', validateAdmin ,async function (req, res, next) { 
  
    try {
        const result = await LoginValidationSchema.validateAsync(req.body)
        const user = await User.findOne({ email: result.email })

        if (!user) throw createError.NotFound("User is not registered")

        const isMatch = await user.isValidPassword(result.password)

        if (!isMatch || !user.role == 'admin') throw createError.Unauthorized('Username/password not valid')

        res.send(true)

    } catch (error) {
        if (error.isJoi == true) return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }

})

router.get('/details', validateAdmin ,function (req, res) {
    
    let auth = true // testing
    
    if(auth){
        res.josn({message:'Success',data: ['123','234']})
    } else{
        res.json({message: 'Fail'})
    }
    
})

router.post('/update', validateAdmin, function (req, res) {
    
    let auth = true // testing
    
    if(auth){

        // read the field name and the field data to be updated from request body
        // if(update==success)
            res.josn({message:'Success'})
        // else send 'Fail'

    } else{
        res.json({message: 'Fail'})
    }
    
})



module.exports = router