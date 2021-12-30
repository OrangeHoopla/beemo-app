import React, {Component} from 'react';
import { Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


Amplify.configure(awsExports);


function Hive({ signOut, user }) {

	//grabbing id
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search)

	const [temp,setTemp] = useState([]);
	const [Y,setY] = useState([]);
	const [X,setX] = useState([]);

	//things needs for charts
	ChartJS.register(
	  CategoryScale,
	  LinearScale,
	  PointElement,
	  LineElement,
	  Title,
	  Tooltip,
	  Legend
	);

	const options = {

		  responsive: true,
		  plugins: {
		    legend: {
		      position: 'top',
		    },
		    title: {
		      display: true,
		      text: 'Bee Hive ... temperature',
		    },
		  },
		};

	const labels = X;

	const data = {
	  labels,
	  datasets: [
	    {
	      label: 'Temperature',
	      data: Y,
	      borderColor: 'rgb(255, 99, 132)',
	      backgroundColor: 'rgba(255, 99, 132, 0.5)',
	    }
	    
	  ],
	};

	useEffect(() => {
		axios.get('https://hihvs5039b.execute-api.us-east-1.amazonaws.com/beta/temp',{
		  headers: {
		    'Authorization': `Bearer ${user.signInUserSession.accessToken.jwtToken}`
		  },
		  params: {
		    "hive": searchParams.get('id')
		  }
		})
		.then((res) => {
		  //console.log(res.data)
		  setTemp(res.data)
		  setY(res.data.map(function(value,index) { return  value[1] }))
		  setX(res.data.map(function(value,index) { return value[0]; }))
		})
		.catch((error) => {
		  console.error(error)
		})

		console.log(temp)
  
	}, []);

	const showtemp = () => {
		console.log(temp)
		console.log(Y)
		console.log(X)

	}
		
	
//{Y.map(name => <h2>{name}</h2>)}

  return (
    <>
      <h1>{user.username}'s Hive Info</h1>

      <button onClick={signOut}>Sign out</button>
      <button onClick={showtemp}>show</button>
      <Line options={options} data={data} height={5} width={10} />
      

      


      
    </>
  );
}

export default withAuthenticator(Hive);