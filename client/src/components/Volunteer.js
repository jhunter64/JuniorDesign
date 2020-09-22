import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Volunteer.css'



class Volunteer extends React.Component{

  render() {

    return (
      <div>
        <Jumbotron>
          <h2 className = "text" align="center">Upcoming Events</h2>
        </Jumbotron>
        <br />

        <>
        <Card>
            <Card.Header as="h5">Event 1 Date</Card.Header>
            <Card.Body>
                <Card.Title>Event 1 Name</Card.Title>
                <Card.Text>
                    Enter a description of the event here
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>
        <br />

        <Card>
            <Card.Header as="h5">Event 2 Date</Card.Header>
            <Card.Body>
                <Card.Title>Event 2 Name</Card.Title>
                <Card.Text>
                    Enter a description of the event here
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>
        <br />

        <Card>
            <Card.Header as="h5">Event 3 Date</Card.Header>
            <Card.Body>
                <Card.Title>Event 3 Name</Card.Title>
                <Card.Text>
                    Enter a description of the event here
                </Card.Text>
                <Button variant="primary">Sign Up</Button>
            </Card.Body>
        </Card>
        <br />
        </>







        <div class="card">
            <div class="card-body">
                <h5 className="text">If you have any questions or concerns, feel free to contact us!</h5>
                <h6  className="text">Email: <a href="mailto:volunteer@iamplantlanta.com" class="card-link">volunteer@iamplantlanta.com</a></h6>
                <a href="https://www.facebook.com/PlantLANTA" target="_blank" class="card-link">
                    <Image className="logos" src="facebook-icon.png"/> </a>
                <a href="https://www.instagram.com/officialplantlanta/" target="_blank" class="card-link">
                    <Image className="logos" src="ig-icon.png"/></a>
            </div>
        </div>
      </div>

    );
  }

}

export default Volunteer;