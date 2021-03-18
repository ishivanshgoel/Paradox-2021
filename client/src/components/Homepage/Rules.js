import React from "react";
import "./CSS/Rules.css";
import { Container } from "react-bootstrap";

// data
import rules from "../../Data/Rules"

function Rules() {
  return (
      <Container className="Rules__body ">
        <ul>
          {
            rules.map((rule) => {
              return (
                <li className="Rules__ListCont">
                  {" "}
                  {rule}
                </li>
              )
            })
          }
        </ul>
      </Container>
  );
}
export default Rules;
