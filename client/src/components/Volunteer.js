import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Volunteer.css'
import EventCard from './EventCard';


class Volunteer extends React.Component{

  state = {
    //this is where the API call would go instead of this list
    events: [
              { date: '12/1/2011', event: 'name1', description: 'description1' },
              { date: '13/1/2011', event: 'name2', description: 'description2' },
              { date: '14/1/2011', event: 'name3', description: 'description3' }
            ]
  };




  render() {

    const event_names = ["tier 1", "tier 2", "tier 3"];
    const event_dates = ["tier 1", "tier 2", "tier 3"];
    const event_descriptions = ["tier 1", "tier 2", "tier 3"];
    var events = [
      { date: '12/1/2011', event: 'name1', description: 'description1' },
      { date: '13/1/2011', event: 'name2', description: 'description2' },
      { date: '14/1/2011', event: 'name3', description: 'description3' }
    ];
    const event_cards = []
    for (let i = 0; i < events.length; i++) {
      event_cards.push(
          <div>
            <EventCard
              eventName = {this.state.events[i]["event"]}
              eventDate = {this.state.events[i]["date"]}
              eventDescription={this.state.events[i]["description"]}
            />
            <p> </p>
          </div>

      );
    }

    return (
      <div>
        <h2 className = "text" align="center">Upcoming Events</h2>
        <br />
        {event_cards}

      </div>

    );
  }

}

export default Volunteer;
