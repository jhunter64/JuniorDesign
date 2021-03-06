import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css';


class NavBar extends React.Component{

  render() {
  	if(sessionStorage.getItem('isLoggedIn')) {
       return (
      <div class="container">
        <Navbar className = "nav" bg="white" expand="lg" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <img
                alt="PlantLanta Logo"
                src="/plantlanta_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>

            <Nav className="mr-auto">
            </Nav>

            <Nav>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <NavDropdown title="Get Involved" id="basic-nav-dropdown">
                <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <Nav.Link href="/loginpage">Login</Nav.Link>
              <Nav.Link href="/profilepage">Profile Page</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  	else {
      return (
      <div class="container">
        <Navbar className = "nav" bg="white" expand="lg" fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/">
              <img
                alt="PlantLanta Logo"
                src="/plantlanta_logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                />
            </Navbar.Brand>

            <Nav className="mr-auto">
            </Nav>

            <Nav>
              <Nav.Link href="/aboutus">About Us</Nav.Link>
              <NavDropdown title="Get Involved" id="basic-nav-dropdown">
                <NavDropdown.Item href="/volunteer">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="/donate">Donate</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contactus">Contact Us</Nav.Link>
              <Nav.Link href="/loginpage">Login</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
	}

  }
}


export default NavBar;
