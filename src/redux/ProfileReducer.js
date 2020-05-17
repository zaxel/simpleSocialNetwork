const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialiseState = {
    posts: [
        { id: 1, likes: 12, post: "Hi! How are you?" },
        { id: 2, likes: 122, post: "It s my first post." },
        { id: 3, likes: 1, post: "Gatsby is the best way to" },
        { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
        { id: 5, likes: 3, post: "We recommend them to more experienced users" },
      ],
      newPostText: 'some test from state'
}
const ProfileReducer = (state = initialiseState, action) => {
    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id: 6,
                likes: 0,
                post: state.newPostText}
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }
        default:
            return state;
    }

    

    
}

export const addPostActionCreator = ()=>({ type: ADD_POST })

export const addUpdateNewPostCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, 
    newPostText :text})


    
export default ProfileReducer;