import React,{ useState , useEffect} from 'react'
import ImageView from './ImageView'

// requests
import GET_Request from '../../Helper/GetRequest'
import POST_Request from '../../Helper/PostRequest'

// notification
import Notification from '../Notifications/Notification'

function ViewQuestions() {
    
    const[loading, setLoading] = useState(null)

    const [questions, setQuestions] = useState(null)

    useEffect(async()=>{
        const response = await GET_Request('all')
        setQuestions(response.data.questions)
        setLoading(true)
    },[])

    return (
        loading ? (
        <div className="admin__viewquestion" style={{padding:"20px"}}>
            <div className="row">
                <div className="col-sm-2 col-12">
                    <div className="list-group" id="list-tab" role="tablist">
                        {
                            questions.map((question, index)=>{return(
                                <a className="list-group-item list-group-item-action" 
                                    id={`list-${index}-list`} data-bs-toggle="list" 
                                    href={`#list-${index}`} role="tab" 
                                    aria-controls={`#list-${index}`}>
                                        {`Level-${question.levelNumber}`}
                                </a>
                            )})
                        }
                    </div>
                </div>
                <div className="col-sm-10 col-12">
                    <div className="tab-content" id="nav-tabContent">
                        {
                            questions.map((question, index)=>{return(
                                <div className="tab-pane fade" id={`list-${index}`} 
                                    role="tabpanel" 
                                    aria-labelledby={`list-${index}-list`} >
                                <ImageView 
                                    id={question.id} 
                                    link={question.imageUrl} 
                                    levelNumber={question.levelNumber}
                                />
                                </div>
                            )})
                        }
                    </div>
                </div>
            </div>
        </div>
        ):(null)
    )
}

export default ViewQuestions
