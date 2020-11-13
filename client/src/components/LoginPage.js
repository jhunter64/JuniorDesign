import React from 'react';
import { Jumbotron, Form, Button, Alert } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginPage.css'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '256519258823-2bdp5g0mkg20qfivubvrvts024bhtqia.apps.googleusercontent.com';

const clientSecret = 'oLQn8p-irej6EXhw7wuuZbrr';

const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    sessionStorage.setItem('isLoggedIn', true);
    window.location.reload();
    refreshTokenSetup(res);
};
  
const onFailure = (res) => {
    console.log(`Login failed: res:`, res);
    alert('Failed to login');
};


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: sessionStorage.getItem('isLoggedIn'),
            failedLogin: false,
            isAdmin: sessionStorage.getItem('isAdmin'),
            popup: false
        };

        this.logIn = this.logIn.bind(this);
    }

    render() {
        if (this.state.isLoggedIn) {
            console.log(this.state.isLoggedIn);
            console.log(sessionStorage.getItem('isLoggedIn'));
            if (this.state.isAdmin) {
                return (
                    <div>
                        <Jumbotron>
                        <h2 className = "text" align="left">Successfully Logged In As Admin</h2>
                        <a href="/"><h5 className="link">Sign Out</h5></a>
                        </Jumbotron>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Jumbotron>
                        <h2 className = "text" align="left">Successfully Logged In</h2>
                        <a href="/"><h5 className="link">Sign Out</h5></a>
                        </Jumbotron>
                    </div>
                );
            }
        } else {
            return (
                <div>
                    <br/> <br/>
                    {this.state.failedLogin ? <Alert variant='danger'><p>Login Failed. Try Again!</p></Alert> : null}
                    <h2>Have an existing account?</h2>
                    <Form className="form-login" onSubmit={this.logIn}>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={event => this.updateEmail(event)}/>
                        </Form.Group>
    
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={event => this.updatePassword(event)}/>
                        </Form.Group>
                        <Button variant="light" type="submit">
                        Log In
                        </Button>
                        <br/> <br/>
                        <a href="#link"><h5 className="link">Forgot Password?</h5></a>
                    </Form>
                    <h2>Log In With Google</h2>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login With Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false}
                    />
                    <br/>
                    <h2>Don't have an account?</h2>
                    <a href="/signup"><Button variant="light" id="createAccountButton">Create Account</Button></a>
                </div>
            );
        }
    }


    logIn(event) {
        axios.post('http://localhost:9000/users/logIn', {email: this.state.email, password: this.state.password})
            .then((res) => {
                this.loginSuccess();
                console.log("userId");
                console.log(res.data._id);
                if (res.data.admin) {
                    sessionStorage.setItem('isAdmin', true);
                } else {
                    sessionStorage.setItem('isAdmin', false);
                }
                console.log('NO ERROR');
                sessionStorage.setItem('isLoggedIn', true);
                // window.location = '/';
            }).catch((error) => {
                this.loginFail();
                console.log(error);
                sessionStorage.setItem('isLoggedIn', false);
            });
        event.preventDefault();
    }


    updateEmail(event) {
        this.setState({
            email: event.target.value
        });
    }


    updatePassword(event) {
        this.setState({
            password: event.target.value
        });
    }


    loginSuccess() {
        console.log('login success');
        this.setState({
            isLoggedIn: true,
            failedLogin: false
        });
    }


    loginFail() {
        console.log('login fail');
        this.setState({
            isLoggedIn: false,
            failedLogin: true
        });
    }
}


export default LoginPage;
