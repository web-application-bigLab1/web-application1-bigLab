import {Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function FourOFour() {
    return (
        <Container fluid>
            <Row>
                <h1>No, no, no. This is NOT a 404 Page.</h1>
            </Row>
            <Row className = "mt-2">
                <em>This only means you went out your way to *try* things. Adventurous aint'ya?</em>
            </Row>
            <Row className = "mt-2">
                <b>Here is your <Link to = "/">link</Link> to go back.</b>
            </Row>
        </Container>
    );
}

export { FourOFour }