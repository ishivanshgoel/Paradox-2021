const mongoose = require('mongoose')

const User = new mongoose.model(
    'user', {
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
    questionsPlayed:{
        type: Object,
        default: []
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = User