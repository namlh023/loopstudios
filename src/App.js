import React, {useState, useEffect} from 'react';
import "./assets/scss/main.scss";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "./assets/images/logo.svg";
import menu from "./assets/images/icon-hamburger.svg";
import iconClose from './assets/images/icon-close.svg';

function App() {
  const [menuIcon, setMenuIcon] = useState(menu);

  function checkMenuIconEqual(value) {
    return menuIcon === value ? true : false
  }
  return (
    <div className="main" id="main">
      <Navbar className={`main__nav my-container ${checkMenuIconEqual(iconClose) ? 'my-nav' : null}`} expand="xxl" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Loopstudios" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => checkMenuIconEqual(menu) ? setMenuIcon(iconClose) : setMenuIcon(menu)}>
            <img src={menuIcon} alt="" aria-hidden="true" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
              <Nav.Link href="#">Events</Nav.Link>
              <Nav.Link href="#">Products</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="hero my-container">
        <div className="hero__content">
          <h1 className="h1-like h1-upper h1-light">
            Immersive experiences that deliver
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
