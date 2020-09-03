import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginPage.css'



class LoginPage extends React.Component{
  render() {
    return (
      <div>
        <br/> <br/>
        <h2>Have an existing account?</h2>
        <Form className="form-login">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="light" type="submit">
            Log In
          </Button>
          <br/> <br/>
          <a href="#link"><h5 className="link">Forgot Password?</h5></a>
        </Form>

        <br/>
        <h2>Don't have an account?</h2>
        <a href="/signup"><Button variant="light" id="createAccountButton">Create Account</Button></a>
      </div>
    );
  }
}


export default LoginPage;
