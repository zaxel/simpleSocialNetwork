import {createStore, combineReducers} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "./AuthReducer";



let reducersBatch = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});

let store = createStore(reducersBatch);

window.store = store;

export default store;