import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Volunteer.css'
import EventCard from './EventCard';



class Volunteer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      //this is where the API call would go instead of this list
      events: []
    }; 

  }
  

  callAPI = () => {
    fetch("http://localhost:9000/events")
        .then(res => res.json()).then(data => this.setState({events: data}))
  }

  componentDidMount() {
      this.callAPI();
  }

  handleClick() {
  }

  render() {
    const events = this.state.events.map(event => (
      <div key={event._id}>
          <EventCard
            eventName = {event.event}
            eventDate = {event.date}
            eventDescription={event.description}
            eventLocation={event.location}
          />
        <p> </p>
      </div>
    ));

    /* const event_cards = []
    for (let i = 0; i < this.state.events.length; i++) {
      event_cards.push(
          <div>
            <EventCard
              eventName = {this.state.events[i]["event"]}
              eventDate = {this.state.events[i]["date"]}
              eventDescription={this.state.events[i]["description"]}
              eventLocation={this.state.events[i]["location"]}
            />
            <p> </p>
          </div>

      );
    } */

    if (sessionStorage.getItem('isAdmin')) {
      return (
        <div>
        <a href= "/newevent"><Button variant="primary" onClick={() => this.handleClick()}>Add New Event</Button></a>
          <h2 className = "Events" align="center">Upcoming Events</h2>
          <br />
          {events}
        </div>
      );
    }

    return (
      <div>
        <h2 className = "Events" align="center">Upcoming Events</h2>
        <br />
        {this.state.events}
      </div>
    );
  }

}

export default Volunteer;
