import React, {useState, useEffect} from 'react'
import '../assets/css/styles.css'
import {BsFillHouseHeartFill} from 'react-icons/bs'
import Home from './Home'

const Landing = () => {
  return (
    <div className='landing-bg h-screen w-[100%]'>
        <div className='landing-text h-screen w-full px-24 flex'>
            <BsFillHouseHeartFill size={30} className='lp-landing-icon' />
            <p className='living-pro-text'>LivingPro</p>
        </div>
    </div>
  )
}

export default Landing