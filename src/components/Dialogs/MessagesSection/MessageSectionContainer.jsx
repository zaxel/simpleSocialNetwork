import {addMessageActionCreator, addUpdateNewMessageCreator} from './../../../redux/DialogsReducer';
import MessageSection from "./MessageSection";
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return {
    messages : state.dialogsPage.messages,
    dispatch: state.dispatch,
    newMessageText: state.dialogsPage.newMessageText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewMessage: (message) =>{dispatch(addUpdateNewMessageCreator(message))},
    onSendMessage: () =>{dispatch(addMessageActionCreator())}
  }
}

const MessageSectionContainer = connect(mapStateToProps, mapDispatchToProps)(MessageSection);

export default MessageSectionContainer;
