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

export default Homepage
