import React from 'react';
import {followAC, unFollowAC, setUsersAC, setCurPageAC, setTotalUsersCountAC} from './../../redux/UsersReducer'
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    

    componentDidMount = () =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //debugger;
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            //debugger;
            this.props.setUser(response.data.items);
            
        });
    }

    render (){

        

        return <Users totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                /> 
            
        
           
    }
}


let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    //   posts: state.profilePage.posts,
    //   newPostText: state.profilePage.newPostText
    }
  }
  let mapDispatchToProps = (dispatch) =>{
    return{
        follow : (id) => {
            dispatch(followAC(id))
        },
        unFollow : (id) => {
            dispatch(unFollowAC(id))
        },
        setUser : (users) => {
            dispatch(setUsersAC(users))
        },
        setCurPage : (pageNumber) => {
            dispatch(setCurPageAC(pageNumber))
        },
        setTotalUsersCount : (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        
    //   UpdateNewPostText: (text) => {dispatch(addUpdateNewPostCreator(text))},
    //   addPost: () => {dispatch(addPostActionCreator())}
    }
  }
  
  


export default connect (mapStateToProps, mapDispatchToProps)(UsersContainer);