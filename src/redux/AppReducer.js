import {usersAPI, authAPI} from '../api/api';
import {setUserAuthBlock} from './AuthReducer'

const SET_INITIALIZING = 'SET-INITIALIZING';


let initialiseState = {
    initialized: false
}

const AppReducer = (state = initialiseState, action) => {
   
    switch(action.type){
       case SET_INITIALIZING:
        return {
            
            ...state, 
            initialized: true
            
        };
        default:
          return state;

    }
}

export const initializingSuccess = ()=>({type: SET_INITIALIZING});


export const initializeApp = () => {

    return async (dispatch) =>{
      let promise = dispatch(setUserAuthBlock());
      // dispatch(somethingElse());
      // dispatch(somethingElse());

      await Promise.all([promise])
        dispatch(initializingSuccess());
    }
}


    
export default AppReducer;