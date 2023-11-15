import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

import logo from '../../assets/logo.png';
import Avatar from '../Avatar/Avatar';
import './Navbar.css'
import { useEffect } from 'react';
import { setCurrentUser } from '../../actions/currentUser';

function Navbar(){
    var User = useSelector((state) => (state.currentUserReducer))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location= useLocation();

    const [searchText, setSearchText] = useState("");
    function handleSearch(e){
        console.log("searh text: "+searchText);
        console.log(location.pathname);
    }
    function handleChange(e){
        setSearchText(e.target.value);
    }

    const handleLogOut = ()=>{
        dispatch({type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    useEffect(()  =>{
        const token = User?.token
        if(token){
            const decodeToken = decode(token);
            if(decodeToken.exp * 1000 < new Date().getTime()){
                handleLogOut();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    },[])
    return(
        <nav className='main-nav'>
            
            <div className="navbar">
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo" id='bit-bridge-logo'></img>
                </Link>
                <Link to='/About' className='nav-item nav-btn'>About</Link>
                <Link to='/Contact' className='nav-item nav-btn'>Contact</Link>
                {/* <Link to='/' className='nav-item nav-btn'>Feedback</Link> */}
                <form action="">
                    <input type="text" id="search-bar" placeholder='Search...' onChange={handleChange}/>
                    <span class="material-symbols-outlined search-icon" onClick={handleSearch}>search</span>
                </form>
                {
                    User===null?
                    <Link to='/Auth' className='nav-item nav-links'>Login</Link>:
                    <>
                        <div id="avatar">
                            <Avatar><Link to={`/Users/${User?.result._id}`} style={{color:"black", textDecoration:"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        </div>
                        <button className="nav-item nav-links" onClick={handleLogOut}>Logout</button>
                    </>
                }
            </div>
        </nav>
    )
}

export default Navbar;