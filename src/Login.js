import React from 'react';
import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import NavbarIn from './NavBarUser';

Amplify.configure(awsExports);

function Login({ signOut, user }) {

console.log(user)

  return (
    <>
    <NavbarIn/>
      <h1>Welcome {user.attributes.email} to Quade's Bee Montoring System</h1>

      
    </>
  );
}

export default withAuthenticator(Login);