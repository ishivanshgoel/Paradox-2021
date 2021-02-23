const express = require('express')
const router = express.Router()
const createError = require('http-errors') 
const User = require('../../Database/Models/User')
const UserValidationSchema = require('../../Database/Validation Schemas/User') 
const LoginValidationSchema = require('../../Database/Validation Schemas/Login')
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
        const refreshToken = await jwt_helper.signRefreshToken(savedUser.id)
        res.send({accessToken, refreshToken})

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
        const refreshToken = await jwt_helper.signRefreshToken(savedUser.id)
        res.send({accessToken, refreshToken})
        
    } catch(error){
        next(error)
    }

})

router.post('/refresh-token',async  function (req, res) {

    let registerSuccess = true // testing

    if(registerSuccess){
        res.send({message: 'Success'})
    } else{
        res.send({message: 'Fail'})
    }
    
})


router.get('/leaderboard', verifyAccessToken, async function (req, res, next) {
    
    let auth = true // testing
    
    if(auth){
        // send usernames and scores
        res.josn({message:'Success',data: [{
            username: 'Shivansh',
            level: 10
        },{
            username: 'Pratyush',
            level: 11
        }]})

    } else{
        res.json({message: 'Fail'})
    }
    
})


router.post('/evaluate', verifyAccessToken,async function (req, res, next) {
    
    let auth = true // testing
    
    if(auth){
        // if evaluation == true
            res.json({message:'Success',eval: true })
        // else eval : false
    } else{
        res.json({message: 'Fail'})
    }
    
})

router.get('/nextlevel', verifyAccessToken,async function (req, res, next) {
    
    let auth = true // testing
    
    if(auth){
        // send next question
        res.josn({message:'Success',data: ['123']})
    } else{
        res.json({message: 'Fail'})
    }
    
})

module.exports = router