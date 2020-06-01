import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {setProfile} from './../../redux/ProfileReducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    this.props.setProfile(userId);
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

export default connect(mapStateToProps, {setProfile})(ProfileContainerWithUrl);
