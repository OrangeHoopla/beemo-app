import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import React from 'react';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarme() {

  return (
  	
	    <div >
	    	<Navbar bg="light" expand="lg">
			  <Container>
			    <Navbar.Brand className="ml-auto" href="/">
			    <img
		          alt=""
		          src="/comb.svg"
		          width="40"
		          height="40"
		          className="align-left align-top"
		        />{''}
			    </Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
			        <Nav.Link href="/hives">Hives</Nav.Link>
			        <Nav.Link href="#link">about</Nav.Link>
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
	    	
	    </div>
     
  );
}

export default (Navbarme);