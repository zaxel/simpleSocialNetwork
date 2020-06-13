import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = (props) => {
  return (
    <div>
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />
      {props.users.map((u) => (
        <User
          key={u.id}
          user={u}
          isFollowingInProgress={props.isFollowingInProgress}
          unFollow={props.unFollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};


export default Users;