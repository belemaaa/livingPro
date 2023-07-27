import React, {useRef, useEffect, useState} from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Signup from './Signup';

const EmailVerification = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [code, setCode] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();
    const { fullname, email, password } = props;


    const handleVerify = async (e) => {
        e.preventDefault();
      
        try {
          const codeValue = code.join('');
          const requestBody = {
            code: codeValue,
            fullname: fullname,
            email: email,
            password: password,
          };
      
          console.log('Data being sent to the API:', requestBody);
      
          const response = await fetch('https://lp-backend-production.up.railway.app/signup/confirm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody),
          });
      
          if (response.status === 200) {
            console.log('validation successful')
            navigate('/compatibility_test_1');
          } else {
            console.log('an error occurred');
          }
        } catch (error) {
          console.error('Error during code verification:', error);
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
        <div className='email-page'>
            <div className='signup-go-back-btn'>
                <Link to='/signup'>
                    <IoIosArrowBack size={25}/>
                </Link>
            </div>

            <div className='ev-div'>
                <div className='signup-head'>
                    <p className='signup-welcome'>Welcome!!</p>
                    <p className='signup-head-p'>
                        Kindly fill in the six digit pin we sent to your mail
                    </p>
                </div>

                <div className='verification-pins'>
                    {loginError && <p className='loginError'>{loginError}</p>}
                    <form method='POST' onSubmit={handleVerify} value={code}>
                        {Array.from({ length: 6 }, (_, index) => (
                            <input
                            key={index}
                            value={code[index] || ''}
                            onChange={(e) => {
                              const newCode = [...code];
                              newCode[index] = e.target.value;
                              setCode(newCode);
                            }}
                            type='number'
                            className='verification-pin border'
                            maxLength={1}
                            ref={(el) => (inputRefs.current[index] = el)}
                            onInput={(event) => handlePinChange(event, index)}
                            required
                            />
                        ))}

                        <button type='submit' className='email-verify-btn'  >
                            Verify
                        </button>
                    </form>
                </div>
            </div>
        
        </div>
    )
}

export default EmailVerification