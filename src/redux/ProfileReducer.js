const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
        let newPost = {
            id: 6,
            likes: 0,
            post: state.newPostText}
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }

    

    
}

export const addPostActionCreator = ()=>({ type: ADD_POST })

export const addUpdateNewPostCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, 
    newPostText :text})


    
export default ProfileReducer;