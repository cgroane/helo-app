import React, { Component } from "react";

import "./LandingPage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.handlelogin = this.handlelogin.bind(this);
  }

  handlelogin() {
    window.location.href = "http://localhost:3001/api/login";
    //confirm this links to correct auth0 location
  }

  render() {
    return (
      <div className="background">
        <div className="wrapper">
          <div className="helo-image-container" />
          <h1 id="landing-title">Helo</h1>
          <button id="login-button" onClick={this.handlelogin}>
            Login/Register
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
