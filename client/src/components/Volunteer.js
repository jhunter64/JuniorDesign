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
              { location: "100 Vine St NW, Atlanta, GA 30314-4157, United States", date: 'SATURDAY, NOVEMBER 9, 2019 AT 9 AM – 12 PM', event: 'Diversity and Inclusion w/ Georgia State', description: 'We team up to plant in the historic westside gardens, with free food, henna tattoos and raffle prizes!' },
              { location: "Revery VR Bar, Atlanta", date: 'SATURDAY, JULY 27, 2019 AT 5 PM – 8 PM', event: 'This is Climate Change VR Screening', description: 'Plantlanta is excited to present the virtual reality docu-series "This Is Climate Change" hosted by Revery: VR Bar. Produced by Condition One*, "This is Climate Change" focuses on the “unfolding global crisis” of climate change through four ten-minute episodes that allow viewers to experience the damaging effects of climate change first-hand. ' },
              { location: "100 Vine St NW", date: 'SUNDAY, MAY 5, 2019 AT 9 AM – 12 PM', event: 'Star Wars Volunteer Day w/ Plantlanta', description: '"Choose your side" and join us for a fun twist on giving back to your community. Music from the many Star Wars soundtracks will fill the atmosphere all day. Join us for a chance to WIN several Star Wars themed prizes! Food & Drinks will be provided at our "Fueling Station".' }
            ]
  };




  render() {

    const event_cards = []
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
    }

    return (
      <div>
        <h2 className = "text" align="center"><br></br>Upcoming Events</h2>
        <br />
        {event_cards}

      </div>

    );
  }

}

export default Volunteer;
