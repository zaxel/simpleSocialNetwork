import React from 'react';
import {follow, unFollow, setUser, setCurPage, setTotalUsersCount, toggleIsFetching} from './../../redux/UsersReducer'
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component {

    

    componentDidMount = () =>{
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            //debugger;
            this.props.toggleIsFetching(false);
            this.props.setUser(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            //debugger;
            this.props.toggleIsFetching(false);
            this.props.setUser(data.items);
            
        });
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
        isFetching: state.usersPage.isFetching
    }
}

  
  


export default connect (mapStateToProps, {follow, unFollow, setUser, setCurPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);