import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AboutUs.css';


class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = { events: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/events")
            .then(res => res.text())
            .then(res => this.setState({ events: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {

        return (
            <div>
            <Jumbotron>
            <h2 className = "text" align="left">Our Mission</h2>
            <p className = "text" align="left">
                We're a nonprofit community organization working to create an educational platform that inspires, encourages, and motivates children & young adults in the Metro Atlanta area to promote food and environmental justice in our urban communities.
            </p>
            </Jumbotron>
            <br/><br/>
            <h2>Our History</h2>
            <p> ... </p>
            <h2>Our Staff</h2>
            <p> ... </p>
            <h2>Our Events</h2>
            <p>{this.state.events}</p>
            </div>

        );
    }

}

export default AboutUs;
