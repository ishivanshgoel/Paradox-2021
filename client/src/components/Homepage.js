import React from 'react'
import { useHistory } from 'react-router-dom'
import './homepage.css'


/**
 * @author TejasV58
*/

function Homepage() {

    const history = useHistory()

    let handleRedirect = (event) => {
        history.push(`/${event.target.name}`)
    }

    return (
        <div className="row">
            <div class="col-12">
                <svg viewBox="0 0 3500 500" className="paradox ">
                    <text x="50%" y="50%" fill="transparent" text-anchor="middle">PARADOX</text>
                </svg>
                <div className="button-outer-box d-flex justify-content-center">
                    <div class="col-md-2 col-lg-2">
                        <button class="btn homebtn" onClick={handleRedirect}>Sign up</button>
                    </div>
                     <div class="col-md-2 col-lg-2">
                        <button class="btn homebtn" onClick={handleRedirect}>Register</button>
                    </div>
                     <div class="col-md-2 col-lg-2">
                        <button class="btn homebtn">Discord</button>
                    </div>
                </div>
            </div>
            <div className="col-12 homepage__about-section">
                <h1>ABOUT</h1>
            </div>
        </div>
    )
}

export default Homepage
