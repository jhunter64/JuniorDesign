import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Volunteer from './components/Volunteer';
import SignUpConfirmation from './components/SignUpConfirmation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {

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
                        <Route path="/volunteer" component={Volunteer}>
                            <Volunteer/>
                        </Route>
                        <Route path='/signupconfirmation'>
                            <SignUpConfirmation/>
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
