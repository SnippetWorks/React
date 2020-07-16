import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import TodosListing from "./TodosListing";
import ErrorComponent from "./ErrorComponent";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="#">
            TODOS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav justify-right">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/todos">
            <TodosListing />
          </Route>
          <Route path="/">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default HeaderComponent;
