const SEND_MESSAGE = 'SEND-MESSAGE';

let initialiseState = {
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
}

const DialogsReducer = (state = initialiseState, action) => {

  switch(action.type){
      case SEND_MESSAGE:
        let newMessage = {
          id: 8,
          message: action.message
        };
        return{
          ...state,
        messages: [...state.messages, newMessage],
        };
      
      default: 
          return state;
  }
}

export const addMessageActionCreator = (message)=>({ type: SEND_MESSAGE, message})

 
export default DialogsReducer;