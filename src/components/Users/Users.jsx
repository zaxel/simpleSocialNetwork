import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import classes from './Users.module.css'

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <User 
          key={u.id}
          user={u}
          isFollowingInProgress={props.isFollowingInProgress}
          unFollow={props.unFollow}
          follow={props.follow}
        />
      ))}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
    </div>
  );
};


export default Users;