import React, { Component } from "react";
import {connect} from 'react-redux';

import {getRecommended, requestUser} from './../../../ducks/userDashboard';


class Recommended extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.getRecommended();
        this.props.requestUser();
    }
    render() {
        console.log(this.props)
        // const recommendedFriends = map over this.props.recommended 
        const recommendedFriends = this.props.recommended.map ( (cur, ind) => (
            <div className="Recommended_parent content-container" key={ind} >
                <img src="https://robohash.org/me"/>
                <div className="Recommended_name_container" >
                    <span>{cur.name}</span>
                    <br/>
                    <span className="Recommended_name_container" >{cur.lastname}</span>
                    <button className="Recommended_btn orange-btn" >
                        Add Friend
                    </button>
                </div>
            </div>
            )
        )


        return (
            <div className="Dashboard_recommended_users_child" >
                {recommendedFriends}
            </div>
            
        )
    }

}

const mapStateToProps = state => state;
export default connect(mapStateToProps, {getRecommended, requestUser}) (Recommended);

// add mapstatetoprops and method to export statement to use redux