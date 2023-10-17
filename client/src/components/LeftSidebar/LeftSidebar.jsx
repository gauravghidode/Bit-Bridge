import React from 'react'
import './LeftSidebar.css';
import {NavLink} from 'react-router-dom'
import Globe from '../../assets/globe-png-9.png'

const LeftSidebar = () => {
  return (
    <label className='toggle-container'>
                <input id='toggle-checkbox' type="checkbox" name="" />
                <div className='toggle'>
                    <span className='top-line common-line'></span>
                    <span className='middle-line common-line'></span>
                    <span className='bottom-line common-line'></span>
                </div>
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/' className='side-nav-links' activeClass='active'>
                    <p>Home</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeClass='active'>
                        <img src={Globe} class='web-icon'alt="G" />
                        <p style={{paddingLeft: "10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeClass='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeClass='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
    </label>
  )
}

export default LeftSidebar