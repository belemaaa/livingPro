import React, {useState, useEffect} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest4 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate()
    const handleProceed = () => {
        navigate('/home')
    }

  return (
    <div>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/compatibility_test_3'>
                    <IoIosArrowBack size={25}/>
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

        <form method='POST' onSubmit={handleProceed}>
            <textarea className='compat-4-textarea border'/>

            <button type='submit' className='compat-proceed-btn-M'>
                Done
            </button>
        </form>
    </div>
  )
}

export default CompatibilityTest4