import React, {useRef, useEffect, useState} from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [code, setCode] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault()

        const headers={
            'Content-Type': 'application/json'
        }
        const response = await fetch('https://lp-backend-production.up.railway.app/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                code: code
            }),
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
                                type='text'
                                className='verification-pin border'
                                maxLength={1}
                                ref={(el) => (inputRefs.current[index] = el)}
                                onInput={(event) => handlePinChange(event, index)}
                                onChange={(e) => setCode(e.target.value)}
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


    //function to validate pin entries (saving if needed)
//   const handleVerify = (event) => {
//     event.preventDefault();

//     const pinArray = inputRefs.current.map((inputRef) => inputRef.value);
//     const pinCode = pinArray.join('');

//     // api call for verification

//     inputRefs.current.forEach((inputRef) => {
//       inputRef.value = '';
//     });
//   };