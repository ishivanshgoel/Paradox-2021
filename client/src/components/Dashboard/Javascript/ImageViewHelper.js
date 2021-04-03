/**
 * Helper functions for ImageView Component
 * @author ishivanshgoel
 */

// check if the entered value is null
const checkNull = (str)=>{
    if(str === null || str === ' ' || str === '') return true
    return false
}

// generate message for state variables
const changeMessage = (change)=>{
    if(checkNull(change)){
        return "No Change"
    } else {
        return change
    }
}

// data to be send in API request
const apiData = (question, answer, levelNumber)=>{

    let data = {
        levelNumber: levelNumber
    }

    if(!checkNull(question)){
        data = {
            ...data,
            imageUrl: question
        }
    }
    if(!checkNull(answer)){
        data = {
            ...data,
            answer: answer
        }
    }
    return data
}

export default { }
export { changeMessage, apiData }
