import { Amplify } from 'aws-amplify';
import Auth from '@aws-amplify/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function Login({ signOut, user }) {

console.log(user.attributes.sub)

  return (
    <>
      <h1>Welcome {user.attributes.email} to Quade's Bee Montoring System</h1>

      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);