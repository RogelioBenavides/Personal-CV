import { Row, Col } from "react-bootstrap"

const EducationList = (props) => {
    return(
        <Row>
            <Col>
                <img src={props.image} alt={props.imgAlt}/>
            </Col>
            <Col>
                <h3>props.title</h3>
                <p>props.time</p>
            </Col>
        </Row>
    );
};

export default EducationList;