import React from 'react'
import { useHistory } from 'react-router-dom'
import Rules from "./Rules";

// css import
import './homepage.css'

// images and logos import
import { ReactComponent as DiscordLogo } from './logos/discord.svg'
import { ReactComponent as ParadoxLogo } from "./logos/logo1_wobg1.svg";
import ParadoxLogo1 from "./logos/logo1_wobg1.svg";
import IEEElogo from './logos/IEEE_CS1.png';
import Symbol from './logos/logo5.png';
import instagram from "./logos/instagram.png";
import github from "./logos/github.png";
import linkedin from "./logos/linkedin.png"; 
import ieeecsvit from "./logos/ieeecsvit.png";

/**
 * @author TejasV58, samankgupta
*/

function Homepage() {

    const history = useHistory()

    let handleRedirect = (event) => {
        history.push(`/${event.target.name}`)
    }

    return (
      <div className="row m-0">
        <div className="col-12 homepage__top">
          <div className="col-md-12 col-lg-12 d-flex justify-content-center">
          <ParadoxLogo className="d-none"/>
            <div className="logo">
              <img src={Symbol} alt="" id="symbol" />
              <h1 class="glitch" data-text="PARADOX">PARADOX</h1>
            </div>
          </div>
          <div className="d-md-flex justify-content-center">
            <div className="col-12 col-md-3 col-lg-2 my-5 my-md-0 ">
              <button className=" homebtn" onClick={handleRedirect} name="user">
                LOGIN
              </button>
            </div>
            <div className="col-12 col-md-3 col-lg-2 my-5 my-md-0 ">
              <button
                className=" homebtn d-flex justify-content-center"
                id="discord"
              >
                <DiscordLogo id="DiscordLogo" className="colorchange"/>
                JOIN DISCORD
              </button>
            </div>
            <div className="col-12 col-md-3 col-lg-2 my-5 my-md-0 ">
              <button
                className=" homebtn"
                onClick={handleRedirect}
                name="register"
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8 homepage__about-section" id="aboutnav">
          <h2 className="about-heading">
            <span>ABOUT</span>
          </h2>
          <div className="section-description text-justify">
            <span className="highlight">PARADOX</span> is a two day online cryptic hunt organised by IEEE Computer Society of VIT Chennai.
            The 2021 edition of PARADOX will be held from <span className="highlight">20 march 2021</span> 12:00 AM IST to <span className="highlight">21 march 2021</span> 11:59 PM IST. The hunt consists of several questions in form of pictures and players would require to rack their brains to solve them and reach to an answer. <br/><br/>
            The goal of players should be to find the answer as fast as possible to stay on top of the leaderboard. At the end of two days the player at the top of leaderboard will be declared as the winner of PARADOX 2021. 
            This gripping competition will upskill and hone the expertise and efficiency of the competitors to solve tasks, by testing their logical and analytical skills while they search for clues all over the internet.
          </div>
        </div>
        <div className="col-12 col-md-8 homepage__rules-section container" id="rulesnav">
          <h2 className="about-heading">
            <span>RULES</span>
          </h2>
          <div className="Rules-section text-justify">
            <Rules/>
          </div>
        </div>
        <div className="col-12 col-md-8 homepage__sponsors-section container">
          <h2 className="about-heading">
            <span>SPONSORS</span>
          </h2>
          <div className="sponsors-section text-wrap">
            <a href="" id="ieee-link" className="col-8">
              <div className="card sponsor-tiles" id="ieeelogo">
                <img src={IEEElogo} alt="" />
                {/*<h3>Title sponsor</h3>*/}
              </div>
            </a>
            <Sponsors src={ParadoxLogo1}></Sponsors>
            <Sponsors src={ParadoxLogo1}></Sponsors>
            <Sponsors src={ParadoxLogo1}></Sponsors>
            <Sponsors src={ParadoxLogo1}></Sponsors>
            <Sponsors src={ParadoxLogo1}></Sponsors>
            <Sponsors src={ParadoxLogo1}></Sponsors>
          </div>
        </div>
        <Footer />
        <p className="copyright">Made With ❤️ by Team PARADOX | © IEEE VITC </p>
      </div>
    );
}

function Sponsors(props){
  return (
    <a href="">
      <div className="card sponsor-tiles">
        <img src={props.src} alt="" />
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
            <img src={ParadoxLogo1} id="footer_logo" alt="" />
          </div>
          
          <div className="contact-info col-12 col-md-4 my-4 my-md-0">
            <ul>
              <h2>Contact Us</h2>
              <li>
                Samank Gupta - <em>cyclonite#5201</em>
              </li>
              <li>samankgupta@gmail.com</li>
              <hr />
              <li>
                Tanay Bhadula - <em>davidsling#0162</em>
              </li>
              <li>tanaybhadula2002@gmail.com </li>
              <hr />
              <li>
                JS Abhishek - <em>JS ABHISHEK#7964</em>
              </li>
              <li>jsabhishek2001@gmail.com</li>
            </ul>
          </div>

          <div className="social-panel col-12 col-md-4 my-4 my-md-0">
            <h2>Social Links</h2>
            <div className="d-flex justify-content-between px-lg-5">
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