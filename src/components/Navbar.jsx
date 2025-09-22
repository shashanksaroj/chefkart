import React from "react";
import { Navbar, Container, Nav, Badge, Form } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

const AppNavbar = ({ cartCount, onCartClick, darkMode, toggleTheme }) => {
  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      className="shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <i className="bi bi-basket-fill me-2"></i>
          ChefKart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={onCartClick}>
              <i className="bi bi-cart-fill me-1"></i>
              Cart <Badge bg={darkMode ? "secondary" : "dark"}>{cartCount}</Badge>
            </Nav.Link>

            {/* Dark Mode Toggle */}
            <Form.Check 
              type="switch"
              id="dark-mode-switch"
              label={darkMode ? "🌙 Dark" : "☀️ Light"}
              checked={darkMode}
              onChange={toggleTheme}
              className="ms-3"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
