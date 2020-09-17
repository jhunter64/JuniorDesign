import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/events")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <NavBar>
                </NavBar>
                <Router>
                    <Switch>
                        <Route path="/loginpage">
                            <LoginPage />
                        </Route>
                        <Route path="/signup">
                            <SignUpPage />
                        </Route>
                        <Route path="/contactus">
                            <ContactUs/>
                        </Route>
                        <Route path="/aboutus">
                            <AboutUs/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            <p>RESPONSE: {this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;