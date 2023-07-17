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
    </div>
  )
}

export default AboutInfo