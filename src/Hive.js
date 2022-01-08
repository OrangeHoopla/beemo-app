import React, {Component} from 'react';
import { Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import axios from 'axios';
import NavbarIn from './NavBarUser';
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
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Container, Tab, Tabs, Button } from 'react-bootstrap';
import 'chartjs-adapter-moment';


Amplify.configure(awsExports);


function Hive({ signOut, user }) {

	//grabbing id
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search)

	const [temp,setTemp] = useState([]);
	const [weight,setWeight] = useState([]);
	const [humidity,setHumidity] = useState([]);
	const [battery,setBattery] = useState([]);
	const [timerange,setTimeRange] = useState("");
	const [endtimerange,setEndTimeRange] = useState("");

	//things needs for charts
	ChartJS.register(
	  CategoryScale,
	  LinearScale,
	  PointElement,
	  LineElement,
	  Title,
	  Tooltip,
	  Legend,
	  TimeScale
	);

	const options = {
		  responsive: true,
		  plugins: {
		    legend: {
		      position: 'top',
		    },
		    title: {
		      display: true,
		      text: 'Day',
		    },
		  },
		  scales: {
			  x: {
			  type:"time",
			  min: timerange,
			  //2022-01-02 20:00:00
			  max: endtimerange,
			  time: {
				      unit: 'day',
				      displayFormats: {
				        second: 'YYYY-MM-DD'
				      }
				  },
		      gridLines: {
                display:false
            			}
		    	}
			}
		};

	const data1 = {
	  datasets: [
	    {
	      label: 'Temperature',
	      data: temp,
	      borderColor: 'rgb(255, 99, 132)',
	      fill: true,
	      backgroundColor: 'rgba(255, 99, 132, 0.5)',
	      xAxisID: 'x'
	    }
	    
	  ],
	};
	const data2 = {
	  datasets: [
	    {
	      label: 'Weight',
	      data: weight,
	      borderColor: 'rgb(255, 99, 132)',
	      fill: true,
	      backgroundColor: 'rgba(255, 99, 132, 0.5)',
	      xAxisID: 'x'
	    }
	    
	  ],
	};
	const data3 = {
	  datasets: [
	    {
	      label: 'Humidity',
	      data: humidity,
	      borderColor: 'rgb(255, 99, 132)',
	      fill: true,
	      backgroundColor: 'rgba(255, 99, 132, 0.5)',
	      xAxisID: 'x'
	    }
	    
	  ],
	};
	const data4 = {
	  datasets: [
	    {
	      label: 'Charge',
	      data: battery,
	      borderColor: 'rgb(255, 99, 132)',
	      fill: true,
	      backgroundColor: 'rgba(255, 99, 132, 0.5)',
	      xAxisID: 'x'
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
		  //setTemp(res.data)
		  setTemp(res.data.temp.map(function(value,index) { return  { x: value[0] ,y: value[1]} }))
		  setWeight(res.data.weight.map(function(value,index) { return { x: value[0] ,y: value[1]} }))
		  setHumidity(res.data.humidity.map(function(value,index) { return { x: value[0] ,y: value[1]} }))
		  setBattery(res.data.battery.map(function(value,index) { return { x: value[0] ,y: value[1]} }))
		})
		.catch((error) => {
		  console.error(error)
		})

		console.log(temp)
  
	}, []);

	const showtemp = () => {
		console.log(temp)
		//console.log(Y)
		//console.log(X)

	}
	const day = () => {
		var start = new Date();
		start.setUTCHours(0,0,0,0);
		const timezoneOffset = (new Date()).getTimezoneOffset();
		console.log(timezoneOffset);
		
		setTimeRange(start.toUTCString())
		start.setUTCHours(23,59,59,999);
		setEndTimeRange(start.toUTCString())
	}

	const week = () => {
		var start = new Date();
		start.setDate(start.getDate() - 7);
		setTimeRange(start.toUTCString())

		start = new Date();
		start.setUTCHours(23,59,59,999);
		setEndTimeRange(start.toUTCString())
	}

	const months = () => {
		var start = new Date();
		start.setDate(start.getDate() - 90);
		setTimeRange(start.toUTCString())

		start = new Date();
		start.setUTCHours(23,59,59,999);
		setEndTimeRange(start.toUTCString())
	}

	const deleteHive = () => {
		//console.log(name)
		//console.log(user.signInUserSession.accessToken.jwtToken)

		axios.delete('https://hihvs5039b.execute-api.us-east-1.amazonaws.com/beta/hives',{
		  headers: {
		    'Authorization': `Bearer ${user.signInUserSession.accessToken.jwtToken}`
		  },
		  params: {
		    "hive": searchParams.get('id')
		  }
		})
		.then((res) => {
		  console.log(res.data)
		  
		})
		.catch((error) => {
		  console.error(error)
		})


	}
		
	
//{Y.map(name => <h2>{name}</h2>)}

  return (
    <>
    <NavbarIn/>
      <h1>{user.username}'s Hive Info</h1>
      
      <div>
      <Container>
      <Tabs defaultActiveKey="Temperature" id="uncontrolled-tab-example" className="mb-3">
		  <Tab eventKey="Temperature" title="Temperature">
		    <Line options={options} data={data1} height={5} width={10} />
		  </Tab>
		  <Tab eventKey="Weight" title="Weight">
		    <Line options={options} data={data2} height={5} width={10} />
		  </Tab>
		  <Tab eventKey="humidity" title="Humidity">
		    <Line options={options} data={data3} height={5} width={10} />
		  </Tab>
		  
		  <Tab eventKey="Battery" title="Battery">
		    <Line options={options} data={data4} height={5} width={10} />
		  </Tab>
		</Tabs>
		<Button onClick={day}>1D</Button>{' '}
		<Button onClick={week}>1W</Button>{' '}
		<Button onClick={months}>3M</Button>{' '}

      
      </Container>
      <Button onClick={deleteHive}>Delete Hive</Button>
      </div>
      

      


      
    </>
  );
}

export default withAuthenticator(Hive);