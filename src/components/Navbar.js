import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
export default class Navbar extends Component {
    render() {
        return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="/home">Trigger Happy Havoc</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features"></ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            <LinkContainer to='./'>
              <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to= '/shop'>
              <ReactBootStrap.Nav.Link href="/shop">Shop</ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to= '/login'>
              <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to= '/signup'>
              <ReactBootStrap.Nav.Link href="/signup">Sign Up</ReactBootStrap.Nav.Link>
            </LinkContainer>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        )
    }
}
