import React from 'react';
import {follow, unFollow, setCurPage, getUsers} from './../../redux/UsersReducer'
import { connect } from "react-redux";
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import {getUsersSelector, getPageSize, getTotalUsersCount, 
    getCurrentPage, getIsFetching, getIsFollowingInProgress} from './../../redux/UsersSelectors';
    import classes from './Users.module.css'


class UsersContainer extends React.Component {

    

    componentDidMount = () =>{
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render (){
        return <div className={classes.usersContainer}>
       {this.props.isFetching ? <Preloader/> : null}
        <Users className={classes.userCardGeneral} totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
                /> 
           </div>
    }
}


let mapStateToProps = (state) => {
    return{
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingInProgress: getIsFollowingInProgress(state)
    }
}

  
  
export default compose(
    connect (mapStateToProps, {follow, unFollow, setCurPage, getUsers}),
    // withAuthRedirect
)(UsersContainer);

