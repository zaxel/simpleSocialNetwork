// let postData = [
//     { id: 1, likes: 12, post: "Hi! How are you?" },
//     { id: 2, likes: 122, post: "It s my first post." },
//     { id: 3, likes: 1, post: "Gatsby is the best way to" },
//     { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice." },
//     { id: 5, likes: 3, post: "We recommend them to more experienced users" },
//   ];

//   let dialogsData = [
//     { id: 1, name: "Mark" },
//     { id: 2, name: "John" },
//     { id: 3, name: "Sarah" },
//     { id: 4, name: "Jessie" },
//     { id: 5, name: "Andrew" },
//   ];

//   const messagesData = [
//     { id: 1, message: "Hi!" },
//     { id: 2, message: "Are you Ok?" },
//     { id: 3, message: "Please let me know. Be kind!" },
//     { id: 4, message: "Thanks< I'm allright!" },
//     { id: 5, message: "Ohh, thanks god!" },
//     { id: 6, message: "Handle backend logic or databases;" },
//     { id: 7, message: "Under the hood, it uses Babel and webpack, but you don’t need to know anything about them."
//     },
//   ];

let state = {
  profilePage: {
    postData: [
      { id: 1, likes: 12, post: "Hi! How are you?" },
      { id: 2, likes: 122, post: "It s my first post." },
      { id: 3, likes: 1, post: "Gatsby is the best way to" },
      { id: 4, likes: 65, post: "The following toolchains offer more flexibility and choice."},
      { id: 5, likes: 3, post: "We recommend them to more experienced users" },
    ],
    
  },
  dialogsPage: {
    messagesData: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "Are you Ok?" },
      { id: 3, message: "Please let me know. Be kind!" },
      { id: 4, message: "Thanks< I'm allright!" },
      { id: 5, message: "Ohh, thanks god!" },
      { id: 6, message: "Handle backend logic or databases;" },
      { id: 7, message: "Under the hood, it uses Babel and webpack, but you don’t need to know anything about them." },
    ],
    dialogsData: [
      { id: 1, name: "Mark" },
      { id: 2, name: "John" },
      { id: 3, name: "Sarah" },
      { id: 4, name: "Jessie" },
      { id: 5, name: "Andrew" },
    ],
  },
};

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 6,
    likes: 0,
    post: postMessage
  };

  state.profilePage.postData.push(newPost);
};

export default state;
