import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Text from "./Rules_Styling/Text";
import "./Rules_Styling/Rules.css";
import { Button, Container, Row, Col} from "react-bootstrap";
function Rules() {
  return (
    <div>
      <Container className="Rules_body">
        <Row>
          <Col className="SideHead">
            <Text text="R" />
            <Text text="U" />
            <Text text="L" />
            <Text text="E" />
            <Text text="S" />
          </Col>
          <Col xs={10} className="Rules_List">
            <ul>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li className="ListCont"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Rules;
