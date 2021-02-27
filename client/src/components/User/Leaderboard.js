import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./leaderboard_css_css/leaderboard.css";
/**
 * Level 2 Route - /user/leaderboard
 * @author TanayBhadula
 */

function Leaderboard() {
    return (
        <div>
            <div className="leaderb_h1"> 
              <h1>LEADERBOARD</h1><br><br>
            </div>
             <table>
               <tr>
                <th>
                   Rank
                </th>
                <th>
                   Participant
                </th>
                <th>
                   Level
                </th>
                <th>
                   Time
                </th>
               </tr>
             </table>
        </div>
    )
}

export default Leaderboard
