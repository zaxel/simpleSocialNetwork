import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = (props) => {
  return (

    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <div className="app-wrapper-content">
          <Route path='/profile' component={Profile}/>
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div> */}
        <div className="app-wrapper-content">
          <Route path='/profile' render={()=> <Profile 
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText} 
            profilePage={props.state.profilePage}/>}/>
          <Route path='/dialogs' render={()=> <Dialogs state={props.state.dialogsPage} />}/>
          <Route path='/news' render={()=> <News/>}/>
          <Route path='/music' render={()=> <Music/>}/>
          <Route path='/settings' render={()=> <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
