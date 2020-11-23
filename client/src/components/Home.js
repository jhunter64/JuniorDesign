import React from 'react';
import { Modal, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Home.css';
import axios from 'axios'





class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
          show: false,
          text: '',
          cols: ''
        };
        window.addEventListener("resize", this.update);
    }

    componentDidMount() {
      axios.post("http://localhost:9000/information/getInfo", {title: 'mission', text: this.state.text})
        .then(result => this.setState({
          text: result.data.text
        }))
        .catch(error => this.setState({
          text: "didn't work"
        }));
        this.update();
    }

    render() {
        if (sessionStorage.getItem('isAdmin')) {
          return (
              <Jumbotron>
                <Button variant="info" onClick={() => this.handleShow()}>Edit</Button>
                <br></br><br></br>
                <h2 className = "text" align="center">Our Mission</h2>
                <p className = "text" align="center">
                  {this.state.text}
                </p>
                <p>
                  <a href="/aboutus"><Button variant="primary">Learn more</Button></a>
                  <br></br><br></br>
                  <Modal show={this.state.show} onHide={() => this.handleClose()} dialogClassName="update-modal" backdrop="static" keyboard="true">
                    <Modal.Header closeButton>
                      <Modal.Title className="text-modal">Edit Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-modal">To edit the information on this page, make changes to the text in the box below:<br></br><br></br>
                      <textarea id="textbox" className="update-textbox" rows="5" cols={this.state.cols}>{this.state.text}</textarea>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={() => this.handleSave()}>Save Changes</Button>
                      <Button variant="secondary" onClick={() => this.handleClose()}>Discard Changes</Button>
                    </Modal.Footer>
                  </Modal>
                </p>
              </Jumbotron>
            );
        } else {
          return (
            <Jumbotron>
              <h2 className = "text" align="center">Our Mission</h2>
              <p className = "text" align="center">
                {this.state.text}
              </p>
              <p>
                <a href="/aboutus"><Button variant="primary" style = {{color:'yellow'}}>Learn more</Button></a>
                <br></br><br></br>
              </p>
            </Jumbotron>
          );
        }
    }

    handleClose() {
      this.setState({
        show: false
      });
    }
    handleShow() {
      this.setState({
        show: true
      });
    }
    handleSave() {
      axios.put("http://localhost:9000/information/", {title: 'mission', text: document.getElementById('textbox').value})
        .then(result => this.setState({
          show: false,
          text: result.data.text
        }))
        .catch(error => this.setState({
          text: "didn't work"
        }));
        window.location = "/";
    }

    update = () => {
      var width = window.innerWidth;
      width = (width * 0.1);
      this.setState({
        cols: width
      })
    }
}

export default Home;
