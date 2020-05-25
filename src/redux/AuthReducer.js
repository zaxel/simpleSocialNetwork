
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
            isAuth: true
            
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

export const setAuthUserData = (id, login, email)=>({type: SET_USERS_DATA, data : {id, login, email}});
export const setUserProfileLogo = (src)=>({type: SET_USER_PROFILE_LOGO, profileIconSrc : src});



    
export default AuthReducer;