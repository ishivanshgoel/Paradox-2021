import React from "react";
// css import

import "bootstrap/dist/css/bootstrap.min.css";
import "./teams.css";

import DefaultMember from "./TeamMembers-images/member-default.PNG";

function Teams() {
    return (
      <div class="teams__container">
        <Member />
      </div>
    );
}

function Member()
{
    return (
        <div class="card">
          <div class="imgBx">
            <img src={DefaultMember} alt="" />
          </div>
          <div class="content">
            <div class="contentBx">
              <h3>John <br />
                <span>Web Developer</span>
              </h3>
            </div>
            <ul class="sci">
              <li style={{"--i": 1}}>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li style={{"--i": 2}}>
                <a href="#">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
              <li style={{"--i": 3}}>
                <a href="#">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
}

export default Teams;
