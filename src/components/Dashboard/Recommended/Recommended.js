import React, { Component } from "react";

// import {getRecommended} from './../../../ducks/userDashboard';

class Recommended extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        // this.props.getRecommended();
    }
    render() {
        // const recommendedFriends = map over this.props.recommended 
        const recommendedFriends = 
            <div className="Recommended_parent content-container" >
                <img src=""/>
                <div className="Recommended_name_container" >
                    <span>this.props.cur.firstname</span>
                    <br/>
                    <span className="Recommended_name_container" >this.props.cur.lastname</span>
                    <button className="Recommended_btn orange-btn" >
                        Add Friend
                    </button>
                </div>
            </div>


        return (
            <div className="Dashboard_recommended_users_child" >
                {recommendedFriends}
            </div>
            
        )
    }

}

// const mapStateToProps = state => {
//     const {recommended} = state;
//     return {
//         recommended
//     }
// }
export default Recommended;

// add mapstatetoprops and method to export statement to use redux