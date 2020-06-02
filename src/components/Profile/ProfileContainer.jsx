import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile} from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    this.props.setProfile(userId);
  }



  render(){
    if (!this.props.isAuth) return <Redirect to={"/login"}/>
    return (
      
      <div >
        <Profile {...this.props} profile={this.props.profile} isAuth={this.props.isAuth}/>
      </div>
    );
  }
};

const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth : state.auth.isAuth
});

let ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithUrl);
