import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { useEffect } from 'react';
import React from 'react';
import Navbarme from './Navbar';
import './Landing.css';
import {Button, Modal, Form, CardGroup, Row, Col, Container, Badge } from 'react-bootstrap';
import LogoName from './path12.png'
import Logoimage from './logo.png'
function Land() {

//<Link to="/hives">Hives</Link>
  return (
  	
	    <div>
	    	<Navbarme/>
	    	<Container>
		    	<Row className="justify-content-md-center">
		    			<Col md="auto">
		    				<img class="img-fluid" src={Logoimage} />
		    			</Col>
		    	</Row>
		    </Container>

	    		<Row>
	    			<Col >
	    				<br/>
	    				<h1>For Beekeepers that want</h1>
	    				<h1>	more from their hives</h1>
	    				<h4 class="text-black-50">Monitor you hives in a simple and quick way without having to go out</h4>

	    					
	    			</Col>

	    			<Col>
	    					<img class="img-fluid" src={LogoName}/>

	    			</Col>

	    		</Row>
	    		

	    	
	    	
		    
	    </div>
     
  );
}

export default (Land);