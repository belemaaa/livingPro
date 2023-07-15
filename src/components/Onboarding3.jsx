import React from 'react'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse8 from '../assets/images/Ellipse 18-2.png'
import ellipse17 from '../assets/images/Ellipse 17.png'
import { Link } from 'react-router-dom'

const Onboarding3 = () => {
  return (
    <div>
        <div>
            <img src={ellipse16} className='OB3ellipse16'/>
            <img src={ellipse8} className='OB3ellipse8'/>
            <img src={ellipse17} className='OB3ellipse17'/>
        </div>

        <div className='onboarding-text'>
            <p className='font-semibold pt-8'>Post Your Readiness</p>
            <p className='text-xs pt-4 px-8'>Find verified tenants by listing your
            apartments or rooms for rent or sale.
            </p>
        </div>
    </div>
    
  )
}

export default Onboarding3