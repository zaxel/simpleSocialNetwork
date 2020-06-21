import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile, setUserStatus, updateUserStatus, savePhoto, updateProfile} from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from "redux";

class ProfileContainer extends React.Component {

  refreshProfile(){
    let userId = this.props.match.params.userId;
    if(!userId){
      userId=this.props.authorizedUserId
      if(!userId){
        this.props.history.push('/login')
      }
    }

    this.props.setProfile(userId);
    this.props.setUserStatus(userId);
  }

  componentDidMount(){
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(this.props.match.params.userId != prevProps.match.params.userId)
    this.refreshProfile();
  }



  render(){
    return (
      
      <div >
        <Profile {...this.props} 
        isOwner = {!this.props.match.params.userId}
        // profile={this.props.profile} 
        // isAuth={this.props.isAuth} 
        // status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
        updateProfile={this.props.updateProfile}
        authorizedUserId={this.props.authorizedUserId}
        />
      </div>
    );
  }
};


const mapStateToProps = (state) =>({
    
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
});




export default compose(
  connect(mapStateToProps, {
    setProfile, setUserStatus, updateUserStatus, 
    savePhoto, updateProfile}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer);