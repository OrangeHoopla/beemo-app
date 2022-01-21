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

Amplify.configure(awsExports);


function Hives({ signOut, user }) {


	const [hiveList,setHiveList] = useState([]);
	const [name,setName] = useState('');
	const [hivetype,setHiveType] = useState('');
	const [temperment,setTemperment] = useState('');
	const [beetype,setBeeType] = useState('');
	const [location,setlocation] = useState('');
	const [notes,setNotes] = useState('');

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
			"name": name,
			"hivetype": hivetype,
			"temperment": temperment,
			"beetype": beetype,
			"location": location,
			"notes": notes

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

		console.log(hivetype)
		console.log(temperment)
		console.log(beetype)

		console.log(notes)
		console.log(location)
		console.log(name)



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
      <br/>
      <Button variant="primary" onClick={handleShow}>
        New Bee Hive
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Bee Hive</Modal.Title>
        </Modal.Header>
        <Modal.Body>This info can be changed later on if you want.</Modal.Body>

        <Form>
        	<Row className="mx-auto mb-5">
        		<Col>
		        	<Form.Label htmlFor="name">Name</Form.Label>
		        	<Form.Control type="email" onChange={(event) => {setName(event.target.value)}} placeholder="Name" />
		        	<Form.Label htmlFor="loc">Location</Form.Label>
		        	<Form.Control id="loc" type="email" onChange={(event) => {setlocation(event.target.value)}} placeholder="Beehive Location" />
		        	<Form.Label htmlFor="not">Notes</Form.Label>
		        	<Form.Control id="not" type="email"  onChange={(event) => {setNotes(event.target.value)}} placeholder="Ex: give sugar water" />
	        	</Col>
	        	<Col>
		        	<Form.Label htmlFor="hivetype">Hive Type</Form.Label>
		        	<Form.Select id="hivetype" onChange={(event) => {setHiveType(event.target.value)}}>
		        		<option>---</option>
		        		<option>Langstroth</option>
		        		<option>Warre</option>
		        		<option>Top Bar</option>
		        	</Form.Select>

		        	<Form.Label htmlFor="temper">Temperment</Form.Label>
		        	<Form.Select id="temper" onChange={(event) => {setTemperment(event.target.value)}}>
		        		<option>---</option>
		        		<option>Gentle</option>
		        		<option>Wary</option>
		        		<option>Aggressive</option>
		        	</Form.Select>

		        	<Form.Label htmlFor="bee">Bee Type (genus)</Form.Label>
		        	<Form.Select id="bee" onChange={(event) => {setBeeType(event.target.value)}}>
		        		<option>---</option>
		        		<option>IDK</option>
		        		<option>Western honey bee</option>
		        		<option>German honey bee</option>
		        		<option>Grey honey bee</option>
		        		<option>Italian honey bee</option>
		        		<option>Caucasian honey bee</option>
		        		<option>Iberian honey bee</option>
		        		<option>Africanised honey bee</option>
		        	</Form.Select>
	        	</Col>
	        </Row>
        </Form>

        <div>
        </div>
        	
        <Modal.Footer>
        	
          <Button variant="primary" onClick={() => { makeHive(); handleClose();}}>
            Create
          </Button>
          	
        </Modal.Footer>
      </Modal>




      <Row xs={1} md={5} className="g-4">
		

      {hiveList.map((val,key) => {
      	return <Col>
      	<Card className="mx-auto my-2 shadow">
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
			            		{val[5]} <span>lbs</span> 
			            	</Badge>
			            </div>

			            <div>
			            	<Badge bg="warning" text="dark">
			            		{val[7]}% <span>&#128267;</span> 
			            	</Badge>
			            </div>

			            <div>
			            	<Badge bg="warning" text="dark">
			            		{val[9]}% <span>&#9748;</span> 
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