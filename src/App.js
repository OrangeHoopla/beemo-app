import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import Navbarme from './Navbar.js';
import Login from './Login';
import Hives from './Hives';
import Hive from './Hive';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import About from './about.js';
import Land from './Landing';

function App() {

//<Link to="/hives">Hives</Link>
  return (
  	
	    <div>
	    	<Navbarme/>
	    	<link rel="stylesheet" href="./Landing.css" type="text/css"/>
		    <Routes>
		    	<Route path ="/" element={<Land />} />
		    	<Route path ="/user" element={<Login />} />
		    	<Route path ="/hives" element={<Hives />} />
		    	<Route path ="/hive" element={<Hive />} />
		    	<Route path ="/about" element={<About />} />
		    </Routes>
	    </div>
     
  );
}

export default App