import React from 'react'
import { useHistory } from 'react-router-dom'
import trophy from './trophy_img.png'
//CSS
import './Completelevels.css'
/**
 * @author Sanika
 */

function Completelevels() {
     let history = useHistory()

    let handleRedirect = ()=>{
        history.push("/user/leaderboard")
    }
    return(
        <div className="Completelevels_heading">
            <div>
                <div>
                    <img className="trophy_img" src={trophy} alt=""/>
                </div>
                <h1 className="Completehead">Congratulations!</h1>
                <h3 className="blueheading">You have completed all levels</h3>
                <div className="complete">
                    <button className="complete_btn" onClick={handleRedirect}>Go to Leaderboard</button>
                </div>   
            </div>     
        </div>
    );
}

export default Completelevels;