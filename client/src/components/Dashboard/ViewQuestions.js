import React from 'react'
import ImageView from './ImageView'

function ViewQuestions() {

    const questions = [
        {
            id:"123",
            link: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        },
        {
            id:"124",
            link: "https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252__340.jpg",
        },
        {
            id:"125",
            link: "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
        }
    ]

    return (
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
                                        {`Level-${index+1}`}
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
                                    link={question.link} 
                                />
                                </div>
                            )})
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuestions
