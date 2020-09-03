import React from 'react';
import { Form, Button, InputGroup, FormControl, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SignUpPage.css'


class SignUpPage extends React.Component{
  render() {
    return (
      <div>
        <br/><br/>
        <h2>Sign Up</h2>
        <Form className="form-login">
          <Form.Row>
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label> </Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="email@email.com" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="XXX-XXX-XXXX" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="date">
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="text" placeholder="Date"/>
            </Form.Group>

            <Form.Group as={Col} controlId="month">
              <Form.Label></Form.Label>
              <Form.Control as="select" defaultValue="Month">
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
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Year" />
            </Form.Group>
          </Form.Row>



          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
        <br/> <br/>
      </div>
    );
  }
}


export default SignUpPage;
