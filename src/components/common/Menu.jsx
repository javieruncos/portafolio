import React from 'react';
import "../../assets/style/Menu.css";
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => {
  return (
    <>
      <Navbar expand="lg" className="navbar-dark barraMenu">
        <Container>
          <Navbar.Brand href="#inicio" className='fs-2'>Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#inicio">inicio</Nav.Link>
              <Nav.Link href="#proyectos">Proyectos</Nav.Link>
              <Nav.Link href="#tecnologias">Tecnologias</Nav.Link>
              <Nav.Link href="#sobreMi">Sobre Mi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
};

export default Menu;