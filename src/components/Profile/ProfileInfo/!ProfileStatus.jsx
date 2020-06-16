import React from 'react';
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component{

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true

    });
  }
  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
    
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      });
    }
  }

  render(){
    return(
      <>
      {!this.state.editMode &&
        <div >
          <span onClick={this.activateEditMode}>{this.props.status || "----"}</span>
        </div>
      }
      {this.state.editMode &&
        <div >
          <input onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={this.deActivateEditMode}/>
        </div>
      }
      </>
    );
  }
}




export default ProfileStatus;
