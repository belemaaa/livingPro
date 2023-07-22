import React, { useState } from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import GoogleFrame from '../assets/images/GoogleFrame.png'
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword]  = useState('')

    const handleLogin = async (e) => {
      e.preventDefault()
  
      try{
        const headers={
          'Content-Type': 'multipart/form-data',
        }
        const response = await axios.post('https://lp-backend-production.up.railway.app/login',
        {
          username: username,
          password: password
        },
        {headers: headers}
        )
        if (response.status === 200){
          console.log('login was successful')
          navigate('/home')
        }
      } catch(error){
        console.error('Error received: ', error)
      }
    }
  
    return (
      <div>
        <div className='signup-go-back-btn'>
          <Link to='/signup'>
              <IoIosArrowBack size={25}/>
          </Link>
        </div>
  
        <div className='signup-head'>
          <p className='signup-welcome'>Welcome!!</p>
          <p className='signup-head-p'>Kindly fill in these details to create an account and find what you need</p>
        </div>
  
        <div className='signup-form-div'>
          <form method='POST' className='signup-form' onSubmit={handleLogin}>
            <input type='email' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter your Email Address' 
            required
            className='signup-form-input-box border'
            autoComplete='off'
            />
  
            <input type='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your Password' 
            required
            className='signup-form-input-box border'
            autoComplete='off'
            />
  
            <div className='forgot-password-btn'>
                <Link to='#'>
                    Forgot Passoword?
                </Link>
            </div>
  
            <br/>
            <button type='submit' className='create-account-btn'
            >
                Log in
            </button>
          </form>
        </div>
  
        <div className='google-auth-div'>
          <p className='google-auth-p'>
            You can log in with
          </p>
          <div>
            <Link to='#'>
              <img src={GoogleFrame} className='google-frame'/>
            </Link>
          </div>
        </div>
  
        <p className='create-account-option'>New here? Please 
          <span className=''>
          <Link to='/signup' className='signup-create-account-link'> Create an Account</Link>
          </span>
        </p>
  
        
      </div>
    )
}

export default Login