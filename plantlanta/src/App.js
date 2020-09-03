import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
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
            <Route path="/">
              <Home />
            </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
