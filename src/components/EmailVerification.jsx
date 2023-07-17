import React from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {

     // handle any api calls

    navigate('#');
  };
  const handlePinChange = (event) => {
    const inputValue = event.target.value;
    event.target.value = inputValue.slice(0, 1);
  };

  return (
    <div>
        <div className='signup-go-back-btn'>
            <Link to='/signup'>
                <IoIosArrowBack size={30}/>
            </Link>
        </div>

        <div className='signup-head'>
            <p className='signup-welcome'>Welcome!!</p>
            <p className='signup-head-p'>
                Kindly fill in the six digit pin we sent to your mail
            </p>
        </div>

        <div className='verification-pins'>
            <form method='POST' onSubmit={handleVerify}>
                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>

                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>

                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>

                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>

                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>

                <input type='text' 
                className='verification-pin border'
                maxLength={1}
                onInput={handlePinChange}/>
            </form>
        </div>
    </div>
  )
}

export default EmailVerification