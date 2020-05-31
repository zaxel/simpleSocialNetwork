import { useCallback } from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';


let initialiseState = {
    users: [
        //{ userId: 1, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: true, fullName: "Alex B", status: "I am happy", location: {country: "UK", city: "Glasgow" }},
        //{ userId: 2, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Joss N", status: "Yo yo yo", location: {country: "UK", city: "London" }},
        //{ userId: 3, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Mark N", status: "Dancing every day", location: {country: "France", city: "Paris" }},
        //{ userId: 4, userPhotoUrl: 'https://farm4.staticflickr.com/3704/10544706395_652766edde_c.jpg', followed: false, fullName: "Steave C", status: "enjoing my holydays", location: {country: "Germani", city: "Berlin" }},
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
        
      ],
      pageSize: 100,
      totalUsersCount: 0,
      currentPage: 1,
      isFetching: false,
      isFollowingInProgress: []
}

const UsersReducer = (state = initialiseState, action) => {
    switch(action.type){
       case FOLLOW:
        return {
            ...state, 
            //users: [...state.users],
            users: state.users.map( u => {
                if (u.id === action.id){
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
                if (u.id === action.id){
                    return {...u, followed: false}
                } 
                return u;
            })
        };

        case SET_USERS:
            return {
                ...state, 
                users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, 
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, 
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state, 
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state, 
                isFollowingInProgress: action.isInProgress 
                ? [...state.isFollowingInProgress, action.id]
                : state.isFollowingInProgress.filter(id => id != action.id)
            };

        default:
            return state;
    }

    

    
}

export const follow = (id)=>({type: FOLLOW, id});
export const unFollow = (id)=>({type: UNFOLLOW, id});
export const setUser = (users) => ({type: SET_USERS, users});
export const setCurPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingInProgress = (isInProgress, id) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isInProgress, id});


    
export default UsersReducer;