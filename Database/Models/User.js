const mongoose = require('mongoose')

const role = {
    USER : 'user',
    ADMIN : 'admin'
}

const UserSchema = new mongoose.model(
    'user', {
    username: { 
        type: String, 
        required: true,
        unique: true
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
    levelsPlayed:{
        type: Object,
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        default: role.USER
    }
});

const User = mongoose.model('user', UserSchema)

module.exports = User