import React from "react";
import Dialogs from './Dialogs'
import { connect } from "react-redux";
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from "redux";

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

// let AuthRedirectComponent = withAuthRedirect(DialogsContainer);



let mapStateToProps = (state) => {
  return{
      store: state.dialogsPage,
      dialogs : state.dialogsPage.dialogs
  }
}


export default compose(
  connect (mapStateToProps, {}),
  withAuthRedirect
  )(DialogsContainer);


// export default connect (mapStateToProps, {})(AuthRedirectComponent);