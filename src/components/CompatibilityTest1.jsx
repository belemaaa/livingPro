import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest1 = () => {
    const personalityTestBtns = [
        {id:1, text:'Patient'},
        {id:2, text:'Funny'},
        {id:3, text:'Strict'},
        {id:4, text:'Organized'},
        {id:5, text:'Neat'},
        {id:6, text:'Straightforward'},
        {id:7, text:'Trustworthy'},
        {id:8, text:'Creative'},
        {id:9, text:'Introvert'},
        {id:10, text:'Extrovert'},
        {id:11, text:'Optimistc'},
        {id:12, text:'Egocentric'},
        {id:13, text:'Self aware'},
        {id:14, text:'Honest'},
        {id:15, text:'Generous'},
        {id:16, text:'Logical'},
        {id:17, text:'Emotional'},
        {id:18, text:'Stubborn'},
        {id:19, text:'Playful'},
    ]

  return (
    <div>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/about'>
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

        <p className='personality'>Personality</p>
        <div className='border'></div>
    </div>
  )
}

export default CompatibilityTest1