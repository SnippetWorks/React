import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import LoginComponent from "./components/LoginComponent";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App container-fluid">
        <HeaderComponent />
        <LoginComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
