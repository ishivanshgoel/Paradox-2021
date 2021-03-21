import React from 'react'
import './CSS/Loader.css'
import loaderlogo from "../logos/loaderimage.png";


function Loader() {
    return (
        <div className="loader">
            <div className="spinner-border text-light" style={{ width: "5rem", height: "5rem" }} role="status">
            </div>
        </div>
    )
}

export default Loader
