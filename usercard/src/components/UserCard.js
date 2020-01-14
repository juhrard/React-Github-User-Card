import React from "react";

const userCardStyle = {
  width: '500px',
  height: '700px',
  background: 'grey',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '5px',
  margin: '50px'
}

function UserCard({user}) {
  return (
    <>
      <div style={userCardStyle} key={user.id} className="user">
        <img style={{width: '90%', borderRadius: '5px'}} src={user.avatar_url} alt={user.login} />
        <div>
          <h3>{user.name}</h3>
          <p>{user.login}</p>
        </div>
      </div>
    </>
  );
}

export default UserCard;