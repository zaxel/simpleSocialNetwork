import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
  return (

    
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        {/* <div className="app-wrapper-content">
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div> */}
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={()=> <ProfileContainer 
            store={props.store}/>}/>
          <Route path='/dialogs' render={()=> <DialogsContainer 
            store={props.store} />}/>
          <Route path='/news' render={()=> <News/>}/>
          <Route path='/music' render={()=> <Music/>}/>
          <Route path='/users' render={()=> <UsersContainer/>}/>
          <Route path='/settings' render={()=> <Settings/>}/>
          <Route path='/login' render={()=> <LoginPage/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
