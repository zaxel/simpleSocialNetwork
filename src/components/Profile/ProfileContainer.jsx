import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from './../../redux/ProfileReducer';


class ProfileContainer extends React.Component {

  componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/9`).then(response => {
            // debugger;
            this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
