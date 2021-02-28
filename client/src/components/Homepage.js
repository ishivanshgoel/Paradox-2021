import React from 'react'
import { useHistory } from 'react-router-dom'
import './homepage.css'

import discordlogo from './logos/discord.png'
import { ReactComponent as ParadoxLogo } from "./logos//logo1_wobg1.svg";
import IEEElogo from './logos/IEEE_CS1.png';
import cnlogo from './logos/CNLOGO.svg'
import commudle from "./logos/commudlelogo.png";
import interviewCake from "./logos/Interview-cake.png";
import meusec from "./logos/meusec.jpeg";
import noobarmy from "./logos/noob-army.png";
import offsec from "./logos/offsec-logo.svg";
import spyse from "./logos/spyse.png";

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
      <div className="row">
        <div class="col-12">
          <div class="col-md-12 col-lg-12 d-flex justify-content-center">
            <ParadoxLogo
              viewBox="0 0 2500 530"
              height="300"
              width="1200"
              className="paradox_logo"
            />
          </div>
          <div className="button-outer-box d-flex justify-content-center">
            <div class="col-md-2 col-lg-2 ">
              <button class=" homebtn" onClick={handleRedirect}>
                LOGIN
              </button>
            </div>
            <div class="col-md-2 col-lg-2">
              <button
                class=" homebtn d-flex  justify-content-center"
                id="discord"
              >
                <img src={discordlogo} id="DiscordLogo" alt="" />
                Discord
              </button>
            </div>
            <div class="col-md-2 col-lg-2">
              <button class=" homebtn" onClick={handleRedirect}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 homepage__about-section">
          <h2 className="about-heading">
            <span>ABOUT</span>
          </h2>
          <div className="section-description ">
            Halocrypt is an international online cryptic hunt organized by the
            students of DPS, Indore. The hunt consists of 50 brain wrecking
            questions based on famous incidents, figures and internet culture.
            The goal of the participant is to answer the questions as fast as
            possible using the hints given to place themselves at the top of the
            leaderboard. The top competitors who reach the highest levels in the
            shortest amount of time shall receive the prizes. The participant is
            free to use the internet to search for the answers. The hunt will
            commence on the 4th of May at 12 AM IST. Halocrypt provides
            participating students with an international platform to compete and
            test their skills against some of the greatest cryptic hunters and
            intellects on the globe. The competitor who completes all 50
            questions or ends at the top of the leaderboard when the event ends,
            shall be declared as the winner of Halocrypt 2020.
          </div>
        </div>
        <div className="col-8 homepage__sponsors-section container">
          <h2 className="about-heading">
            <span>SPONSORS</span>
          </h2>
          <div className="sponsors-section text-wrap">
            <div className="card sponsor-tiles" id="ieeelogo">
              <img src={IEEElogo} alt="" />
              {/*<h3>Title sponsor</h3>*/}
            </div>
            <Sponsors src={offsec}></Sponsors>
            <Sponsors src={cnlogo}></Sponsors>
            <Sponsors src={interviewCake}></Sponsors>
            <Sponsors src={meusec}></Sponsors>
            <Sponsors src={commudle}></Sponsors>
            <Sponsors src={noobarmy}></Sponsors>
            <Sponsors src={spyse}></Sponsors>
          </div>
        </div>
        <Footer />
        <p className="copyright">Paradox 2021 | © IEEE </p>
      </div>
    );
}

function Sponsors(props){
  return (
      <div className="card sponsor-tiles">
        <img src={props.src} alt="" />
      </div>
  );
}


function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <footer id="contact" className="footer">
        <div className="footer-main container d-flex col-8">
          <div className="panel-2">
            <ul className="site-nav">
              <h2>Site Navigation</h2>

              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#sponsors">Sponsors</a>
              </li>
              <li>
                <a target="_blank" href="https://ieee.org">
                  IEEE
                </a>
              </li>
              <li>
                <a target="_blank" href="https://computer.org">
                  IEEE CS
                </a>
              </li>
              <li>
                <a target="_blank" href="https://ieee.ncuindia.edu">
                  IEEE NCU
                </a>
              </li>
            </ul>
          </div>
          <div className="contact-info">
            <ul>
              <h2>Contact Us</h2>
              <li>
                <i className="fa fa-user-circle c-icons"></i>Vibhuti Dahiya -
                <em>Program Chair</em>
              </li>
              <li>
                <i className="fa fa-envelope-square c-icons"></i>
                vibhutidahiya@ieee.org
              </li>
              <hr />
              <li>
                <i className="fa fa-user-circle c-icons"></i>Anant Gulia -
                <em>Program Manager</em>
              </li>
              <li>
                <i className="fa fa-envelope-square c-icons"></i>
                anantgulia@ieee.org
              </li>
              <hr />
              <li>
                <i className="fa fa-user-circle c-icons"></i>Animesh Das -
                <em>Program Manager</em>
              </li>
              <li>
                <i className="fa fa-envelope-square c-icons"></i>
                animeshxdas@gmail.com
              </li>
            </ul>
          </div>

          <div className="social-panel">
            <h2>Social Links</h2>
            <div className="socials">
              <a href="https://www.facebook.com/ieee.ncu/">
                <i
                  className="fa fa-facebook social-icon"
                  aria-hidden="true"
                ></i>
              </a>

              <a href="https://twitter.com/ieeencu">
                <i className="fa fa-twitter social-icon" aria-hidden="true"></i>
              </a>
              <a href="https://www.linkedin.com/company/ieee-ncu">
                <i
                  className="fa fa-linkedin social-icon"
                  aria-hidden="true"
                ></i>
              </a>

              <a href="https://www.instagram.com/ieee_ncu/">
                <i
                  className="fa fa-instagram social-icon"
                  aria-hidden="true"
                ></i>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default Homepage
