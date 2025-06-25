import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '/Comp 1.gif'


function Navigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid>
      <h1><NavLink className = "link" to="/"><img className="logoImg" src={logo}></img></NavLink></h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <NavLink className = "link" to="/">Home</NavLink>
          <NavLink className = "link" to="/projects">Projects</NavLink>
          <NavLink className = "link" to="/contact">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation;