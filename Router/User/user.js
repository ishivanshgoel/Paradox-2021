const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const User = require('../../Database/Models/User')
const Question = require('../../Database/Models/Question')
const UserValidationSchema = require('../../Database/Validation Schemas/User') 
const LoginValidationSchema = require('../../Database/Validation Schemas/Login')
const EvaluateValidationSchema = require('../../Database/Validation Schemas/Evaluate')
const jwt_helper = require('./jwt_helper')
const { signAcessToken, verifyAccessToken } = require('./jwt_helper')


/**
 * @param {/login}
 * @param {/register}
 * @param {/leaderboard}
 * @param {/evaluate}
 * @param {/nextlevel} 
 * @param req.payload.aud id of user
 */

router.post('/login', async function (req, res, next) {

    try {
        const result = await LoginValidationSchema.validateAsync(req.body)
        
        const user = await User.findOne({ email: result.email })

        if (!user) throw createError.NotFound("User is not registered")

        const isMatch = await user.isValidPassword(result.password)

        if (!isMatch) throw createError.Unauthorized('Username/password not valid')

        const accessToken = await signAcessToken(user.id)
        res.send({ accessToken: accessToken,
                    id: user.id,
                    username: user.userName 
                })

    } catch (error) {
        if (error.isJoi == true) return next(createError.BadRequest("Invalid Username/Password"))
        next(error)
    }

})


router.post('/register', async function (req, res, next) {

    try {

        const result = await UserValidationSchema.validateAsync(req.body)
        const ifExists = await User.find(
            {
                $or: [
                    { userName: req.body.userName },
                    { email: req.body.email },
                    { discord: req.body.discord }
                ]
            }
        )

        if (ifExists.length > 0) throw createError.Conflict("User Already Exists")

        const newuser = new User(
            {
                name: req.body.name,
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                discord: req.body.discord,
                institutionName: req.body.institutionName
            })

        const savedUser = await newuser.save()
        const accessToken = await jwt_helper.signAcessToken(savedUser.id)
        res.send({ accessToken })

    } catch (error) {
        next(error)
    }

})

router.get('/leaderboard', verifyAccessToken, async function (req, res, next) {

    try {
        await User.find({}, { score: 1, userName: 1, _id: 1 ,lastPlayed:1 }).sort({ score: 'desc',lastPlayed:'asc' }).exec(function (err, leaderboard) {
            res.send({ leaderboard });
        })
    } catch (error) {
        next(error)
    }

})

router.get('/getuser', verifyAccessToken, async function (req, res, next){
    try{
        const user = await User.find({_id: req.payload.aud})
        res.send({user: user[0]})
    } catch(error){
        next(error)
    }
})


router.post('/evaluate', verifyAccessToken,async function (req, res, next) {
    
    try {

        if(!req.body.answer) throw createError.BadRequest('answer not found')
    
        const user = await User.findOne({_id: req.payload.aud})

        if(!user) throw createError.BadRequest('user not loggedin')
        
        const question = await Question.findOne({levelNumber: user.score+1})

        if(!question) throw createError.NotFound("Question Not Found")

        const isMatch = await question.isValidAnswer(req.body.answer.toLowerCase())

        if(isMatch){
            user.score += 1
            user.lastPlayed=Date.now();
            user.hookEnabled = false
            await user.save()
            res.send({message:'correct'}) 
        }

        else if(!isMatch) res.send({message:'wrong'})

    } catch (error) {
        next(error)
    }
    
})

router.get('/nextlevel', verifyAccessToken, async function (req, res, next) {

    try {
        const user = await User.findOne({ _id: req.payload.aud })

        const nextLevel = await Question.findOne({ levelNumber: user.score + 1 })

        if(!nextLevel) throw createError.NotFound("No Question found for this level.")
        const { imageUrl, levelNumber } = nextLevel
        res.send({
            imageUrl,
            levelNumber
        })

    } catch (error) {
        next(error)
    }

})

module.exports = router