import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SignUpPage.css'
import axios from 'axios'


class SignUpPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      birthdayDay: '',
      birthdayMonth: '',
      birthdayYear: ''
    };
    this.createUser = this.createUser.bind(this);
  }


  render() {
    return (
      <div className="parentDiv">
        <br/><br/>
        <h2>Sign Up</h2>
        <Form className="form-login" onSubmit={this.createUser}>
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" onChange={event => this.updateFirstName(event)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" onChange={event => this.updateLastName(event)}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="email@email.com" onChange={event => this.updateEmail(event)}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={event => this.updatePassword(event)}/>
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="XXX-XXX-XXXX" onChange={event => this.updatePhoneNumber(event)}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="date">
              <Form.Label>.</Form.Label>
              <Form.Control type="text" placeholder="Date" onChange={event => this.updateBirthdayDay(event)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="month">
              <Form.Label>Birthday</Form.Label>
              <Form.Control as="select" defaultValue="Month" onChange={event => this.updateBirthdayMonth(event)}>
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="year">
              <Form.Label>.</Form.Label>
              <Form.Control type="text" placeholder="Year" onChange={event => this.updateBirthdayYear(event)}/>
            </Form.Group>
          </Form.Row>

          

          <Form.Group controlId="newsletter">
            <input id="newsletterCheck" type="checkbox"/>
            &nbsp;
            <Form.Label for="newsletterCheck">Sign up for newsletter</Form.Label>
          </Form.Group>

          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
        <br/> <br/>
      </div>
    );
  }


  createUser(event) {
    var newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      birthdayDay: this.state.birthdayDay,
      birthdayMonth: this.state.birthdayMonth,
      birthdayYear: this.state.birthdayYear
    }
    axios.post('http://localhost:9000/users/', newUser)
      .then(function() {
        console.log('New user created');
        window.location = '/';
      }).catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }


  updateFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }


  updateLastName(event) {
    this.setState({
      lastName: event.target.value
    });
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


  updatePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }


  updateBirthdayDay(event) {
    this.setState({
      birthdayDay: event.target.value
    });
  }


  updateBirthdayMonth(event) {
    this.setState({
      birthdayMonth: event.target.value
    });
  }


  updateBirthdayYear(event) {
    this.setState({
      birthdayYear: event.target.value
    });
  }
}


export default SignUpPage;
