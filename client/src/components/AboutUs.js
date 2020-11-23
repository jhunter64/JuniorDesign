import React from 'react';
import { Modal, Jumbotron, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/AboutUs.css';
import axios from 'axios'


class AboutUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          events: "",
          missionShow: false,
          historyShow: false,
          staffShow: false,
          missionText: '',
          historyText: '',
          staffText: '',
          cols: ''
        };
        window.addEventListener("resize", this.update);
    }

    callAPI() {
        fetch("http://localhost:9000/events")
            .then(res => res.text())
            .then(res => this.setState({ events: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
        axios.post("http://localhost:9000/information/getInfo", {title: 'mission', text: this.state.missionText})
          .then(result => this.setState({
            missionText: result.data.text
          }))
          .catch(error => this.setState({
            text: "didn't work"
          }));
        axios.post("http://localhost:9000/information/getInfo", {title: 'history', text: this.state.historyText})
          .then(result => this.setState({
            historyText: result.data.text
          }))
          .catch(error => this.setState({
            text: "didn't work"
          }));
        axios.post("http://localhost:9000/information/getInfo", {title: 'staff', text: this.state.staffText})
          .then(result => this.setState({
            staffText: result.data.text
          }))
          .catch(error => this.setState({
            text: "didn't work"
          }));
          this.update();
    }

    render() {
      if (sessionStorage.getItem('isAdmin')) {
        return (
          <div>
          <Jumbotron>
          <Button variant="info" onClick={() => this.handleShow(0)}>Edit Mission</Button>
          <br></br><br></br>
          <h2 className = "text" align="left">Our Mission</h2>
          <p className = "text" align="left">
              {this.state.missionText}
          </p>
          <Modal show={this.state.missionShow} onHide={() => this.handleClose(0)} dialogClassName="aboutus-modal" backdrop="static" keyboard="true">
            <Modal.Header closeButton>
              <Modal.Title className="text-modal">Edit Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-modal">
              To edit the Mission Statement information, make changes to the text in the box below:<br></br><br></br>
              <textarea id="mission-textbox" className="update-textbox" rows="5" cols={this.state.cols}>{this.state.missionText}</textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleSave(0)}>Save Changes</Button>
              <Button variant="secondary" onClick={() => this.handleClose(0)}>Discard Changes</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.historyShow} onHide={() => this.handleClose(1)} dialogClassName="aboutus-modal" backdrop="static" keyboard="true">
            <Modal.Header closeButton>
              <Modal.Title className="text-modal">Edit Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-modal">
              To edit the History information, make changes to the text in the box below:<br></br><br></br>
              <textarea id="history-textbox" className="update-textbox" rows="5" cols={this.state.cols}>{this.state.historyText}</textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleSave(1)}>Save Changes</Button>
              <Button variant="secondary" onClick={() => this.handleClose(1)}>Discard Changes</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={this.state.staffShow} onHide={() => this.handleClose(2)} dialogClassName="aboutus-modal" backdrop="static" keyboard="true">
            <Modal.Header closeButton>
              <Modal.Title className="text-modal">Edit Information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-modal">
              To edit the Staff information, make changes to the text in the box below:<br></br><br></br>
              <textarea id="staff-textbox" className="update-textbox" rows="5" cols={this.state.cols}>{this.state.staffText}</textarea>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleSave(2)}>Save Changes</Button>
              <Button variant="secondary" onClick={() => this.handleClose(2)}>Discard Changes</Button>
            </Modal.Footer>
          </Modal>
          </Jumbotron>
          <br/><br/>
          <Button variant="info" onClick={() => this.handleShow(1)}>Edit History</Button>
          <h2>Our History</h2>
          <p> {this.state.historyText} </p>
          <Button variant="info" onClick={() => this.handleShow(2)}>Edit Staff</Button>
          <h2>Our Staff</h2>
          <p> {this.state.staffText} </p>
          <h2>Our Events</h2>
          <p>{sessionStorage.getItem("isAdmin")}</p>
          </div>
        );
      } else {
        return (
            <div>
            <Jumbotron>
            <h2 className = "text" align="left">Our Mission</h2>
            <p className = "text" align="left">
              {this.state.missionText} </p>
            </Jumbotron>
            <br/><br/>
            <h2>Our History</h2>
            <p> {this.state.historyText} </p>
            <h2>Our Staff</h2>
            <p> {this.state.staffText} </p>
            <h2>Our Events</h2>
            <p>{sessionStorage.getItem("isAdmin")}</p>
            </div>
        );
      }
    }

    handleSave(num) {
      if (num == 0) {
        axios.put("http://localhost:9000/information/", {title: 'mission', text: document.getElementById('mission-textbox').value})
          .then(result => this.setState({
            show: false,
            missionText: result.data.text
          }))
          .catch(error => this.setState({
            missionText: "didn't work"
          }));
          window.location = "/aboutus";
      } else if (num == 1) {
        axios.put("http://localhost:9000/information/", {title: 'history', text: document.getElementById('history-textbox').value})
          .then(result => this.setState({
            show: false,
            historyText: result.data.text
          }))
          .catch(error => this.setState({
            historyText: "didn't work"
          }));
          window.location = "/aboutus";
      } else if (num == 2) {
        axios.put("http://localhost:9000/information/", {title: 'staff', text: document.getElementById('staff-textbox').value})
          .then(result => this.setState({
            show: false,
            staffText: result.data.text
          }))
          .catch(error => this.setState({
            staffText: "didn't work"
          }));
          window.location = "/aboutus";
      }
    }

    handleClose(num) {
      if (num == 0) {
        this.setState({
          missionShow: false
        });
      } else if (num == 1) {
        this.setState({
          historyShow: false
        });
      } else if (num == 2) {
        this.setState({
          staffShow: false
        });
      }
    }

    handleShow(num) {
      if (num == 0) {
        this.setState({
          missionShow: true
        });
      } else if (num == 1) {
        this.setState({
          historyShow: true
        });
      } else if (num == 2) {
        this.setState({
          staffShow: true
        });
      }
    }

    update = () => {
      var width = window.innerWidth;
      width = (width * 0.1);
      this.setState({
        cols: width
      })
    }

}

export default AboutUs;
