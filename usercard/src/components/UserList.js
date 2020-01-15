import React from 'react';

import UserCard from './UserCard';

const userListStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'space-evenly'
}

function UserList(props) {
  return(
    <>
      <div style={userListStyles}>
        {props.users.map(user => (
          <UserCard user={user}/>
        ))}
      </div>
    </>
  )
}

export default UserList;