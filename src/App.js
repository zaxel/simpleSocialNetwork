import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import { compose } from "redux";
import {connect} from 'react-redux';
import {initializeApp} from './redux/AppReducer';
import Preloader from "./components/common/Preloader/Preloader";



class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialized){return <Preloader/>}
    
    return (
      // <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          
          <div className="app-wrapper-content">
            <Route path='/profile/:userId?' render={()=> <ProfileContainer 
              store={this.props.store}/>}/>
            <Route path='/dialogs' render={()=> <DialogsContainer 
              store={this.props.store} />}/>
            <Route path='/news' render={()=> <News/>}/>
            <Route path='/music' render={()=> <Music/>}/>
            <Route path='/users' render={()=> <UsersContainer/>}/>
            <Route path='/settings' render={()=> <Settings/>}/>
            <Route path='/login' render={()=> <LoginPage/>}/>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
  
};

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
  // withAuthRedirect
)(App);