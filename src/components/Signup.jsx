import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import GoogleFrame from '../assets/images/GoogleFrame.png'

const Signup = () => {
  return (
    <div>
      <div>
        <Link to='/onboarding3'>
            <IoIosArrowBack className='signup-go-back-btn'/>
        </Link>
      </div>

      <div>
        <p>Welcome!!</p>
        <p>Kindly fill in these details to create an account ad find what you need</p>
      </div>

      <div>
        <form method='POST' className='signup-form'>
          <input type='text' name='name' placeholder='Enter your Full name' required/>
          <input type='email' name='email' placeholder='Enter your Email Address' required/>
          <input type='password' name='password' placeholder='Eter your Password' required/>

          <label for='Remember me'>Remember me</label>
          <input type='checkbox' name='RememberMe'/>

          <button type='submit'>Create Account</button>
        </form>
      </div>

      <div>
        <p>You can create an account with</p>
        <div>
          <Link to='#'>
            <img src={GoogleFrame}/>
          </Link>
        </div>
      </div>

      <p>Not new here? Please 
        <span>
        <Link to='/login'>Log in</Link>
        </span>
      </p>
    </div>
  )
}

export default Signup