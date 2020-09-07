import React from 'react';
import { Image } from 'react-bootstrap';
import './css/ContactUs.css'



class ContactUs extends React.Component{

  render() {

    return (
      <div class="card">
        <div class="card-body">
          <h5 className="text">If you have any questions or concerns, feel free to contact us!</h5>
          <h6  className="text">Email: <a href="mailto:volunteer@iamplantlanta.com" class="card-link">volunteer@iamplantlanta.com</a></h6>
          <a href="https://www.facebook.com/PlantLANTA" target="_blank" class="card-link">
            <Image className="logos" src="facebook-icon.png"/> </a>
          <a href="https://www.instagram.com/officialplantlanta/" target="_blank" class="card-link">
            <Image className="logos" src="ig-icon.png"/></a>
        </div>
      </div>

    );
  }

}

export default ContactUs;
