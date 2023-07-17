import React, {useRef} from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  const navigate = useNavigate();
  const handleVerify = () => {

     // handle any api calls

    navigate('/about');
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
                {Array.from({ length: 6 }, (_, index) => (
                    <input
                        key={index}
                        type='text'
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