const express = require('express')
const router = express.Router()
const createError = require('http-errors') 
const User = require('../../Database/Models/User')
const Question = require('../../Database/Models/Question')
const UserValidationSchema = require('../../Database/Validation Schemas/User') 
const LoginValidationSchema = require('../../Database/Validation Schemas/Login')
const EvaluateValidationSchema = require('../../Database/Validation Schemas/Evaluate')
const jwt_helper = require('./jwt_helper')
const { signAcessToken, verifyAccessToken, signRefreshToken } = require('./jwt_helper')


/**
 * @param {/login}
 * @param {/register}
 * @param {/leaderboard}
 * @param {/evaluate}
 * @param {/nextlevel} 
 */

router.post('/login', async function (req, res, next) {

    try{
        const result = await LoginValidationSchema.validateAsync(req.body)
        const user = await User.findOne({email: result.email})

        if(!user) throw createError.NotFound("User is not registered")

        const isMatch = await user.isValidPassword(result.password)

        if(!isMatch) throw createError.Unauthorized('Username/password not valid')

        const accessToken = await signAcessToken(user.id)
        res.send({accessToken})

    } catch(error){
        if(error.isJoi == true) return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }

})


router.post('/register',async  function (req, res, next) {

    try{

        const result = await UserValidationSchema.validateAsync(req.body)

        const ifExists = await User.find(
            {$or:[
                {userName: req.body.userName},
                {email: req.body.email},
                {discord: req.body.discord}
            ]}
        )
        
        if(ifExists.length > 0) throw createError.Conflict(`${req.body.email} or ${req.body.userName} or ${req.body.discord} is already registered with another account`)

        const newuser = new User(
            {
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                discord: req.body.discord,
                institutionName: req.body.institutionName
            })

        const savedUser = await newuser.save()
        const accessToken = await jwt_helper.signAcessToken(savedUser.id)
        res.send({accessToken})
        
    } catch(error){
        next(error)
    }

})


router.get('/leaderboard', verifyAccessToken, async function (req, res, next) {
    
    /**
     * Send back the scores of all the users with their usernames
     */
    
})


router.post('/evaluate', verifyAccessToken,async function (req, res, next) {
    
    try {
        const result = await EvaluateValidationSchema.validateAsync(req.body)
        const question = await Question.findOne({id: result.id})

        if(!question) throw createError.NotFound("Question id is invalid")

        const isMatch = await user.isValidAnswer(result.answer)

        if(isMatch) res.send({message:'true'}) 

        else if(!isMatch) res.send({message:'false'})

    } catch (error) {
        next(error)
    }
    
})

router.get('/nextlevel', verifyAccessToken,async function (req, res, next) {
    
    
})

module.exports = router