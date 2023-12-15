import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';

import './Auth.css';
import icon from '../../assets/logo.png'
import AboutAuth from './AboutAuth';
import { signUp, logIn } from '../../actions/auth'
import toast from 'react-hot-toast';
import axios from 'axios';
import { backend_URL } from '../../api/url';


const Auth = () => {
  const urlEmail = `${backend_URL}/user/sendotp`

  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [instructor, setInstructor] = useState(false);
  const [designation, setDesignation] = useState("");
  const [role, setRole] = useState("student");
  const [otp, setOtp] = useState("123456");
  const [verify, setVerify] = useState(true);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  function check(pass) {
    var flag1 = 0, flag2 = 0;
    for (var i = 0; i < pass.length; i++) {
      let ch = pass[i];
      flag1 = flag1 || (ch >= '0' && ch <= '9')
      flag2 = flag2 || ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'));
    }
    return flag1 && flag2;
  }

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setVerify(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Enter Email and Password.");
    }
    // console.log(pass);
    if (isSignup && verify) {

      if (otp === "") {
        toast.error("Please enter valid OTP");
      } else if (instructor) {
        name = designation + " " + name;
        setRole("instructor");
        dispatch(signUp({ name, email, password, role, otp , confirmPassword}, navigate));
      }
      else
        dispatch(signUp({ name, email, password, role, otp, confirmPassword }, navigate));
    }
    else if (!isSignup) {
      try {
        dispatch(logIn({ email, password }, navigate))
      } catch (e) {
        toast.error("Invalid credentials");
        console.log(e);
      }

    }
  }

  async function funcVerify(e) {
    e.preventDefault();
    let pass = [...password]
    if (isSignup && !verify) {
      if (!email.endsWith('@nitj.ac.in')) {
        toast.error("Invalid email address, enter your institute email to continue")
      }
      else if (password.length < 8 || !check(pass)) {
        toast.error("Password must contain atleast 8 characters, including atleast 1 number and 1 letter.");
      }
      else if (!name) {
        toast.error("Enter your name to continue");
      }
      else if (password !== confirmPassword) {
        toast.error("Passwords do not match");
      }
      else {
        setVerify(true);
        const { data } = await axios.post(urlEmail, {
          email: email,
        }
        )
        console.log(data)
      }
    }
  }

  return (
    <section className='auth-section'>
      {isSignup && !verify && <AboutAuth />}
      <div className='auth-container-2 '>
        {!isSignup && <img src={icon} alt='Bit Bridge' className='login-logo' />}
        <form action="" onSubmit={handleSubmit}>
          {
            !verify &&
            <div>
              {
                instructor && isSignup &&
                <label>
                  <select name="designation" id="designation" onChange={(e) =>
                    setDesignation(document.getElementById('designation').value)}>
                    <option value="none" hidden defaultChecked>Select Designation</option>
                    <option value="Dr.">Dr</option>
                    <option value="Mr.">Mr</option>
                    <option value="Mrs.">Mrs</option>
                    <option value="Miss.">Miss</option>
                  </select>
                </label>
              }
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
              </label>
              {
                isSignup &&
                <label htmlFor="confirm-password">
                  <div>
                    <h4>Confirm Password</h4>
                  </div>
                  <input type="password" name='password' placeholder='Enter password' id='confirm-password' onChange={(e) => { setConfirmPassword(e.target.value) }} />
                  <p style={{ color: "#666767", fontSize: "13px" }}>Password must contain atleast 8 characters,<br />including atleast 1 number and 1 letter.</p>

                </label>
              }
              {
                isSignup &&
                <label>
                  <p><input id='instructor-checkbox' type='checkbox' onClick={() => {
                    setInstructor(!instructor);
                  }} />I am an instructor.</p>
                </label>
              }


              {!isSignup && <p style={{ color: '#007ac6' }}>Forgot password?</p>}
            </div>
          }
          {
            (isSignup && !verify) &&
            <button className='auth-btn border-gradient border-gradient-purple grad-btn' onClick={funcVerify}>Verify Email</button>
          }
          {
            isSignup && verify &&
            <div>
              <label htmlFor="otp">
                <h4>OTP</h4>
                <input type="otp" name='otp' id='otp' placeholder='Check your email for OTP' onChange={(e) => { setOtp(e.target.value) }} />
              </label>
              {/* <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />  }
              /> */}
              <button type='submit' className='auth-btn border-gradient border-gradient-purple grad-btn'>Sign Up</button>
            </div>

          }
          {
            !isSignup &&
            <button type='submit' className='auth-btn border-gradient border-gradient-purple grad-btn'>Login</button>
          }

        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{!isSignup ? 'Sign up' : 'Login'}</button>
        </p>
      </div>
    </section>
  )
}

export default Auth;
