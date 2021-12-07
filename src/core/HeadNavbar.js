import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HeadNavbar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Hotels App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/hotelHome">Contacts</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
