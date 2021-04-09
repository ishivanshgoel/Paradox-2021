import React from "react";
import { useHistory } from "react-router-dom";
// local storage
import ended from "./ended.png";
//CSS
import "./Completelevels.css";
/**
 * @author Sanika
 */

function Eventended() {
  let history = useHistory();

  let handleRedirect = () => {
    history.push("/user/leaderboard");
  };
  return (
    <div className="Completelevels_heading">
      <div>
        <div>
          <img className="trophy_img" src={ended} alt="" />
        </div>
        <h1 className="Completehead">The event has ended!</h1>
        <h3 className="blueheading">View the results on Leaderboard</h3>
        <div className="complete">
          <button className="complete_btn" onClick={handleRedirect}>
            Go to Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Eventended;
