import React from "react";
import { useHistory } from "react-router-dom";
// local storage
import ended from "./ended.png";
import { REMOVEUSER } from "../../Reducers/ActionTypes";
// local storage
import { removeItem } from "../../Helper/LocalStorage";
import { useSelector, useDispatch } from "react-redux";
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
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  let handleLogout = (event)=>{
    event.preventDefault()
    removeItem('token')
    dispatch({
        type: REMOVEUSER
    })
    history.push("/user")
}
  return (
    <div className="Completelevels_heading">
      <div>
        <div>
          <img  className="ended_img" src={ended} alt="" />
        </div>
        <h1 className="Completehead">The event has ended!</h1>
        <h3 className="blueheading">View the results on Leaderboard</h3>
        <div className="ended-btns">
          <div className="complete">
            <button className="complete_btn extra-btn" onClick={handleRedirect}>
              Go to Leaderboard
            </button>
          </div>
          <div className="complete">
              <form onSubmit={handleLogout}>
                  <button className="complete_btn extra-btn">
                      Logout
                  </button>
              </form>       
          </div>
          <div className="complete"> 
            <form target="_blank" action="https://docs.google.com/forms/d/e/1FAIpQLScKwJ5Y239g7EflXUSbVW1eEw2iyWBa4p7t4db6XiqNO-1kmw/viewform">
                <button className="complete_btn extra-btn">
                  Feedback
                </button>
            </form>  
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Eventended;
