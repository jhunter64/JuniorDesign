import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/EventCard.css'

interface Props {
  eventName?: string;
  eventDate?: string;
  eventDescription?: string;
  eventLocation?: string;
}


class EventCard extends React.Component<Props>{

  handleClick() {
    if (sessionStorage.getItem('isLoggedIn')) {
      window.location = "/signupconfirmation";
    } else {
      window.location = "/loginpage";
    }
  }

  render() {

    return (
      <div>

        <Card className = "eventCard">
            <Card.Header className = "text"><h2 className = "text">{this.props.eventName}</h2></Card.Header>
            <Card.Body>
                <Card.Title className = "text">{this.props.eventDate}</Card.Title>
                <Card.Text className = "text">{this.props.eventLocation}</Card.Text>
                <Card.Text className = "text">
                    {this.props.eventDescription}
                </Card.Text>
                <Button variant="primary" onClick={() => this.handleClick()}>Sign Up</Button>
            </Card.Body>
        </Card>

      </div>

    );
  }

}

export default EventCard;
