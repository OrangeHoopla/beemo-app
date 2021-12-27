import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Login from './Login';
import {BrowserRouter as Router, Switch, Routes, Route} from 'react-router-dom';

function App() {

  return (
  	
	    <div className="App">
	    	<h2>help god</h2>
		    <Routes>
		    	<Route path="/login" element={<Login />} />
		    </Routes>
	    </div>
    
  );
}

export default (App);