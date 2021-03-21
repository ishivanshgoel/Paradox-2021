import React from 'react'
import './CSS/Loader.css'
import loaderlogo from "../logos/loaderimage.png";


function Loader() {
    return (
        <div className="loader">
            <div id="particles-background" className="vertical-centered-box"></div>
            <div id="particles-foreground" className="vertical-centered-box"></div>

            <div className="vertical-centered-box">
                <div className="content">
                <div className="loader-circle"></div>
                <div className="loader-line-mask">
                    <div className="loader-line"></div>
                </div>
                <img className="loader-image" src={loaderlogo} width="60" height="60" />
                </div>
            </div>
        </div>
    )
}

export default Loader
