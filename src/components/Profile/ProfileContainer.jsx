import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile, setUserStatus, updateUserStatus} from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId){userId=8531}

    this.props.setProfile(userId);
    this.props.setUserStatus(userId);
  }



  render(){
    return (
      
      <div >
        <Profile {...this.props} 
        profile={this.props.profile} 
        isAuth={this.props.isAuth} 
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        />
      </div>
    );
  }
};


const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});




export default compose(
  connect(mapStateToProps, {setProfile, setUserStatus, updateUserStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);