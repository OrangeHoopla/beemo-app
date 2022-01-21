import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { useEffect } from 'react';
import React from 'react';

import {Button, Modal, Form, CardGroup, Row, Col, Container, Badge } from 'react-bootstrap';
import Logoimage from './path1205.png'
function About() {

//<Link to="/hives">Hives</Link>
  return (
  	
	    <div>
	    		<Row>
	    			<Col >
	    				<br/>
	    				<h1>About Me</h1>
	    				
	    				<h4 class="text-black-50">started this at the beginning of 2021</h4>

	    					
	    			</Col>

	    			<Col>
	    				<br/>
	    					<img  src={Logoimage} />

	    			</Col>

	    		</Row>
	    		

	    	
	    	
		    
	    </div>
     
  );
}

export default (About);