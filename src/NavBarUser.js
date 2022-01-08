import { Link} from 'react-router-dom';
import React from 'react';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

function NavbarIn({ signOut, user }) {

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
			        <Nav.Link href="/about">about</Nav.Link>
			      </Nav>
			      <Nav className="ml-right">
			      	<Nav.Link href="/user">{user.username}</Nav.Link>
			      	<Nav.Link  onClick={signOut}>Sign Out</Nav.Link>
			      	
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
	    	
	    </div>
     
  );
}

export default withAuthenticator(NavbarIn);