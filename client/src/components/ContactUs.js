import React from 'react';
import { Image, Form, Button, Col} from 'react-bootstrap';
import './css/ContactUs.css'



class ContactUs extends React.Component{

  render() {

    return (
      <div class="card">
        <div class="card-body">
          <h5 className="text">If you have any questions or concerns, feel free to contact us!</h5>
          <h6  className="text">Email: <a href="mailto:volunteer@iamplantlanta.com" class="card-link">volunteer@iamplantlanta.com</a></h6>
          <h6  className="text">Mailing: P.O. Box 372 Lilburn, GA 30047</h6>

          <a href="https://www.facebook.com/PlantLANTA" target="_blank" class="card-link">
            <Image className="logos" src="facebook-icon.png"/> </a>
          <a href="https://www.instagram.com/officialplantlanta/" target="_blank" class="card-link">
            <Image className="logos" src="ig-icon.png"/></a>
          

          <br/><br/>
          <h6 className ="text"> Join our mailing list:</h6>
					
        
          <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css"/>
          <div id="mc_embed_signup">
          <form action="https://gmail.us2.list-manage.com/subscribe/post?u=b1f47867a96dc04f059a83a6c&amp;id=52e0241610" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
              <div class="clear"><input type="submit" value="Subscribe!" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
              </div>
          </form>
          </div>

        </div>
      </div>

    );
  }

}

export default ContactUs;
