import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Rules.css'
import { Button,Container,Row,Col } from 'react-bootstrap';
function Text(props) {
  return (
    <div className="Side_Heading">
      {props.text}
    </div>
  );
}

export default Text;
