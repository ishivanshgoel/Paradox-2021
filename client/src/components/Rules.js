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
                At each level, the participants will encounter a number of clues which shall all, together, point to one final answer. Each level has only one correct answer.
              </li>
              <li className="Rules__ListCont">
                {" "}
                It is compulsary for all participants to join our discord server. All official hints will be released on the discord server.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Answers will always be lower-case, alphanumeric and will contain no spaces. Special characters are not allowed. Beware of the spelling you enter. For example, if the answer is 221-B Baker Street, you would type it in as “221bbakerstreet”.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Direct messaging any admin for clues, hints, lead confirmations is not allowed. Participants could use the general chat in the discord server for any queries.
              </li>
              <li className="Rules__ListCont">
                {" "}
                Team play, answer sharing and collaborating with other participants is not allowed and any such activity can lead to disqualification of the people involved.
              </li>
            </ul>
      </Container>
    </div>
  );
}
export default Rules;
