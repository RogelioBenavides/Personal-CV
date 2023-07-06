import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Components.css";

const NavBar = () => {
  const fontTitle ={
    fontFamily: 'Pacifico, cursive',
    fontSize: '24px'
  }
  const fontFamily = {
    fontFamily: 'Roboto, sans-serif',
  }
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" data-bs-theme="dark" className="nav-color">
      <Container>
        <Navbar.Brand style={fontTitle} href="#home">Rogelio Benavides</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={fontFamily} href="#education">Education</Nav.Link>
            <Nav.Link style={fontFamily} href="#skills">Skills</Nav.Link>
            <Nav.Link style={fontFamily} href="#achievements">Achievements</Nav.Link>
            <Nav.Link style={fontFamily} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
