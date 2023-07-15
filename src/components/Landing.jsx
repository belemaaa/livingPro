import React from 'react'
import '../assets/css/styles.css'
import {BsFillHouseHeartFill} from 'react-icons/bs'

const Landing = () => {
  return (
    <div className='landing-bg h-screen'>
        <div className='landing-text h-screen w-full px-24 flex'>
            <BsFillHouseHeartFill size={35} className='lp-landing-icon' />
            <p className='living-pro-text'>LivingPro</p>
        </div>
    </div>
  )
}

export default Landing