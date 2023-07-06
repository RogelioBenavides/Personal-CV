import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education = () => {
  return (
    <div className="background-light">
      <Container>
        <div className="text-center" style={{ padding: "50px 0 40px" }}>
          <h1 className="title-light">Education</h1>
        </div>
        <Row>
          <Col sm={12} md={6} className="text-center">
            <h2 className="secondary-title-light">Formal Education</h2>
          </Col>
          <Col sm={12} md={6} className="text-center">
            <h2 className="secondary-title-light">Online Courses</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
