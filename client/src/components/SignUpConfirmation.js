import React from 'react';
import { Image } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/SignUpConfirmation.css'

class SignUpConfirmation extends React.Component{

  render() {

    return (
      <div>
        <Jumbotron>
          <h1 className='text' align='center'>Sign Up Confirmation</h1>
        </Jumbotron>

        <h3><br></br>Thank you for registering for this event and making a difference with PlantLanta!<br></br><br></br></h3>

        <div class="card2">
          <div class="card-body">
            <h5 className="text">If you have any questions or concerns, feel free to contact us!</h5>
            <h6  className="text">Email: <a href="mailto:volunteer@iamplantlanta.com" class="card-link">volunteer@iamplantlanta.com</a></h6>
            <h6  className="text">Mailing: P.O. Box 372 Lilburn, GA 30047</h6>
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

export default SignUpConfirmation;
