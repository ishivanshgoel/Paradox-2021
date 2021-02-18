const mongoose = require('mongoose')

const role = {
    USER : 'user',
    ADMIN : 'admin'
}

const User = new mongoose.model(
    'user', {
    username: { 
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true
    },
    password:{
        type: String,
        require: true
    },
    discord: {
        type: String,
        require: true
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

module.exports = User