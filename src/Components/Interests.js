import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import web from "../Images/Interests/web.svg"
import ai from "../Images/Interests/ai.svg"
import linux from "../Images/Interests/linux.svg"
import uiux from "../Images/Interests/ui-ux.svg"
import algorithm from "../Images/Interests/algorithm.svg"

const Interests = () => {
  const titleFont = {
    fontFamily: "Pacifico, cursive",
    fontSize: "64px",
    color: "#BBE1FA",
    paddingBottom: "10px",
  };
  const interestFont = {
    fontFamily: "Roboto, sans-serif",
    fontSize: "48px",
    color: "#BBE1FA",
    paddingTop: "20px",
  };
  return (
    <div className="interest">
      <Container>
        <div className="text-center" style={{ padding: "50px 0 40px" }}>
          <h1 style={titleFont}>Interests</h1>
        </div>
        <Row>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
                <img
                    width="180px"
                    src={web}
                    alt="world icon"
                    />
                <h1 style={interestFont}>Web Dev</h1>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
                <img
                    width="180px"
                    src={uiux}
                    alt="desing icon"
                    />
                <h1 style={interestFont}>UI/UX</h1>
            </Col>
            <Col sm={12} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
                <img
                    width="180px"
                    src={algorithm}
                    alt="algoritm icon"
                    />
                <h1 style={interestFont}>Algorithms</h1>
            </Col>
        </Row>
        <Row>
            <Col md={0} lg={2} />
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
                <img
                    width="180px"
                    src={linux}
                    alt="linux icon"
                    />
                <h1 style={interestFont}>Linux</h1>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
                <img
                    width="180px"
                    src={ai}
                    alt="openai logo"
                />
                <h1 style={interestFont}>AI</h1>
            </Col>
            <Col md={0} lg={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Interests;
