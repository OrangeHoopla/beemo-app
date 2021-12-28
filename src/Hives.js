import React, {Component} from 'react';
import { Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

Amplify.configure(awsExports);


function Hives({ signOut, user }) {


	const [hiveList,setHiveList] = useState([]);
	const [name,setName] = useState('');

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
		  //console.log(res.data)
		  setHiveList(res.data)
		})
		.catch((error) => {
		  console.error(error)
		})
  
	}, []);



	
		
	


  return (
    <>
      <h1>{user.username}'s Hive Listing</h1>

      <button onClick={signOut}>Sign out</button>
      <button onClick={callApi}>API</button>
      <button onClick={gethives}>update hives</button>

      

      <div className="beemaker">
      	  <h1>create new hive</h1>
	      <label>Name</label>
	      <input type="text" onChange={(event) => {setName(event.target.value)}} />
	      <button onClick={makeHive}> add hive</button>
      </div>

      {hiveList.map((val,key) => {
      	return <div>
      	<Link to={"/hive?id=" + val[1]}>{val[0]}</Link>
      			</div>
      })}

      
      
    </>
  );
}

export default withAuthenticator(Hives);