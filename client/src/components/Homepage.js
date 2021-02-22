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
                    <button className="btn  mx-5 my-3 px-5 py-2 homebtn" name="user" onClick={handleRedirect}>SIGNUP</button>
                    <button className="btn  mx-5 my-3 px-5 py-2 homebtn" name="register" onClick={handleRedirect}>REGISTER</button>
                    <button className="btn  mx-5 my-3 px-5 py-2 homebtn">DISCORD</button>
                </div>
            </div>
            <div className="col-12 homepage__about-section">
                <h1>ABOUT</h1>
            </div>
        </div>
    )
}

export default Homepage
