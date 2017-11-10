import React, { Component } from "react";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div id="nav-parent">
        <div id="nav-child">
          <div id="nav-left">
            <h1>Helo</h1>
          </div>
          <div id="nav-center">
            <h2>Hey</h2>
          </div>
          <div id="nav-right">
            <h1>hey</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
