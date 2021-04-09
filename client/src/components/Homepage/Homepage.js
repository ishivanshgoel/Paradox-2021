import React from 'react'
import { useHistory } from 'react-router-dom'
import Rules from "./Rules"
import { useSelector } from 'react-redux'

// css import
import './CSS/homepage.css'

// images and logos import
import { ReactComponent as DiscordLogo } from '../logos/discord.svg'
import ParadoxLogo1 from "../logos/homepage_logo.svg";
import ParadoxLogo2 from "../logos/logo6.png";
import instagram from "../logos/instagram.png";
import github from "../logos/github.png";
import linkedin from "../logos/linked-in.png";
import ieeecsvit from "../logos/ieeecsvit.png";
import taskade from "../logos/taskade.png";
import interviewcake from "../logos/interviewcake.jpg";
import badelog from "../logos/badelog.png";
import codeasylums from "../logos/codeasylums2.png";
import givemycertificate from "../logos/givemycertificate.png";

/**
***@author TejasV58, samankgupta
**/

function Homepage() {

  // fetch user from store
  const user = useSelector((state) => state.user)

  const history = useHistory()

  let handleRedirect = (event) => {
    history.push(`/${event.target.name}`)
  }
  return (
    <div className="row m-0">
      <div className="col-12 homepage__top">
        <div className="row m-0">
          <div className="paradox_logo_div" id="outer-logo-div">
            <img
              src={ParadoxLogo2}
              className="Paradox__logo offset-md-1 col-md-2 img-fluid"
              id="paradoxlogo"
              alt=""
            />
            <svg
              viewBox="0 0 250 110"
              className="paradox offset-md-3 col-md-9 d-none d-md-block logo-normal"
            >
              <text x="40%" y="45%" textAnchor="middle" id="paradox-text">
                PARADOX
              </text>
              <text x="30%" y="52%" id="cryptic_hunt">
                The Cryptic Hunt
              </text>
            </svg>
            <svg
              viewBox="0 0 250 95"
              className="paradox offset-md-3 col-md-9 d-none logo-height"
            >
              <text x="40%" y="45%" textAnchor="middle" id="paradox-text">
                PARADOX
              </text>
              <text x="30%" y="52%" id="cryptic_hunt">
                The Cryptic Hunt
              </text>
            </svg>
            <svg viewBox="0 0 105 100" className="paradox d-md-none col-12 p-0">
              <text x="52%" y="50%" textAnchor="middle" id="paradox-text">
                PARADOX
              </text>
              <text x="0%" y="60%" id="cryptic_hunt">
                The Cryptic Hunt
              </text>
            </svg>
          </div>
        </div>
        <div className="row justify-content-center px-2">
          <div className="col-12 col-md-9 col-lg-2 my-4 my-lg-0 ">
            {!user ? (
              <button className=" homebtn" onClick={handleRedirect} name="user">
                LOGIN
              </button>
            ) : null}
          </div>
          <div className="col-12 col-md-9 col-lg-2 my-4 my-lg-0 ">
            <a
              href="https://discord.gg/xYTHpkv6UJ"
              style={{ textDecoration: "none" }}
              target="_BLANK"
            >
              <button
                className=" homebtn d-flex justify-content-center"
                id="discord"
              >
                <DiscordLogo id="DiscordLogo" className="colorchange" />
                JOIN DISCORD
              </button>
            </a>
          </div>
          <div className="col-12 col-md-9 col-lg-2 my-4 my-lg-0 ">
            {!user ? (
              <button
                className=" homebtn"
                onClick={handleRedirect}
                name="register"
              >
                REGISTER
              </button>
            ) : null}
          </div>
        </div>
        <a href="#aboutnav">
          <div id="sd-container">
            <div className="arrow"></div>
            <div className="arrow"></div>
          </div>
        </a>
      </div>
      <div className="col-12 col-md-8 homepage__about-section" id="aboutnav">
        <h2 className="about-heading">
          <span>ABOUT</span>
        </h2>
        <div className="section-description text-justify">
          <span className="highlight">PARADOX</span> is a two day online cryptic
          hunt organised by IEEE Computer Society of VIT Chennai. The 2021
          edition of PARADOX will be held from{" "}
          <span className="highlight">10 April 2021 12:00 AM IST</span> to{" "}
          <span className="highlight">11 April 2021 11:59 PM IST</span>. The
          hunt consists of several questions in form of pictures and players
          would require to rack their brains to solve them and reach to an
          answer. <br />
          <br />
          The goal of players should be to find the answer as fast as possible
          to stay on top of the leaderboard. At the end of two days the player
          at the top of leaderboard will be declared as the winner of PARADOX
          2021. This gripping competition will upskill and hone the expertise
          and efficiency of the competitors to solve tasks, by testing their
          logical and analytical skills while they search for clues all over the
          internet.
        </div>
      </div>
      <div
        className="col-12 col-md-8 homepage__rules-section container"
        id="rulesnav"
      >
        <h2 className="about-heading">
          <span>RULES</span>
        </h2>
        <div className="Rules-section text-justify">
          <Rules />
        </div>
      </div>
      <div
        className="col-12 col-md-8 homepage__sponsors-section container"
        id="sponsorsnav"
      >
        <h2 className="about-heading">
          <span>SPONSORS</span>
        </h2>
        <div className="sponsors-section text-wrap">
          <Sponsors src={taskade} href={"https://www.taskade.com/"}></Sponsors>
          <Sponsors
            src={interviewcake}
            href={"https://www.interviewcake.com/"}
          ></Sponsors>
          <Sponsors
            src={givemycertificate}
            href={"https://givemycertificate.com/"}
          ></Sponsors>
          <Sponsors
            src={badelog}
            href={"https://badelog.in/"}
            id="sponsor-transparent"
          ></Sponsors>
          <Sponsors
            src={codeasylums}
            href={"http://www.codeasylums.com/"}
            id="sponsor-transparent"
          ></Sponsors>
          {/* <Sponsors src={ParadoxLogo1}></Sponsors>
          <Sponsors src={ParadoxLogo1}></Sponsors> */}
        </div>
      </div>
      <Footer />
      <p className="copyright">
        Made With ❤️ by Team PARADOX |{" "}
        <span className="d-md-none">
          <br />
        </span>
        © IEEE CS VITC{" "}
      </p>
    </div>
  );
}

function Sponsors(props) {
  return (
    <a href={props.href} target="_BLANK" >
      <div className="card sponsor-tiles my-2 my-sm-1" id={props.id}>
        <img width="100%" height="auto" src={props.src} alt=""/>
      </div>
    </a>
  );
}


function Footer() {
  return (
    <div className="p-0">
      <footer id="contact" className="footer text-center">
        <div className="footer-main row m-0">
          <div className="panel-1 d-flex justify-content-center col-12 col-md-4 my-4 my-md-0">
            <img src={ParadoxLogo1} id="footer_logo" alt="" className="img-fluid" />
          </div>

          <div className="contact-info col-12 col-md-4 my-4 my-md-0">
            <ul>
              <h2 className="mb-2">Contact Us</h2>
              <li>
                Samank Gupta
              </li>
              <li>samankgupta@gmail.com</li>
              <hr />
              <li>
                Tanay Bhadula
              </li>
              <li>tanaybhadula2002@gmail.com </li>
              <hr />
              <li>
                JS Abhishek
              </li>
              <li>jsabhishek2001@gmail.com</li>
            </ul>
          </div>

          <div className="social-panel col-12 col-md-4 my-4 my-md-0">
            <h2>Social Links</h2>
            <div className="d-flex justify-content-between socialmedialinks">
              <a
                target="_BLANK"
                href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai"
              >
                <img src={linkedin} className="social-logos" alt="" />
              </a>
              <a
                target="_BLANK"
                href="https://www.instagram.com/comsoc.vitcc/"
              >
                <img src={instagram} className="social-logos" alt="" />
              </a>
              <a
                target="_BLANK"
                href="https://ieeecomsocvitcc.tk/"
              >
                <img src={ieeecsvit} className="social-logos" alt="" />
              </a>
              <a
                target="_BLANK"
                href="https://github.com/comsocvitc"
              >
                <img src={github} className="social-logos" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Homepage