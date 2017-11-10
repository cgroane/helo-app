import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { requestUser } from "./../../ducks/userDashboard";
import "./Dashboard.css";

//import other components as necessary
import Recommended from "./Recommended/Recommended";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestUser();
    // this.props.getRecommended();
  }

  render() {
    console.log(this.props);
    return (
      // jsx here - you'll want to access user properties with this.props.user.property etc.
      <div className="Dashboard_parent_container">
        <div className="Dashboard_child_container">
          <div className="Dashboard_child_top">
              
              <div className="User_container content-container">
                  <div className="User_left">
                    <img className="User_image" src="https://robohash.org/me"/>
                  </div>
                  <div className="User_right" >
                      {this.props.user.name}
                  </div>
              </div>
              <div className="Dashboard_onboarding_container content-container" >
                <span className="open-sans" >
                Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!
                </span>
              </div>
            </div>
            

          <div className="Dashboard_recommended_parent">
            <div className="Dashboard_recommended_header">
              <span className="Dashboard_recommended_header_span open-sans">
                Recommended Friends
              </span>

              <span className="Dashboard_recommended_header_select_span open-sans">
                Sorted by
              </span>

              <select className="Dashboard_recommended_select open-sans">
                <option value="first">First Name</option>
                <option value="last">Last Name</option>
                <option value="gender">Gender</option>
                <option value="hobby">Hobby</option>
                <option value="h_color">Hair Color</option>
                <option value="e_color">Eye Color</option>
                <option value="birthday">Birthday</option>
              </select>
            </div>
            <div className="Dashboard_recommended_users_parent">
              <Recommended />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {requestUser}) (Dashboard); ;


