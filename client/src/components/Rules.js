import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./Rules_Styling/Text";
import "./Rules_Styling/Rules.css";
import bullet from './logos/bullet.png'
import { Button, Container, Row, Col } from "react-bootstrap";
function Rules() {
  return (
    <div>
      <Container className="Rules__body ">
        
            <ul>
          <li className="Rules__ListCont">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quia.
              </li>
            </ul>
      </Container>
    </div>
  );
}
export default Rules;
