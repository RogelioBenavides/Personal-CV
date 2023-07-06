import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../Images/avatar.svg";

const Banner = () => {
  const fontTitle = {
    fontFamily: "Pacifico, cursive",
    fontSize: "48px",
    paddingBottom: "10px",
};
const fontFamily = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "24px",
  };
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={12} md={5} className="text-center" style={{ paddingTop: "30px" }}>
            <img
              src={avatar}
              alt="rogelio's avatar"
              className="img-fluid"
            ></img>
          </Col>
          <Col sm={12} md={7} className="text-center d-flex flex-column justify-content-center align-items-center">
            <div style={{ padding: "30px 0" }}>
              <h1 style={fontTitle}>Hi, I'm Roger</h1>
              <p style={fontFamily}>
                I'm a computer science student. My mission is to improve our
                development as a society with the use of new technologies and
                making it accessible for everyone.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
