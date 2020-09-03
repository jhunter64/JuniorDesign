import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class NavBar extends React.Component{

  render() {


    return (
      <div class="container">
        <Navbar bg="transparent" expand="lg" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/plantlanta_logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>


            <Nav className="mr-auto">
            </Nav>

            <Nav>
              <Nav.Link href="#link">About Us</Nav.Link>
              <NavDropdown title="Get Involved" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Donate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <Nav.Link href="/loginpage">Login</Nav.Link>
            </Nav>


        </Navbar>
      </div>
    );
  }
}


export default NavBar;
