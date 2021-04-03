import React,{ useState } from 'react'
import './CSS/ImageView.css'

// Helper
import  { changeMessage, apiData } from './Javascript/ImageViewHelper'

// Request
import POST_Request from '../../Helper/PostRequest'

// Notification
import Notification from '../Notifications/Notification'

// loading screen
import LoaderHook from '../Loader/LoaderHook'

function ImageView({ id, link, levelNumber }) {

    const [newAnswer, setNewAnswer] = useState(null)
    const [newQuestion, setQuestion] = useState(null)

    // loading screen
    const [loading, setLoading, hideLoading] = LoaderHook()

    const handleSubmit = async (event)=>{
        event.preventDefault()

        let questionMessage = changeMessage(newQuestion)
        let answerMessage = changeMessage(newAnswer)
        const check = window.confirm(`New Question: ${questionMessage}\nNew Answer: ${answerMessage}\n\nPress OK to confirm`)

        if(check === true){
            setLoading(true)
            const data = apiData(newQuestion, newAnswer, levelNumber)
            console.log(data)
            const response = await POST_Request('update', data)
            if(response.data.message==="Updated Successfully"){
                Notification('Success', 'Modified', 'success')
            }
            else Notification('Error', 'Some Error Occured', 'warning')
            hideLoading(false)
        }

    }

    return (
        <div id={`paradox-question-${id}-levelNumber-${levelNumber}`}>
            {loading}
            <div className="row">
                <div className="container">
                    <div className="col-12 admin__imageview__image">
                        <img src={link} alt={link} style={{height: "400px",
                                                            width: "400px",
                                                            "-o-object-fit": "contain"}} />
                    </div>
                    <div className="col-12 admin__imageview__buttons">
                        <form onSubmit={handleSubmit} style={{ margin: "40px" }}>
                            <div className="mb-3">
                                <label className="form-label">Question</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" style={{ backgroundColor: "rgb(7,23,44)" }} onChange={(event)=>setQuestion(event.target.value)} />
                                <div className="form-text">Modify the above question</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Answer</label>
                                <input type="text" className="form-control" style={{ backgroundColor: "rgb(7,23,44)" }} onChange={(event)=>setNewAnswer(event.target.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ backgroundColor: "rgb(7,23,44)" }}>Modify</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageView
