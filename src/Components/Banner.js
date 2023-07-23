import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../Images/avatar.svg";
import resume from "../Documents/Rogelio Benavides CV.pdf";
import PrimaryButton from "../UI/PrimaryButton";

const Banner = () => {
  return (
    <div className="background-light">
      <Container>
        <Row>
          <Col md={12} lg={5} className="text-center" style={{ paddingTop: "30px" }}>
            <img src={avatar} alt="rogelio's avatar" className="img-fluid" />
          </Col>
          <Col md={12} lg={7} className="text-center d-flex flex-column justify-content-center align-items-center">
            <div style={{ padding: "30px 0" }}>
              <h1 className="title-light">Hi, I'm Roger</h1>
              <p className="text-lights">
                I'm a computer science student. My mission is to improve our
                development as a society with the use of new technologies and
                making it accessible for everyone.
              </p>
              <a href={resume} download>
                <PrimaryButton message="Download Resume" />
                <PrimaryButton message="Hola" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
