import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home, Form } from "./views";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-left">
          <img
            src="https://sanbercode.com/assets/img/identity/logo-horizontal.svg"
            alt="logo"
          />
        </div>
        <div className="header-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Hire Me!</Link>
            </li>
          </ul>
          <img src="search" alt="" />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <img alt="logo" />
        </div>
        <div className="footer-center">
          <h5>Existence :</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>WhatsApp</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p> {"\u00A9"} 2020 Sami Kalammallah - SanberCode</p>
        </div>
      </div>
    </footer>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
