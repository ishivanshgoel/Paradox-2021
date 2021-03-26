import React, {useState} from 'react'

// Requests
import POST_Request from '../../Helper/PostRequest'


/**
 * @author ishivanshgoel
 */

function AddQuestion() {

    const[image, setImage] = useState(null)
    const[answer, setAnswer] = useState(null)
    const[level, setLevel] = useState(null)

    let handleSubmit = async (event) =>{
        event.preventDefault()
        const response = await POST_Request('add', {
            imageUrl: image,
            answer: answer,
            levelNumber: level
        })
        if(response.data && response.data.message==="Saved"){
            alert('Success: Request Fulfilled')
        } else{
            alert('Error ' + response)
        } 
    }

    return (
        <div className="admin__addquestion">
            <form onSubmit={handleSubmit} style={{margin:"60px"}}>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" style={{backgroundColor:"rgb(7,23,44)"}} onChange={(event)=>setImage(event.target.value)}/>
                    <div className="form-text">Link of the Image.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Answer</label>
                    <input type="text" className="form-control" style={{backgroundColor:"rgb(7,23,44)"}} onChange={(event)=>setAnswer(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Level</label>
                    <input type="text" className="form-control" style={{backgroundColor:"rgb(7,23,44)"}} onChange={(event)=>setLevel(event.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(7,23,44)"}} >Add</button>
            </form>
        </div>
    )
}

export default AddQuestion
