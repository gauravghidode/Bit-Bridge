import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Avatar from '../Avatar/Avatar';
import './Navbar.css'


function Navbar(){
    var User = 12;

    return(
        <nav className='main-nav'>
            <div className="navbar">
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" id='bit-bridge-logo'></img>
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form action="">
                    <input type="text" placeholder='Search...'/>
                    <span class="material-symbols-outlined search-icon">search</span>
                </form>
                {
                    User===null?
                    <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
                    <>
                        <Avatar backgroundColor='white' px="10px" py="7px" borderRadius="50%" color="white"><Link to='/User' style={{color:"black", textDecoration:"none"}}>G</Link></Avatar>
                        <button className="nav-item nav-links">Logout</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;