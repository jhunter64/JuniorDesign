import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import axios from 'axios'



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
    }

    render() {

        return (

            <Jumbotron>
            <h2 className = "text" align="left">Our Mission</h2>
            <p className = "text" align="left">
                We're a nonprofit community organization working to create an educational platform that inspires, encourages, and motivates children & young adults in the Metro Atlanta area to promote food and environmental justice in our urban communities.
            </p>
            <p>
                <a href="/aboutus"><Button variant="primary">Learn more</Button></a>
                <br></br><br></br>
            </p>
            <p>
                <a href="/aboutus"><Button variant="primary" onClick={this.makeDelete}>DELETE Event</Button></a>
                <br></br><br></br>
            </p>
            </Jumbotron>
        );
    }


    makeDelete(event) {
        axios.delete('http://localhost:9000/events/5f8079abef8b6e1ac48a2f71')
            .then(() => {
                console.log('NO ERROR');
            }).catch((error) => {
                console.log(error);
            });
        event.preventDefault();
    }
}

export default Home;
