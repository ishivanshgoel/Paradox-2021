import React from 'react'
import { useHistory } from 'react-router-dom'
import './homepage.css'
import discordlogo from './discordblack.svg'
import paradoxlogo from './logo2_wobg.svg'

/**
 * @author TejasV58
*/

function Homepage() {

    const history = useHistory()

    let handleRedirect = (event) => {
        history.push(`/${event.target.name}`)
    }

    return (
        <div className="row m-0">
            <div className="offset-3 col-6 p-0">
                <img src={paradoxlogo} id="ParadoxLogo" alt=""/>
            </div>
            <div className="col-12 p-0">
                <div className="homepage__main">
                    <div className="button-outer-box d-flex justify-content-center">
                        <div className="col-md-2 col-lg-2 ">
                            <button className=" homebtn" name="user" onClick={handleRedirect}>LOGIN</button>
                        </div>
                        <div className="col-md-2 col-lg-2">
                            <button className=" homebtn d-flex justify-content-center align-items-center rounded" id="discord"><img src={discordlogo} id="DiscordLogo" className="colorchange" alt=""/>Discord</button>
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
