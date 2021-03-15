import React from 'react'
import './CSS/ImageView.css'

function ImageView({id, link}) {
    return (
        <div>
            <div className="row">
                <div className="container">
                    <div className="col-12 admin__imageview__image">
                        <img src={link} alt={link} />
                    </div>
                    <div className="col-12 admin__imageview__buttons">
                        <button id={id}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageView
