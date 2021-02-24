import React from 'react'
import { useHistory } from 'react-router-dom'
import './homepage.css'
import discordlogo from './discord.png'


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
            <div className="col-12">
                <div className="homepage__main">
                    <svg viewBox="0 0 3500 500" className="paradox ">
                        <text x="50%" y="50%" fill="transparent" text-anchor="middle">PARADOX</text>
                    </svg>
                    <div className="button-outer-box d-flex justify-content-center">
                        <div className="col-md-2 col-lg-2 ">
                            <button className=" homebtn" name="user" onClick={handleRedirect}>LOGIN</button>
                        </div>
                        <div className="col-md-2 col-lg-2">
                            <button className=" homebtn d-flex  justify-content-center" id="discord"><img src={discordlogo} id="DiscordLogo" alt=""/>Discord</button>
                        </div>
                        <div className="col-md-2 col-lg-2">
                            <button className=" homebtn" name="register" onClick={handleRedirect}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10 homepage__about-section">
                <h1>ABOUT</h1>
            </div>
        </div>
    )
}

export default Homepage
