import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import User from './User'

const UsersList = () => {

    const users=useSelector((state) => (
        state.usersReducer
    ))

  return (
    <div className='userList-container'>
        users.map((user) => (
            <User user = {user} key ={user?._id}></User>
        ))
    </div>
  )
}

export default UsersList