import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AboutInfo = () => {
  return (
    <div>
        <div className='signup-go-back-btn'>
            <Link to='/email-verification'>
                <IoIosArrowBack size={30}/>
            </Link>
        </div>

        <div>
          <form method='POST'>
            <label>What's your full name? <span>*</span></label>
            <input type='text' name='name' 
            className='about-form-input-box'
            required/>

            <label>What do you do? (Occupation) <span>*</span></label>
            <input type='text' name='name' 
            className='about-form-input-box'
            required/>

            <label>Age? <span>*</span></label>
            <input type='text' name='name' 
            className='about-form-input-box'
            required/>

            <label>Date of Birth? <span>*</span></label>
            <input type='date' 
            name='name' 
            className='about-form-input-box'
            required/>
          </form>
        </div>
    </div>
  )
}

export default AboutInfo