import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" data-bs-theme="dark" className="nav-color">
      <Container>
        <Navbar.Brand className="nav-brand" href="#home">Rogelio Benavides</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-text" href="#education">Education</Nav.Link>
            <Nav.Link className="nav-text" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-text" href="#achievements">Achievements</Nav.Link>
            <Nav.Link className="nav-text" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
