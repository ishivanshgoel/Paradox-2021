import React from "react";
// css import

import "bootstrap/dist/css/bootstrap.min.css";
import "./teams.css";

//images and logos
import DefaultMember from "./TeamMembers-images/member-default1.png";
import GithubLogo from "./logos/github-logo.png";
import EmailLogo from "./logos/email-logo.png";
import LinkedLogo from "./logos/linkedin-logo.png";

function Teams() {
  return (
    <div>
      <h1 className="team__heading"><span className="bluecolor">Our</span> Team</h1>
      <div className="container teams__container">
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
        <Member />
      </div>
    </div>
  );
}

function Member()
{
  return (
    <div className="card card-div">
      <img
        className="card-img-top member-image"
        src={DefaultMember}
        alt="Card image cap"
      ></img>
      <div className="content-card">
        <h5 className="card-title card-name">FirstName Lastname</h5>
        <p className="card-text ">Some quick example </p>
        <div className="social-links">
          <a href="#">
            <img src={EmailLogo} className="social-logo" alt="" />
          </a>
          <a href="#">
            <img src={GithubLogo} className="social-logo" alt="" />
          </a>
          <a href="#">
            <img src={LinkedLogo} className="social-logo" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Teams;
