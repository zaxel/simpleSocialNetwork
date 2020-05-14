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
    },
  },
  getState(){
    return this._state;
  },
  _callSubscriber() {
    console.log('state changed');
  },
  addPost() {
    let newPost = {
      id: 6,
      likes: 0,
      post: this._state.profilePage.newPostText
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newPostText){
    this._state.profilePage.newPostText = newPostText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}
window.store = store;
export default store;
