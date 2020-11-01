import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
//import Popup from 'reactjs-popup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/LoginPage.css'
import axios from 'axios'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: sessionStorage.getItem('isLoggedIn'),
            failedLogin: false,
            popup: false
        };

        this.logIn = this.logIn.bind(this);
    }

    render() {
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

                <br/>
                <h2>Don't have an account?</h2>
                <a href="/signup"><Button variant="light" id="createAccountButton">Create Account</Button></a>
            </div>
        );
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
                    sessionStorage.setItem('userID', res.data._id);
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
