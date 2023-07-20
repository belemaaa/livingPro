import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest4 = () => {
  return (
    <div>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/compatibility_test_2'>
                    <IoIosArrowBack size={30}/>
                </Link>
            </div>
            <Link to='/home' className='compat-skip'>
                Skip
            </Link>
        </div>
        
        <p className='about-welcome'>Compatibility test</p>
        <p className='compat-p'>
            This helps make finding the right roomate easier.
            Changes can be made later.
        </p>

        <p className='personality'>Mentality/Humor</p>
        <div className='p-border border'></div>

        <p className='compat-4-upper-p'>
            Tell us something you think about a lot,
            that either bothers or amuses you.
        </p>
    </div>
  )
}

export default CompatibilityTest4