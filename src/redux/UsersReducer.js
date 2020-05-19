import { useCallback } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialiseState = {
    users: [
        { userId: 1, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: true, fullName: "Alex B", status: "I am happy", location: {country: "UK", city: "Glasgow" }},
        { userId: 2, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Joss N", status: "Yo yo yo", location: {country: "UK", city: "London" }},
        { userId: 3, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Mark N", status: "Dancing every day", location: {country: "France", city: "Paris" }},
        { userId: 4, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Steave C", status: "enjoing my holydays", location: {country: "Germani", city: "Berlin" }},
        // { userId: 5, followed: true, fullName: "Sarah V", status: "visit my site www.abracadabra.net", location: {country: "Ukrain", city: "Lviv" }},
        // { userId: 6, followed: false, fullName: "Sandra B", status: "sleeping", location: {country: "Ukraine", city: "Kyiv" }},
        // { userId: 7, followed: true, fullName: "Andrew S", status: "try best cookies in the Chad", location: {country: "Chad", city: "Tarkow" }},
        // { userId: 8, followed: false, fullName: "Jessie S", status: "Always Coca-Cola", location: {country: "UK", city: "London" }},
        // { userId: 9, followed: true, fullName: "Alex F", status: "Welcome friends to my page", location: {country: "UK", city: "London" }},
        // { userId: 10, followed: false, fullName: "Fred N", status: "...", location: {country: "USA", city: "New York" }},
        // { userId: 11, followed: false, fullName: "Arnold S", status: "I promice to be nice", location: {country: "USA", city: "Los Angeles" }},
        // { userId: 12, followed: true, fullName: "Jessica A", status: "Let your energy, be free", location: {country: "USA", city: "Sacramento" }},
        // { userId: 13, followed: true, fullName: "Kevin C", status: "Some statuse here", location: {country: "Ukraine", city: "Lviv" }},
        // { userId: 14, followed: true, fullName: "Ben L", status: "Badabum...", location: {country: "Belarus", city: "Minsk" }},
        
      ]
}

const UsersReducer = (state = initialiseState, action) => {
    switch(action.type){
       case FOLLOW:
        return {
            ...state, 
            //users: [...state.users],
            users: state.users.map( u => {
                if (u.userId === action.userId){
                    return {...u, followed: true}
                } 
                return u;
            })
        };

       case UNFOLLOW:
        return {
            ...state, 
            //users: [...state.users],
            users: state.users.map( u => {
                if (u.userId === action.userId){
                    return {...u, followed: false}
                } 
                return u;
            })
        };

        case SET_USERS:
            return {
                ...state, 
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }

    

    
}

export const followAC = (userId)=>({type: FOLLOW, userId});
export const unFollowAC = (userId)=>({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


    
export default UsersReducer;