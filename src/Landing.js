import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { useEffect } from 'react';
import React from 'react';
import './Landing.css';
import {Button, Modal, Form, CardGroup, Row, Col, Container, Badge } from 'react-bootstrap';
import LogoName from './path12.png'
import Logoimage from './logo.png'
import './Landing.css';
function Land() {

//<Link to="/hives">Hives</Link>
  return (
  	
	    <div>
	    	<Container>
		    	<Row className="justify-content-md-center">
		    			<Col md="auto">
		    				<img className="img-fluid" src={Logoimage} />
		    			</Col>
		    	</Row>
		    </Container>

	    		<Row>
	    			<Col >
	    				<br/>
	    				<h1>For Beekeepers that want</h1>
	    				<h1>	more from their hives</h1>
	    				<h4 className="text-black-50">Monitor you hives in a simple and quick way without having to go out</h4>		
	    			</Col>

	    			<Col>
	    					<img className="img-fluid" src={LogoName}/>

	    			</Col>

	    		</Row>
	    		

	    	
	    	
		    
	    </div>
     
  );
}

export default (Land);