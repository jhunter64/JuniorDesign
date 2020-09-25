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

          <Form>	          
          	<Form.Group controlId="email">
	            <div class="form-inline">
	            	<div class="mx-auto">
		            	<Form.Control size="sm" type="text" class="form-control mr-1" id="inlineFormInputEmail" placeholder="email@email.com" />
				         	<Button variant="dark" type="submit" size="sm" class="btn btn-primary">
				            Join
				          </Button>
			          </div>
			        </div>
		        </Form.Group>
          </Form>
					




          
    



        </div>
      </div>

    );
  }

}

export default ContactUs;
