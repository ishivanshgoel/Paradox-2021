import React from 'react'
import './homepage.css'

function Homepage() {
    return (
        <div>
            <svg viewBox="0 0 3500 500" className="paradox ">
                <text x="50%" y="50%" fill="transparent" text-anchor="middle">PARADOX</text>
            </svg>
            <div className="button-outer-box d-flex justify-content-center">
                <button className="btn  mx-5 my-3 px-5 py-2 homebtn">SIGNUP</button>
                <button className="btn  mx-5 my-3 px-5 py-2 homebtn">REGISTER</button>
                <button className="btn  mx-5 my-3 px-5 py-2 homebtn">DISCORD</button>
            </div>
            <div className="about-section">
                <h1>ABOUT</h1>
            </div>
        </div>
    )
}

export default Homepage
