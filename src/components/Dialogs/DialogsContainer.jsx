import React from "react";
import Dialogs from './Dialogs'
import { connect } from "react-redux";

class DialogsContainer extends React.Component{
  componentDidMount(){
    
  }

  render(){
    
      
    return (
      <div >
        <Dialogs dialogs={this.props.dialogs} isAuth={this.props.isAuth}/>
      </div>
    );
  }
}

  
let mapStateToProps = (state) => {
  return{
      store: state.dialogsPage,
      dialogs : state.dialogsPage.dialogs,
      isAuth : state.auth.isAuth
  }
}





export default connect (mapStateToProps, {})(DialogsContainer);