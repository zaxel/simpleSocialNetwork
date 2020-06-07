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

    return (dispatch) =>{
      let promise = dispatch(setUserAuthBlock());
      // dispatch(somethingElse());
      // dispatch(somethingElse());

      Promise.all([promise])
        .then(()=>{
        dispatch(initializingSuccess());
      });
    }
}


    
export default AppReducer;