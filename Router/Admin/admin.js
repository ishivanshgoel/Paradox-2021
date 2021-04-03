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

router.post('/login', validateAdmin, async function (req, res, next) {

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

router.get('/getall', validateAdmin, async function (req, res, next) {

    try {
        
        await Question.find({}, { _id: 1, imageUrl: 1, levelNumber: 1 }).exec(function (err, questions) {
            res.send({ questions });
        })
        
    } catch (error) {
        next(error)
    }

})

router.post('/add', validateAdmin, async function (req, res, next) {

    try {

        if (!req.body.imageUrl || !req.body.answer || !req.body.levelNumber) throw createError.BadRequest()

        const ifExists = await Question.find(
            {
                levelNumber: req.body.levelNumber
            }
        )
        // console.log(ifExists)

        if (ifExists.length > 0) throw createError.Conflict(`Level ${req.body.levelNumber} is already assigned to another question.`)

        const question = new Question({
            imageUrl: req.body.imageUrl,
            answer: req.body.answer.toLowerCase(),
            levelNumber: req.body.levelNumber
        })

        const savedQuestion = await question.save()

        res.send({ message: "Saved" })
    } catch (error) {
        next(error)
    }

})

router.post('/update', validateAdmin, async function (req, res, next) {

    // incoming request can only contain new answer not the current answer (coz. password is not being rendered on client side from any of the routes)
    // so the incoming request body may or may not contain answer field
    // but having levelNumber is must
    try {
        if (!req.body.levelNumber) throw createError.BadRequest()
    
        let question = await Question.find(
            {
                levelNumber: req.body.levelNumber
            }
        )
        
        // not found or multiple questions found with same level
        if (question.length == 0 || question.length > 1 ) throw createError.Conflict(`Cannot Update Level ${req.body.levelNumber}`)

        // first element from the array
        question = question[0]

        if(req.body.answer){
            // hookEnabled field will be true by default
            // keep it true as we want to hash the answer again before saving.
            question.answer = req.body.answer.toLowerCase()
            await question.save()
        }

        if(req.body.imageUrl){
            // here hookEnabled is false to prevent already existing answer to re-hash itself before save
            question.imageUrl = req.body.imageUrl
            question.hookEnabled = false
            await question.save()
        }

        res.send({message:"Updated Successfully"})

    } catch (error) {
        next(error)
    }

})
module.exports = router