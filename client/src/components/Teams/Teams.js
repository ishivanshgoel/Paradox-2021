import React from "react";

// css
import "./CSS/teams.css";

//logos
import GithubLogo from "../logos/github-logo.png";
import EmailLogo from "../logos/email-logo.png";
import LinkedLogo from "../logos/linkedin-logo.png";

// dafault avatar
import DefaultMember from "../../Static/paradox-default-team-member.png"

//team data
import team from "../../Data/Teams"

function Teams() {
  return (
    <div>
      <h1 className="team__heading">
        <span className="bluecolor">Our</span> Team
      </h1>
      <div className="container teams__container">
       
        {team.map(
          ({
            firstname,
            lastname,
            tagline,
            email,
            github,
            linkedin,
            image,
          }) => {
            return (
              <Member
                firstname={firstname}
                lastname={lastname}
                tagline={tagline}
                email={email}
                github={github}
                linkedin={linkedin}
                image={image}
              />
            );
          }
        )}
      </div>
      <p className="copyright-teams py-3">Made With ❤️ by Team PARADOX | <span className="d-md-none"><br/></span>© IEEE CS VITC </p>
    </div>
  );
}

function Member({firstname, lastname, tagline, email, github, linkedin, image})
{
  return (
    <div className="card card-div">
      <img
        className="card-img-top member-image"
        src={image || DefaultMember}
        alt={firstname+'-'+lastname+'-paradox-'+tagline}
      ></img>
      <div className="content-card">
        <h5 className="card-title card-name">
          {firstname} {lastname}
        </h5>
        <p className="card-text ">{tagline} </p>
        <div className="social-links">
          <a href={`mailto:${email}`}>
            <img src={EmailLogo} className="social-logo" alt={`${firstname}-${email}`} />
          </a>
          <a href={`https://github.com/${github}`} target="_blank">
            <img src={GithubLogo} className="social-logo" alt={`${firstname}-${github}`} />
          </a>
          <a href={`https://www.linkedin.com/in/${linkedin}`} target="_blank">
            <img src={LinkedLogo} className="social-logo" alt={`${firstname}-${linkedin}`} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Teams;
