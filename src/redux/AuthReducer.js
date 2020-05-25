
const SET_USERS_DATA = 'SET-USERS-DATA';


let initialiseState = {
    id: null,
    login: null,
    email: null,
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

        default:
            return state;
    }
}

export const setAuthUserData = (id, login, email)=>({type: SET_USERS_DATA, data : {id, login, email}});



    
export default AuthReducer;