import React, {Component} from 'react';
import { Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import axios from 'axios';
import { useState, useEffect } from 'react';

Amplify.configure(awsExports);


function Hive({ signOut, user }) {
		
	


  return (
    <>
      <h1>{user.username}'s Hive Info</h1>

      <button onClick={signOut}>Sign out</button>
 
    </>
  );
}

export default withAuthenticator(Hive);