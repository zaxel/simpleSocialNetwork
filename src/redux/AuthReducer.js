import {usersAPI, authAPI, securityAPI} from './../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'SET-USERS-DATA';
const SET_USER_PROFILE_LOGO = 'SET-USER-PROFILE-LOGO';
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS';


let initialiseState = {
    id: null,
    login: null,
    email: null,
    profileIconSrc: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null

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
        
        case GET_CAPTCHA_URL_SUCCESS:
        return {
            
            ...state, 
            captchaUrl: action.url
            
        };
        
        default:
            return state;
            

    }
}

export const setAuthUserData = (id, login, email, isAuth)=>({type: SET_USERS_DATA, data : {id, login, email, isAuth}});
export const setUserProfileLogo = (src)=>({type: SET_USER_PROFILE_LOGO, profileIconSrc : src});
export const getCaptchaUrlSaccess = (url)=>({type: GET_CAPTCHA_URL_SUCCESS, url});

export const setUserAuthBlock = () => {
  return async (dispatch) => {
    const getUserLogos = async (id) => {
      const data = await usersAPI.getUserLogo(id);
        dispatch(setUserProfileLogo(data.photos.small));
    };
    const data = await authAPI.checkIfLogged()
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
        getUserLogos(id);
      }
  };
};

export const login = (email, pass, remember, captchaInput) => {
  return async (dispatch) => {
    const data = await authAPI.login(email, pass, remember, captchaInput);
    if (data.resultCode === 0) {
      dispatch(setUserAuthBlock());
      dispatch(getCaptchaUrlSaccess(null));
    } else {
      if (data.resultCode === 10){
        dispatch(getCaptchaUrl());
      }
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      {
        dispatch(stopSubmit("login", { _error: message }));
      }
    }
  };
};

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;


      dispatch(getCaptchaUrlSaccess(captchaUrl));
    
  };
};

export const logout = () => {
  return async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  };
};

    
export default AuthReducer;