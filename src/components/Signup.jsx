import React from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import GoogleFrame from '../assets/images/GoogleFrame.png'

const Signup = () => {
  return (
    <div>
      <div className='signup-go-back-btn'>
        <Link to='/onboarding3'>
            <IoIosArrowBack size={30}/>
        </Link>
      </div>

      <div className='signup-head'>
        <p className='signup-welcome'>Welcome!!</p>
        <p className='signup-head-p'>Kindly fill in these details to create an account ad find what you need</p>
      </div>

      <div className='signup-form-div'>
        <form method='POST' className='signup-form'>
          <input type='text' name='name' placeholder='Enter your Full name' required/>
          <input type='email' name='email' placeholder='Enter your Email Address' required/>
          <input type='password' name='password' placeholder='Eter your Password' required/>

          <label for='Remember me'>Remember me</label>
          <input type='checkbox' name='RememberMe'/>

          <button type='submit'>Create Account</button>
        </form>
      </div>

      <div className='google-auth-div'>
        <p className='google-auth-p'>You can create an account with</p>
        <div className='google-auth'>
          <Link to='#'>
            <img src={GoogleFrame} className='google-frame'/>
          </Link>
        </div>
      </div>

      <p className='login-option'>Not new here? Please 
        <span className='login'>
        <Link to='/login'>Log in</Link>
        </span>
      </p>
    </div>
  )
}

export default Signup