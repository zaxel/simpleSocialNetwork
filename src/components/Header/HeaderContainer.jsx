import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setUserAuthBlock, logout} from './../../redux/AuthReducer';

class HeaderContainer extends React.Component {

  componentDidMount = () => {
    // usersAPI.checkIfLogged().then(data => {
    //   if(data.resultCode === 0){
    //     let {id, login, email} = data.data;
    //     this.props.setAuthUserData(id, login, email);
    //     getUserLogos(id);
    //   }
    //   // debugger;
    // });
    this.props.setUserAuthBlock();

    // const getUserLogos = (id) => {
    //   usersAPI.getUserLogo (id)
    //   .then(data => {
    //     this.props.setUserProfileLogo(data.photos.small);
    //   });
    // }
    
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


export default connect(mapStateToProps, {setUserAuthBlock, logout})(HeaderContainer);