import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData, setUserProfileLogo} from './../../redux/AuthReducer';
import {ifLoggedInAPI, userLogoAPI} from './../../api/api';

class HeaderContainer extends React.Component {

  componentDidMount(){
    ifLoggedInAPI.checkIfLogged().then(data => {
    if(data.resultCode === 0){
      let {id, login, email} = data.data;
      this.props.setAuthUserData(id, login, email);
      getUserLogos(id);
    }
      // debugger;
  });
  const getUserLogos = (id) => {
    userLogoAPI.getUserLogo (id)
    .then(data => {
      this.props.setUserProfileLogo(data.photos.small);
    });
  }
    
    
   
    
  }
  
  

  render(){
    return (
        <Header {...this.props}/>
      );
      debugger;
  }
}

const mapStateToProps = (state) =>({ 
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.id,
  profileIconSrc: state.auth.profileIconSrc
});


export default connect(mapStateToProps, {setAuthUserData, setUserProfileLogo})(HeaderContainer);