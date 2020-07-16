import React, { Component } from "react";

class FooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <p className="mt-5 mb-3 text-muted">All rights reserved.</p>
      </footer>
    );
  }
}

export default FooterComponent;
