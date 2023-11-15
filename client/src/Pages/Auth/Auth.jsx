import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

import './Auth.css';
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth';
import { signUp, logIn } from '../../actions/auth'


const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  function check(pass){
    var flag1=0, flag2=0;
    for(var i=0;i<pass.length;i++){
      let ch=pass[i];
      flag1=flag1|| (ch >= '0' && ch <= '9')
      flag2=flag2||((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'));
    }
    return flag1&&flag2;
  }

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter Email and Password.");
    }
    let pass = [...password]
    // console.log(pass);
    if (isSignup) {
      if(!email.endsWith('@nitj.ac.in')){
        alert("Invalid email address, enter your institute email to continue")
      }
      else if (password.length < 8 || !check(pass)){
        alert("Password must contain atleast 8 characters, including atleast 1 number and 1 letter.");
      }
      else if (!name) {
        alert("Enter your name to continue");
      } else
        dispatch(signUp({ name, email, password }, navigate))
    }
    else {
      try {
        dispatch(logIn({ email, password }, navigate))
      } catch (e) {
        alert("Invalid credentials");
      }

    }
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2 '>
        {!isSignup && <img src={icon} alt='Bit Bridge' className='login-logo' />}
        <form action="" onSubmit={handleSubmit}>
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>
            </div>
            <input type="password" name='password' placeholder='Enter password' id='password' onChange={(e) => { setPassword(e.target.value) }} />
            {isSignup && <p style={{ color: "#666767", fontSize: "13px" }}>Password must contain atleast 8 characters,<br />including atleast 1 number and 1 letter.</p>}
          </label>
          {!isSignup && <p style={{ color: '#007ac6' }}>Forgot password?</p>}

          <button type='submit' className='auth-btn border-gradient border-gradient-purple grad-btn'>{isSignup ? 'Sign up' : 'Login'}</button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type='button' className='handle-switch-btn ' onClick={handleSwitch}>{!isSignup ? 'Sign up' : 'Login'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth;
