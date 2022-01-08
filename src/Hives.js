import React, {Component} from 'react';
import { Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Button, Modal, Form, CardGroup, Row, Col, Card, Badge } from 'react-bootstrap';
import NavbarIn from './NavBarUser';

Amplify.configure(awsExports);


function Hives({ signOut, user }) {


	const [hiveList,setHiveList] = useState([]);
	const [name,setName] = useState('');

	//modal stuff
	const [show, setShow] = useState(false);
  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

	async function callApi(){
		const mad = await Auth.currentAuthenticatedUser()
		const token = mad.signInUserSession.idToken.jwtToken
		console.log(mad)
 	}

 	//occurs when called
	const gethives = () => {
		axios.get('https://hihvs5039b.execute-api.us-east-1.amazonaws.com/beta/hives', {
		  headers: {
		    'Authorization': `Bearer ${user.signInUserSession.accessToken.jwtToken}`
		  }
		})
		.then((res) => {
		  //console.log(res.data)
		  setHiveList(res.data)
		  console.log(res.data)
		})
		.catch((error) => {
		  console.error(error)
		})

		

	}


	const makeHive = () => {
		//console.log(name)
		//console.log(user.signInUserSession.accessToken.jwtToken)

		axios.post('https://hihvs5039b.execute-api.us-east-1.amazonaws.com/beta/hives',{
			"name": name
		}, {
		  headers: {
		    'Authorization': `Bearer ${user.signInUserSession.accessToken.jwtToken}`
		  }
		})
		.then((res) => {
		  //console.log(res.data)
		  //setHiveList(res.data)
		})
		.catch((error) => {
		  console.error(error)
		})


	}



	//only occurs one time when loaded
	useEffect(() => {
		axios.get('https://hihvs5039b.execute-api.us-east-1.amazonaws.com/beta/hives', {
		  headers: {
		    'Authorization': `Bearer ${user.signInUserSession.accessToken.jwtToken}`
		  }
		})
		.then((res) => {
		  setHiveList(res.data)
		  console.log(res.data)
		})
		.catch((error) => {
		  console.error(error)
		})
  
	}, []);



	
		
	


  return (
    <>
    <NavbarIn/>
      <h1>{user.username}'s Hive Listing</h1>

      <Button onClick={signOut}>Sign out</Button>
      
      <Button variant="primary" onClick={handleShow}>
        New Bee Hive
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Bee Hive</Modal.Title>
        </Modal.Header>
        <Modal.Body>Place Holder for title?</Modal.Body>
        <Form.Control type="email" onChange={(event) => {setName(event.target.value)}} placeholder="Name" />
        <div>
        </div>
        	
        <Modal.Footer>
        	
          <Button variant="primary" onClick={() => { makeHive(); handleClose(); gethives();}}>
            Create
          </Button>
          	
        </Modal.Footer>
      </Modal>




      <Row xs={1} md={5} className="g-4">
		

      {hiveList.map((val,key) => {
      	return <Col>
      	<Card className="mx-auto my-2">
			        <Card.Body>
			        	<Link to={"/hive?id=" + val[1]}>
			          <Card.Title>{val[0]} </Card.Title>
			          	</Link>
			          <Card.Text>
			            <div>
			            	<Badge bg="warning" text="dark">
			            		{val[3]} <span>&#8457;</span> 
			            	</Badge>
			            </div>

			            <div>
			            	<Badge bg="warning" text="dark">
			            		{val[3]} <span>lbs</span> 
			            	</Badge>
			            </div>

			            <div>
			            	<Badge bg="warning" text="dark">
			            		{val[3]}% <span>&#128267;</span> 
			            	</Badge>
			            </div>
			            

			          </Card.Text>
			        </Card.Body>
			        <Card.Footer>
			          <small className="text-muted"> ID: {val[1]}</small>
			        </Card.Footer>
			      </Card>
			      </Col>
      })}

      
			</Row>

      
      
    </>
  );
}

export default withAuthenticator(Hives);