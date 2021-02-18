const express = require('express')
const router = express.Router()

/**
 * @param {/login} 
 * @param {/details} 
 * @param {/update}
 */

// define the home page route
router.post('/login', function (req, res) {
  
    let auth = false // testing

    if(auth){
        res.json({message: 'Success'})
    } else{
        res.json({message: 'Fail'})
    }

})

router.get('/details', function (req, res) {
    
    let auth = true // testing
    
    if(auth){
        res.josn({message:'Success',data: ['123','234']})
    } else{
        res.json({message: 'Fail'})
    }
    
})

router.post('/update', function (req, res) {
    
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