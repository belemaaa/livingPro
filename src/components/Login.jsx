import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import GoogleFrame from '../assets/images/GoogleFrame.png'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
  
       // handle any api calls
  
      navigate('/home');
    };
  
    return (
      <div>
        <div className='signup-go-back-btn'>
          <Link to='/onboarding3'>
              <IoIosArrowBack size={30}/>
          </Link>
        </div>
  
        <div className='signup-head'>
          <p className='signup-welcome'>Welcome!!</p>
          <p className='signup-head-p'>Kindly fill in these details to create an account and find what you need</p>
        </div>
  
        <div className='signup-form-div'>
          <form method='POST' className='signup-form' onSubmit={handleLogin}>
            <input type='email' 
            name='email' 
            placeholder='Enter your Email Address' 
            required
            className='signup-form-input-box border'
            autoComplete='off'
            />
  
            <input type='password' 
            name='password' 
            placeholder='Enter your Password' 
            required
            className='signup-form-input-box border'
            autoComplete='off'
            />
  
            <div>
                <Link to='#'>
                    Forgot passoword?
                </Link>
            </div>
  
            <br/>
            <button type='submit' className='create-account-btn'
            >
              Create Account
            </button>
          </form>
        </div>
  
        <div className='google-auth-div'>
          <p className='google-auth-p'>
            You can create an account with
          </p>
          <div>
            <Link to='#'>
              <img src={GoogleFrame} className='google-frame'/>
            </Link>
          </div>
        </div>
  
        <p className='login-option'>Not new here? Please 
          <span className='login'>
          <Link to='/login' className='signup-login-link'> Log in</Link>
          </span>
        </p>
  
        
      </div>
    )
}

export default Login