import React from 'react'

function AddQuestion() {

    let handleSubmit = (event) =>{
        event.preventDefault()
        alert('Request to add new question')
    }

    return (
        <div className="admin__addquestion">
            <form onSubmit={handleSubmit} style={{margin:"40px"}}>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp" style={{backgroundColor:"rgb(7,23,44)"}} />
                    <div className="form-text">Link of the Image.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Answer</label>
                    <input type="password" className="form-control" style={{backgroundColor:"rgb(7,23,44)"}} />
                </div>
                <button type="submit" className="btn btn-primary" style={{backgroundColor:"rgb(7,23,44)"}}>Add</button>
            </form>
        </div>
    )
}

export default AddQuestion
