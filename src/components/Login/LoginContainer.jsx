import React from 'react';
import Login from './Login'

class LoginContainer extends React.Component{

    


    render(){
        return(
            <Login/>
        )
    }
}

const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


export default connect(mapStateToProps, {setProfile})(LoginContainer);