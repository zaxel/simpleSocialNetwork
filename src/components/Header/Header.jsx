import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import userLogo from './../../assets/images/user.jpg';
import logo from './../../assets/images/logo.png';

const Header = (props) => {
    return (
      <header className={classes.header}>
        <div className={classes.logoContainer}>
          <img src={logo} />
          <div className={classes.NetwName}>FACEBOORK</div>
        </div>
        
        <div className={classes.loginBlock}>
          {props.isAuth 
          ? <>{props.login} 
              {props.profileIconSrc 
              ? <img src={props.profileIconSrc} alt="user logo"/> 
              : <img src={userLogo} alt="user default photo"/>}
              <span onClick={props.logout}>Logout</span>
            </> 
          : <NavLink to="/login">Login</NavLink>}
        </div>
      </header>
    );
}

export default Header;