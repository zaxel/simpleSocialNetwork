import {usersAPI, profileAPI} from './../api/api';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';
const PROFILE_CHANGE_SUCCESS = 'PROFILE-CHANGE-SUCCESS';

let initialiseState = {
    posts: [
        { id: 1, likes: 12, post: "Hi! How are you?" },
        { id: 2, likes: 122, post: "It s my first post." },
        { id: 3, likes: 1, post: "Gatsby is the best way to" },
        { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
        { id: 5, likes: 3, post: "We recommend them to more experienced users" },
      ],
      profile: null,
      status: '',
      profileChangeSuccess: false
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
        case PROFILE_CHANGE_SUCCESS:
            return{
                ...state,
                profileChangeSuccess: action.profileChangeSuccess
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
export const saveProfileChangeSuccess = (profileChangeSuccess) => ({type: PROFILE_CHANGE_SUCCESS, profileChangeSuccess})

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
            dispatch(saveProfileChangeSuccess(true));
            dispatch(setProfile(profile.userId));
        }else {
            dispatch(saveProfileChangeSuccess(false));
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        {
            if(message.includes('Invalid url format')){
                const errorContact = errorChecker(profile.contacts, message);
                dispatch(stopSubmit("profile", {[errorContact]: message}));
            }else{
                dispatch(stopSubmit("profile", { _error: message }));
            }
        }
} } }
    
const errorChecker = (contacts, errorMessage) => {
        const contactWithErrorMessage = errorMessage.substring(0, errorMessage.length - 1).split('->')[1];
        console.log(contactWithErrorMessage);
        console.log(errorMessage);
        if (Object.keys(contacts).length > 0){
            const contactsArrey = Object.keys(contacts);
            const contactWithError = contactsArrey.find(contact => 
                contact.charAt(0).toUpperCase() + contact.slice(1) == contactWithErrorMessage)
             console.log(contactWithError);
             return contactWithError;
        }
  };



  // const contacts = contacts.map(contact => contact.id);

  //    const socNetworks = profile.map(function(soc){
  //         return socNetworks
  //     });
  // console.log(errorChecker);


export default ProfileReducer;