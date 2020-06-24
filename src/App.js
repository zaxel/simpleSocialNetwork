import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter, HashRouter, Switch, Redirect} from "react-router-dom";
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

  catchAllUnhandledErrors = () =>{
    alert('Some error ocurred!!!');
  }

  componentDidMount = () => {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }

  componentWillUnmount = () => {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render(){
    if(!this.props.initialized){return <Preloader/>}
    
    return (
      // <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Switch>
          <Route exact path="/" render={() => <Redirect to={"/profile"}/>} />
            <Route
              path="/profile/:userId?"
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path="/dialogs"
              render={withSuspense(DialogsContainer)}
            />
            <Route path="/news" render={withSuspense(News)} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginPage />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
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
    <BrowserRouter >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
}

export default SocNetApp;