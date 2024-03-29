const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const role = {
    USER : 'user',
    ADMIN : 'admin'
}

/**
 * @param hookEnabled if true then invoke 'save' middleware
 */

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true,
    },
    userName: { 
        type: String, 
        required: true,
        unique: true,
        lowecase: true
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowecase: true
    },
    password:{
        type: String,
        require: true
    },
    discord: {
        type: String,
        require: true,
        unique: true
    },
    institutionName: {
        type: String,
        require: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    score: {
        type: Number,
        default: 0
    },
    lastPlayed: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: role.USER
    },
    hookEnabled: {
        type: Boolean,
        default: true
    }
});

UserSchema.pre('save',async function(next){

    if(!this.hookEnabled){
        this.hookEnabled = true
        next()
    }

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch(error){
        next(error)
    }

})

UserSchema.methods.isValidPassword = async function (password) {

    try{
        return await bcrypt.compare(password, this.password)
    } catch(error){
        throw(error)
    }
    
}

const User = mongoose.model('user', UserSchema)

module.exports = User