import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

// compponents
import AddQuestion from './AddQuestion'
import ViewQuestions from './ViewQuestions'

/**
 * @author ishivanshgoel
 */

function Dashboard() {

    const admin = useSelector((state) => state.admin)
    
    const history = useHistory()

    if (admin)
        return (
            <div className="admin__dashboard" style={{ margin: "20px" }}>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" data-bs-toggle="tab" 
                            data-bs-target="#viewquestions" type="button" role="tab" 
                            aria-controls="viewquestions" aria-selected="true" 
                            style={{color:"rgb(104,199,229)", background:"rgb(7,23,44)", border:"2px solid white"}}>View</button>
                        <button className="nav-link" data-bs-toggle="tab" 
                        data-bs-target="#addquestions" type="button" role="tab" 
                        aria-controls="addquestions" aria-selected="false" 
                        style={{color:"rgb(104,199,229)", background:"rgb(7,23,44)", border:"2px solid white"}}>Add</button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="viewquestions" role="tabpanel" aria-labelledby="nav-home-tab">
                        <ViewQuestions />
                    </div>
                    <div className="tab-pane fade" id="addquestions" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <AddQuestion />
                    </div>
                </div>
            </div>
        )

    history.push('/admin')
    return null
}

export default Dashboard
