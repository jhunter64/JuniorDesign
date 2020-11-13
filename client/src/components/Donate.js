import React from 'react';
import { Image, Modal } from 'react-bootstrap';
import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Donate.css'

class Donate extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='text' align='center'>Donate</h1>
        </Jumbotron>
        <Button variant="primary" onClick={() => this.handleShow()}>Donate as Organization</Button>
        <Modal show={this.state.show} onHide={() => this.handleClose()} dialogClassName="donate-modal" size="lg">
          <Modal.Header className="header" closeButton>
            <Modal.Title className="text-modal">Donate as Organization</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-modal">Thank you for being interested in donating to PlantLanta! Please use the following information to contact PlantLanta and donate in your organization's name.
          <br></br><br></br>
          Email: <a href="mailto:volunteer@iamplantlanta.com" class="card-link">volunteer@iamplantlanta.com</a><br></br>
          Mailing: P.O. Box 372 Lilburn, GA 30047<br></br><br></br>
          Or contact us through our social media with any questions or concerns:<br></br>
          <a href="https://www.facebook.com/PlantLANTA" target="_blank" class="card-link">
          <Image className="logos" src="facebook-icon.png"/> </a>
          <a href="https://www.instagram.com/officialplantlanta/" target="_blank" class="card-link">
          <Image className="logos" src="ig-icon.png"/></a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => this.handleClose()}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

}

export default Donate;
