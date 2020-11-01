import React from 'react';
import { Image, Form, Button, Col} from 'react-bootstrap';
import './css/ProfilePage.css'
import axios from 'axios'



class ProfilePage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      birthdayDay: "",
      birthdayMonth: "",
      birthdayYear: ""
    };
  }

  componentDidMount() {
    var userID = sessionStorage.getItem('userID');

    axios.get("http://localhost:9000/users/" + userID)
        .then(result => this.setState({
          email: result.data.email,
          firstName: result.data.firstName,
          lastName: result.data.lastName,
          phoneNumber: result.data.phoneNumber,
          birthdayDay: result.data.birthdayDay,
          birthdayMonth: result.data.birthdayMonth,
          birthdayYear: result.data.birthdayYear,
          user: result.data
        }))
        .catch(error => this.setState({
        }));
  }

  render() {
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var intials = firstName.charAt(0) + lastName.charAt(0);

    return (
      <div>
        <div class="card">
          <br></br>
          <div data-initials={intials}></div>
          <br></br>
          <h4 className="text">{firstName + " " + lastName}</h4>
          <h6 className="text">{this.state.email}</h6>
          <h6 className="text">({this.state.phoneNumber.substring(0, 3)}) {this.state.phoneNumber.substring(3, 6)}-{this.state.phoneNumber.substring(6, 10)}</h6>
          <h6 className="text">{this.state.birthdayMonth} {this.state.birthdayDay}, {this.state.birthdayYear}</h6>
        </div>
      </div> 
    );
    
  }
}


export default ProfilePage;