import {createStore, combineReducers, applyMiddleware} from 'redux';
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

const store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;