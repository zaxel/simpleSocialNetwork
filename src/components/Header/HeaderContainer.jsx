import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData, setUserProfileLogo} from './../../redux/AuthReducer';


class HeaderContainer extends React.Component {

  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials: true
    }).then(response => {
      if(response.data.resultCode === 0){
        let {id, login, email} = response.data.data;
        this.props.setAuthUserData(id, login, email);
        getUserLogo(id);
      }
        // debugger;
    });
    let getUserLogo = (id) => {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
        this.props.setUserProfileLogo(response.data.photos.small);
      });
    };
   
    
  }
  
  

  render(){
    return (
        <Header {...this.props}/>
      );
      debugger;
  }
}

// getUserLogo = (id) => {
//   console.log(id);
//   // let userId = this.props.id;
//   debugger;
//   // if(!userId){userId=2}
//   //   axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
//   //       // debugger;
//   //       this.props.setUserProfile(response.data);
//   //   });
// }

const mapStateToProps = (state) =>({ 
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  profileIconSrc: state.auth.profileIconSrc
});


export default connect(mapStateToProps, {setAuthUserData, setUserProfileLogo})(HeaderContainer);