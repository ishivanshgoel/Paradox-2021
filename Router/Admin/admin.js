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

router.post('/add', validateAdmin ,async function (req, res, next) {
    
    try{

        if(!req.body.imageUrl || !req.body.answer || !req.body.levelNumber) throw createError.BadRequest()

        const ifExists = await Question.find(
            {
               levelNumber: req.body.levelNumber
            }
        )
        console.log(ifExists)

        if(ifExists.length > 0) throw createError.Conflict(`Level ${req.body.levelNumber} is already assigned to another question.`)

        const question = new Question({
            imageUrl: req.body.imageUrl,
            answer: req.body.answer.toLowerCase(),
            levelNumber: req.body.levelNumber
        })

        const savedQuestion = await question.save()

        res.send({message: "Saved"})
    } catch (error){
        next(error)
    }

})

router.post('/update', validateAdmin, async function (req, res, next) {
    
    try{

        res.send(true)


    } catch(error){
        next(error)
    }
    
})



module.exports = router