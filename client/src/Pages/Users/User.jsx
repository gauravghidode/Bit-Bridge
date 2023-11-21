import React from 'react'
import { Link } from 'react-router-dom'
import './Users.css'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import Avatar from '../../components/Avatar/Avatar';

const User = ({user}) => {
  return (
        <Link to={`/Users/${user._id}`} className='user-profile-link'>
          <h3></h3>
          {/* {
              user.role === "student" &&
              <h3></h3>
              <Avatar backgroundColor="white" px="2px" py="2px">{user.name.charAt(0).toUpperCase()}</Avatar>
          }{
              user.role === "instructor" &&
              <Avatar backgroundColor="purple" px="2px" py="2px"><FaChalkboardTeacher /></Avatar>
          }{
              user.role === "admin" &&
              <Avatar backgroundColor="purple" px="2px" py="2px"><FaUserTie /></Avatar>
          }
            {/* <h3><FaChalkboardTeacher /></h3> */}
            {/* <h5>{user.name}</h5> */} */}
        </Link>
        
  )
}

export default User