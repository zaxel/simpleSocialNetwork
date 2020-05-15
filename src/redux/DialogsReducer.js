const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const DialogsReducer = (state, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                message: state.newMessageText
              };
              state.messages.push(newMessage);
              state.newMessageText = '';
              return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default: 
            return state;
    }
}

export const addMessageActionCreator = ()=>({ type: SEND_MESSAGE })

export const addUpdateNewMessageCreator = (message) => 
  ({type: UPDATE_NEW_MESSAGE_TEXT, 
    newMessageText :message})


    
export default DialogsReducer;