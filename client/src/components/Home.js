import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import axios from 'axios'



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.clickedButton = this.clickedButton.bind(this);
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
                <Button variant="primary" onClick={this.clickedButton}>Create New User</Button>
            </p>
            </Jumbotron>
        );
    }

    clickedButton() {
        console.log("\n\nCLICKED BUTTON\n\n");
        axios.post('http://localhost:9000/users', {username: 'newuser', password: 'newpassword'})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }

}

export default Home;
