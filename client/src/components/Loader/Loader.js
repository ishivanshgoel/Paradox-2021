import React from 'react'
import './CSS/Loader.css'


function Loader({message}) {
    return (
        <div className="loader">
            <div className="spinner-border text-light" style={{width: "3rem", height: "3rem"}} role="status">
            </div>
            <div style={{margin:"30px"}}> 
                <h4>{message}...</h4>
            </div>
        </div>
    )
}

export default Loader
