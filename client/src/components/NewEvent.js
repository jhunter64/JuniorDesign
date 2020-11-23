import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NewEvent.css'
import axios from 'axios'



class NewEvent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          location: '',
          date: '',
          event: '',
          description: '',
          
        };
        this.addToEventsList = this.addToEventsList.bind(this);
      }


    render() {
        return (
            <div className="parentDiv">
                <br/><br/>
                <h2>Add New Event</h2>
                    <Form className="form-login" onSubmit={this.addToEventsList}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="Location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="location" placeholder="Location" onChange={event => this.updateLocation(event)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="Date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date/time" placeholder="Event Date" onChange={event => this.updateDate(event)}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="Event">
                        <Form.Label>Event</Form.Label>
                        <Form.Control type="event" placeholder="Event Name" onChange={event => this.updateEvent(event)}/>
                    </Form.Group>

                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="description" placeholder="Event Description" onChange={event => this.updateDescription(event)}/>
                    </Form.Group>

                        <a href="/volunteer"><Button variant="primary" type="submit">
                            Submit
                        </Button></a>
                    </Form>
                    <Form.Group>
                        <a href="/volunteer"><Button variant="light">Return to Events</Button></a>
                    </Form.Group>

                <br/> <br/>
            </div>
        );
    }



    addToEventsList(event) {
        var newEvent = {
            
            location: this.state.location,
            date: this.state.date,
            event: this.state.event,
            description: this.state.description
            
        };
        axios.post('http://localhost:9000/events', newEvent)
            .then((res) => {
                window.location = '/volunteer';
            });  
    }


    updateLocation(event) {
        this.setState({
          location: event.target.value
        });
    }

      
    updateDate(event) {
        this.setState({
          date: event.target.value
        });
    }
    
    updateEvent(event) {
        this.setState({
          event: event.target.value
        });
    }

    updateDescription(event) {
        this.setState({
          description: event.target.value
        });
    }





}

export default NewEvent;



    /* state = {
        //this is where the API call would go instead of this list
        events: [
                  { location: "100 Vine St NW, Atlanta, GA 30314-4157, United States", date: 'SATURDAY, NOVEMBER 9, 2019 AT 9 AM – 12 PM', event: 'Diversity and Inclusion w/ Georgia State', description: 'We team up to plant in the historic westside gardens, with free food, henna tattoos and raffle prizes!' },
                  { location: "Revery VR Bar, Atlanta", date: 'SATURDAY, JULY 27, 2019 AT 5 PM – 8 PM', event: 'This is Climate Change VR Screening', description: 'Plantlanta is excited to present the virtual reality docu-series "This Is Climate Change" hosted by Revery: VR Bar. Produced by Condition One*, "This is Climate Change" focuses on the “unfolding global crisis” of climate change through four ten-minute episodes that allow viewers to experience the damaging effects of climate change first-hand. ' },
                  { location: "100 Vine St NW", date: 'SUNDAY, MAY 5, 2019 AT 9 AM – 12 PM', event: 'Star Wars Volunteer Day w/ Plantlanta', description: '"Choose your side" and join us for a fun twist on giving back to your community. Music from the many Star Wars soundtracks will fill the atmosphere all day. Join us for a chance to WIN several Star Wars themed prizes! Food & Drinks will be provided at our "Fueling Station".' }
                ]
      }; */