import React, {useState} from 'react'
import './Auth.css';
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth';

const Auth = () => {

  const [isSignup, setIsSignup] = useState(false);

  const handleSwitch = ()=>{
    setIsSignup(!isSignup)
  }

  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth/>}
      <div className='auth-container-2 '>
        {!isSignup && <img src={icon} alt='Bit Bridge' className='login-logo' /> }
        <form action="">
          {
            isSignup && (
              <label htmlFor='name'>
                <h4>Display Name</h4>
                <input type="text" name="name" id="name" placeholder='Enter your name'/>
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' placeholder='Enter your email' />
          </label>
          <label htmlFor="password">
            <div>
              <h4>Password</h4>
            </div>
            <input type="password" name='password' placeholder ='Enter password' id='password' />
            {isSignup && <p style={{color: "#666767", fontSize: "13px"}}>Password must contain atleast 8 characters,<br/>including atleast 1 number and 1 letter.</p>}
          </label>
              {!isSignup && <p style={{color: '#007ac6'}}>Forgot password?</p>}
          
          <button type='submit' className='auth-btn border-gradient border-gradient-purple '>{isSignup? 'Sign up': 'Login'}</button>
        </form>
        <p>
          {isSignup? "Already have an account?" : "Don't have an account?"}
          <button type='button' className='handle-switch-btn ' onClick={handleSwitch}>{!isSignup? 'Sign up': 'Login'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth;
