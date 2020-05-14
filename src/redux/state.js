const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
  _state : {
    profilePage: {
      posts: [
        { id: 1, likes: 12, post: "Hi! How are you?" },
        { id: 2, likes: 122, post: "It s my first post." },
        { id: 3, likes: 1, post: "Gatsby is the best way to" },
        { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
        { id: 5, likes: 3, post: "We recommend them to more experienced users" },
      ],
      newPostText: 'some test from state'
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "Are you Ok?" },
        { id: 3, message: "Please let me know. Be kind!" },
        { id: 4, message: "Thanks< I'm allright!" },
        { id: 5, message: "Ohh, thanks god!" },
        { id: 6, message: "Handle backend logic or databases;" },
        { id: 7, message: "Under the hood, it uses Babel and webpack, but you don’t need to know anything about them." },
      ],
      dialogs: [
        { id: 1, name: "Mark" },
        { id: 2, name: "John" },
        { id: 3, name: "Sarah" },
        { id: 4, name: "Jessie" },
        { id: 5, name: "Andrew" },
      ],
      newMessageText: 'default message text from state'
    },
  },
  _callSubscriber() {
    console.log('state changed');
  },
  
  getState(){
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    if(action.type === ADD_POST){
      let newPost = {
        id: 6,
        likes: 0,
        post: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } 
    
    else if(action.type === SEND_MESSAGE){
      let newMessage = {
        id: 8,
        message: this._state.dialogsPage.newMessageText
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
      this._state.dialogsPage.newMessageText = action.newMessageText;
      this._callSubscriber(this._state);
    }
  }
}


// export const addPostActionCreator = ()=>{
//   return {
//     type: ADD_POST
//   }
// }
export const addPostActionCreator = ()=>({ type: ADD_POST })

export const addUpdateNewPostCreator = (text) => 
  ({type: UPDATE_NEW_POST_TEXT, 
    newPostText :text})


export const addMessageActionCreator = ()=>({ type: SEND_MESSAGE })

export const addUpdateNewMessageCreator = (message) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, 
    newMessageText :message})



window.store = store;
export default store;
