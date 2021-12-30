import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Login from './Login';
import Hives from './Hives';
import Hive from './Hive';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import Navbarme from './Navbar';


function App() {

//<Link to="/hives">Hives</Link>
  return (
  	
	    <div>
	    	<Navbarme/>
	    	
		    <Routes>
		    	<Route path ="/login" element={<Login />} />
		    	<Route path ="/hives" element={<Hives />} />
		    	<Route path ="/hive" element={<Hive />} />
		    </Routes>
	    </div>
     
  );
}

export default App