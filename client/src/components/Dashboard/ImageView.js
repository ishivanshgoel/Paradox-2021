import React from 'react'
import './CSS/ImageView.css'

function ImageView({ id, link }) {

    const handleSubmit = ()=>{
        alert('Handle Submit')
    }

    return (
        <div>
            <div className="row">
                <div className="container">
                    <div className="col-12 admin__imageview__image">
                        <img src={link} alt={link} />
                    </div>
                    <div className="col-12 admin__imageview__buttons">
                        <form onSubmit={handleSubmit} style={{ margin: "40px" }}>
                            <div className="mb-3">
                                <label className="form-label">Question</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" style={{ backgroundColor: "rgb(7,23,44)" }} />
                                <div className="form-text">Modify the above question</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Answer</label>
                                <input type="text" className="form-control" style={{ backgroundColor: "rgb(7,23,44)" }} />
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
