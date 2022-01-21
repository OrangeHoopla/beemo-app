import { Link } from 'react-router-dom';
import React from 'react';
import Auth from '@aws-amplify/auth';
import {Button, Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarme() {
//<Nav.Link onClick={Auth.signOut()} href="/" >Sign Out</Nav.Link>
  let [fuser, setUser] = useState(<Nav.Link href="/user">Sign In</Nav.Link>)
  let [temp, settemp] = useState(<></>)

  const handleSignOutButtonClick =  async () => {

    await Auth.signOut();
    
    window.location.href = '/';
};  

  

  useEffect(() => {

  	let updateUser = async authState => {
      try {
        let user = await Auth.currentAuthenticatedUser()
        setUser(<Nav.Link href="/user" >{Auth.user.username}</Nav.Link>)
        settemp(<Nav.Link onClick={handleSignOutButtonClick}>Sign Out</Nav.Link>)
        
      } catch {
        setUser(<Nav.Link href="/user">Sign In</Nav.Link>)
      }
    }
    
   
    updateUser() // check manually the first time because we won't get a Hub event
    
    
   
  }, []);



  return (
  	
	    <div>
	    	<Navbar bg="light" expand="lg" className="shadow-sm">
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
			      	{fuser}
			      	{temp}
			      </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>
	    	
	    </div>
     
  );
}

export default (Navbarme);