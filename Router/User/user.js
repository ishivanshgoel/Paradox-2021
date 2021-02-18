const express = require('express')
const router = express.Router()

/**
 * @param {/login}
 * @param {/register}
 * @param {/leaderboard}
 * @param {/evaluate}
 * @param {/nextlevel} 
 */

// define the home page route
router.post('/login', function (req, res) {

    let auth = false // testing

    if(auth){
        res.send({message: 'Success'})
    } else{
        res.send({message: 'Fail'})
    }

  
})
// define the about route
router.post('/register', function (req, res) {

    let registerSuccess = true // testing

    if(registerSuccess){
        res.send({message: 'Success'})
    } else{
        res.send({message: 'Fail'})
    }
    
})


router.get('/leaderboard', function (req, res) {
    
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


router.post('/evaluate', function (req, res) {
    
    let auth = true // testing
    
    if(auth){
        // if evaluation == true
            res.josn({message:'Success',eval: true })
        // else eval : false
    } else{
        res.json({message: 'Fail'})
    }
    
})

router.get('/nextlevel', function (req, res) {
    
    let auth = true // testing
    
    if(auth){
        // send next question
        res.josn({message:'Success',data: ['123']})
    } else{
        res.json({message: 'Fail'})
    }
    
})

module.exports = router