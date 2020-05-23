import React from 'react';
import {follow, unFollow, setUser, setCurPage, setTotalUsersCount, toggleIsFetching} from './../../redux/UsersReducer'
import { connect } from "react-redux";
import * as axios from 'axios';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';


class UsersContainer extends React.Component {

    

    componentDidMount = () =>{
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //debugger;
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            //debugger;
            this.props.toggleIsFetching(false);
            this.props.setUser(response.data.items);
            
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
    //   posts: state.profilePage.posts,
    //   newPostText: state.profilePage.newPostText
    }
}
// let mapDispatchToProps = (dispatch) =>{
//   return{
//       follow : (id) => {
//           dispatch(followAC(id))
//       },
//       unFollow : (id) => {
//           dispatch(unFollowAC(id))
//       },
//       setUser : (users) => {
//           dispatch(setUsersAC(users))
//       },
//       setCurPage : (pageNumber) => {
//           dispatch(setCurPageAC(pageNumber))
//       },
//       setTotalUsersCount : (totalUsersCount) => {
//           dispatch(setTotalUsersCountAC(totalUsersCount))
//       },
//       toggleIsFetching : (isFetching) => {
//           dispatch(toggleIsFetchingAC(isFetching))
//       }
      
//   //   UpdateNewPostText: (text) => {dispatch(addUpdateNewPostCreator(text))},
//   //   addPost: () => {dispatch(addPostActionCreator())}
//   }
// }
  
  


export default connect (mapStateToProps, {follow, unFollow, setUser, setCurPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);