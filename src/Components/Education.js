import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education = () => {
  return (
    <div className="background-light">
      <Container>
        <div className="text-center" style={{ padding: "50px 0 40px" }}>
          <h1 className="title-light">Interests</h1>
        </div>
        <Row>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
            </Col>
            <Col sm={12} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
            </Col>
        </Row>
        <Row>
            <Col md={0} lg={2} />
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center" style={{paddingBottom: "30px"}}>
            </Col>
            <Col md={0} lg={2} />
        </Row>
      </Container>
    </div>
  );
};

export default Education;
