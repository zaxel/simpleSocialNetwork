import React from 'react';
import {follow, unFollow, setCurPage, getUsers} from './../../redux/UsersReducer'
import { connect } from "react-redux";
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    

    componentDidMount = () =>{
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render (){
        return <>
       {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
                /> 
           </>
    }
}


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

  
  
export default compose(
    connect (mapStateToProps, {follow, unFollow, setCurPage, getUsers}),
    withAuthRedirect
)(UsersContainer);

