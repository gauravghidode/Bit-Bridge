import React from 'react'
import './Users.css'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import UsersList from './UsersList'

const Users = () => {

    const location=useLocation();

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            {
                location.pathname==='/Users'?
                <UsersList user = {user}></UsersList>:
                <>
                </>
            }
        </div>
    </div>
  )
}

export default Users