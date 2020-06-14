import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import { compose } from "redux";
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/AppReducer';
import Preloader from "./components/common/Preloader/Preloader";
import {BrowserRouter} from "react-router-dom";
import store from './redux/ReduxStore';
import {withSuspense} from './hoc/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./components/News/News'));



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
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer, {store: this.props.store})}
          />
          <Route
            path="/dialogs"
            render={withSuspense(DialogsContainer, {store: this.props.store})}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
      // </BrowserRouter>
    );
  }
  
};

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
  // withAuthRedirect
)(App);

const SocNetApp = () =>{
  return <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer store={store} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default SocNetApp;