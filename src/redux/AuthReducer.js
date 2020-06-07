import {usersAPI, authAPI} from './../api/api';

const SET_USERS_DATA = 'SET-USERS-DATA';
const SET_USER_PROFILE_LOGO = 'SET-USER-PROFILE-LOGO';


let initialiseState = {
    id: null,
    login: null,
    email: null,
    profileIconSrc: null,
    isFetching: false,
    isAuth: false

}

const AuthReducer = (state = initialiseState, action) => {
   
    switch(action.type){
       case SET_USERS_DATA:
        return {
            
            ...state, 
            ...action.data,
            
        };

        case SET_USER_PROFILE_LOGO:
        return {
            
            ...state, 
            profileIconSrc: action.profileIconSrc
            
        };
        
        default:
            return state;
            

    }
}

export const setAuthUserData = (id, login, email, isAuth)=>({type: SET_USERS_DATA, data : {id, login, email, isAuth}});
export const setUserProfileLogo = (src)=>({type: SET_USER_PROFILE_LOGO, profileIconSrc : src});

export const setUserAuthBlock = () => {

    return (dispatch) =>{
        authAPI.checkIfLogged().then(data => {
            if(data.resultCode === 0){
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, login, email, true));
              getUserLogos(id);
            }
            // debugger;
          });
          const getUserLogos = (id) => {
            usersAPI.getUserLogo (id)
            .then(data => {
              dispatch(setUserProfileLogo(data.photos.small));
            });
          }
    }
}
export const login = (email, pass, remember) => {

    return (dispatch) =>{
      authAPI.login(email, pass, remember).then(data => {
            if(data.resultCode === 0){
              dispatch(setUserAuthBlock());
            }
            // debugger;
          });
          
    }
}
export const logout = () => {

    return (dispatch) =>{
      authAPI.logout().then(data => {
            if(data.resultCode === 0){
              dispatch(setAuthUserData(null, null, null, false));
            }
            // debugger;
          });
          
    }
}

    
export default AuthReducer;