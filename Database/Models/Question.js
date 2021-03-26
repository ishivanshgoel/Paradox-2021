const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const QuestionSchema = new mongoose.Schema({
    imageUrl: { 
        type: String, 
        required: true
    },
    answer: { 
        type: String, 
        required: true,
        lowecase: true
    },
    levelNumber: {
        type: Number,
        required: true
    }
});

QuestionSchema.pre('save',async function(next){

    try{
        const salt = await bcrypt.genSalt(10)
        const hashedAnswer = await bcrypt.hash(this.answer, salt)
        this.answer = hashedAnswer
        next()
    } catch(error){
        next(error)
    }

})

QuestionSchema.methods.isValidAnswer = async function (answer) {

    try{
        return await bcrypt.compare(answer, this.answer)
    } catch(error){
        throw(error)
    }
    
}

const Question = mongoose.model('question', QuestionSchema)

module.exports = Question