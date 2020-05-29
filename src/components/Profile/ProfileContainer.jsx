import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';
import {profileAPI} from './../../api/api'


class ProfileContainer extends React.Component {

  componentDidMount(){
    // debugger;
      let userId = this.props.match.params.userId;
      if(!userId){userId=2}
      profileAPI.getUserProfile(userId).then(data => {
            // debugger;
            this.props.setUserProfile(data);
        });
  }



  render(){
    return (
      <div >
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
};

const mapStateToProps = (state) =>({
    profile: state.profilePage.profile
  
});

let ProfileContainerWithUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl);
