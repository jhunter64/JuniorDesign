import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '256519258823-2bdp5g0mkg20qfivubvrvts024bhtqia.apps.googleusercontent.com';

const clientSecret = 'oLQn8p-irej6EXhw7wuuZbrr';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(`Successfully logged in, welcome ${res.profileObj.name}.`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log(`Login failed: res:`, res);
    alert(
      'Failed to login'
    );
  };

  const divStyle = {
    color: 'black'
  };

  return (
    <div style={divStyle}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;