import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { REMOVEUSER } from "../../Reducers/ActionTypes";
// local storage
import { removeItem } from "../../Helper/LocalStorage";
import trophy from "./trophy_img.png";
//CSS
import "./Completelevels.css";
/**
 * @author Sanika
 */

function Completelevels() {
  let history = useHistory();

  let handleRedirect = () => {
    history.push("/user/leaderboard");
  };
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  let handleLogout = (event) => {
    event.preventDefault();
    removeItem("token");
    dispatch({
      type: REMOVEUSER,
    });
  };

  return (
    <div className="Completelevels_heading">
      <section className="complete_section">
          <div className="dropdown playarea-btn dropleft" id="completelevel-btn">
            <div
              className="dropdown-menu dropback"
              aria-labelledby="dropdownMenuButton"
              id="complete-logout"
            >
              <form onSubmit={handleLogout}>
                <button type="submit" className="dropdown-item logout-button">
                  Logout
                </button>
              </form>
            </div>
            <button
              className="btn btn-secondary dropdown-toggle playarea-btn-back"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {username}
            </button>
          </div>
      </section>
      <div>
        <div>
          <img className="trophy_img" src={trophy} alt="" />
        </div>
        <h1 className="Completehead">Congratulations!</h1>
        <h3 className="blueheading">You have completed all levels</h3>
        <div className="complete">
          <button className="complete_btn" onClick={handleRedirect}>
            Go to Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Completelevels;
