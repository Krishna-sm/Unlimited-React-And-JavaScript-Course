import React from 'react'

const UserInfo = ({name,email,age}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Email: {email}</h2>
        <h3>Age: {age}</h3>
    </div>
  )
}

export default UserInfo