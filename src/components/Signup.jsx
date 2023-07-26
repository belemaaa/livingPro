import React, {useState, useEffect, useRef} from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import GoogleFrame from '../assets/images/GoogleFrame.png'
import axios from 'axios'

const Signup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]  = useState('')
  const [code, setCode] = useState('')
  const [showCodeVerification, setShowCodeVerification] = useState(false);
  const [signupData, setSignupData] = useState(null);
  const [loginError, setLoginError] = useState('')

  // fetching signup api
  const handleCreateAccount = async (e) => {
    e.preventDefault()

    const headers={
      'Content-Type': 'application/json',
    }
    const response = await fetch('https://lp-backend-production.up.railway.app/signup', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
      }),
    });
    if (response.status === 200){
      console.log('signup was successful')
      // Store the signup data in state
      setSignupData({ fullname, email, password });
      setShowCodeVerification(true);
    }
    else if(response.status === 409){
      setLoginError('Email already exists. Please log in.')
    }
    else{
      setLoginError('an error occurred.')
      console.log('an error occurred');
    }  
  };

  
  // fetching code verification api
  const handleVerify = async (e) => {
      e.preventDefault()

      const headers={
          'Content-Type': 'application/json'
      }
      const requestBody = {
        code: code,
        signupData: signupData,
      };
      const response = await fetch('https://lp-backend-production.up.railway.app/signup/confirm', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody),
      });
      if (response.status === 200){
          console.log('verification successful')
          navigate('/about')
      }
      else{
          console.log('an error occurred')
          setLoginError('Invalid input. Please confirm the code sent to your mail.')
          setCode('')
      }
    };

  const inputRefs = useRef([]);
  const handlePinChange = (event, index) => {
      const pin = event.target.value;
      const nextIndex = index + 1;

      // focus on the next input field
      if (pin && nextIndex < inputRefs.current.length) {
      inputRefs.current[nextIndex].focus();
      }
  };


  return (
    <div className='signup-page overflow-hidden'>
      <div className='signup-go-back-btn'>
        <Link to='/onboarding3'>
            <IoIosArrowBack size={25}/>
        </Link>
      </div>

      {showCodeVerification ? (
        <div className='ev-div'>
          <div className='signup-head'>
              <p className='signup-welcome'>Welcome!!</p>
              <p className='signup-head-p'>
                  Kindly fill in the six digit pin we sent to your mail
              </p>
          </div>

          <div className='verification-pins'>
              {loginError && <p className='loginError'>{loginError}</p>}
              <form method='POST' onSubmit={handleVerify}>
                {Array.from({ length: 6 }, (_, index) => (
                    <input
                        key={index}
                        value={code[index] || ''}
                        onChange={(e) => {
                          const newCode = [...code];
                          newCode[index] = e.target.value;
                          setCode(newCode);
                        }}
                        type='text'
                        className='verification-pin border'
                        maxLength={1}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onInput={(event) => handlePinChange(event, index)}
                        required
                    />
                ))}

                <button type='submit' className='email-verify-btn'>
                    Verify
                </button>
              </form>
          </div>
        </div>
      ): (
        <div className='signup-div'>
          <div className='signup-head'>
            <p className='signup-welcome'>Welcome!!</p>
            <p className='signup-head-p'>Kindly fill in these details to create an account and find what you need</p>
          </div>

          <div className='signup-form-div'>
            {loginError && <p className='loginError'>{loginError}</p>}
            <form method='POST' className='signup-form' onSubmit={handleCreateAccount}>
              <input 
                type='text' 
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                placeholder='Enter your Full name' 
                required
                className='signup-form-input-box border'
                autoComplete='off'
              />
              
              <br/>
              <input type='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Email Address' 
                required
                className='signup-form-input-box border'
                autoComplete='off'
              />

              <br/>
              <input type='password' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your Password' 
                required
                className='signup-form-input-box border'
                autoComplete='off'
              />

              <div className='flex flex-row'>
                <label for='Remember me' className='RememberMe'>
                  Remember me
                </label>
                <div className='RM-checkbox'>
                  <input type='checkbox' name='RememberMe'/>
                </div>
              </div>

              <br/>
              <button type='submit' className='create-account-btn'>
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
      
      )}

      

      
    </div>
  )

}

export default Signup


