import {usersAPI, profileAPI} from './../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

let initialiseState = {
    posts: [
        { id: 1, likes: 12, post: "Hi! How are you?" },
        { id: 2, likes: 122, post: "It s my first post." },
        { id: 3, likes: 1, post: "Gatsby is the best way to" },
        { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
        { id: 5, likes: 3, post: "We recommend them to more experienced users" },
      ],
      profile: null,
      status: ''
}
const ProfileReducer = (state = initialiseState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 6,
                likes: 0,
                post: action.text}
            return{
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return{
                ...state,
                status: action.status
            };
        case DELETE_POST:
            return{
                ...state,
                posts: state.posts.filter(p => p.id != action.postId),
            };
        case SAVE_PHOTO_SUCCESS:
            return{
                ...state,
                profile: {...state.profile, photos: action.photos},
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (text)=>({ type: ADD_POST , text})
export const deletePostActionCreator = (postId)=>({ type: DELETE_POST , postId})
export const addUpdateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText :text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_USER_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const setProfile = (userId) => {
    return async (dispatch) =>{
      const data = await profileAPI.getUserProfile(userId);
            dispatch(setUserProfile(data));
}}

export const setUserStatus = (userId) => {
    return async (dispatch) =>{
        const data = await profileAPI.getUserStatus(userId);
            dispatch(setStatus(data));
}}

export const updateUserStatus = (status) => {
    return async (dispatch) =>{
    const data = await profileAPI.updateStatuse(status);
        if(data.resultCode === 0){
            dispatch(setStatus(status));
        }
} } 

export const savePhoto = (file) => {
    return async (dispatch) =>{
        const data = await profileAPI.savePhoto(file);
        if(data.resultCode === 0){
            dispatch(savePhotoSuccess(data.data.photos));
        }
    }
}




export const updateProfile = (profile) => {
    return async (dispatch) =>{
    const data = await profileAPI.updateProfile(profile);
        if(data.resultCode === 0){
            dispatch(setProfile(profile.userId));
        }
} } 
    
export default ProfileReducer;