import React from 'react'
import '../assets/css/styles.css'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const EmailVerification = () => {
  return (
    <div>
        <div className='signup-go-back-btn'>
            <Link to='/signup'>
                <IoIosArrowBack size={30}/>
            </Link>
        </div>

        <div className='signup-head'>
            <p className='signup-welcome'>Welcome!!</p>
            <p className='signup-head-p'>Kindly fill in these details to create an account and find what you need</p>
        </div>
    </div>
  )
}

export default EmailVerification