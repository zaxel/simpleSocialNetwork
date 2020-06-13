import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import SidebarReducer from './SidebarReducer';
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';
import { reducer as formReducer } from 'redux-form';
import AppReducer from './AppReducer';



let reducersBatch = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer,
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducersBatch, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;