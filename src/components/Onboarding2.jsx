import React from 'react'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse18 from '../assets/images/Ellipse 18.png'
import ellipse17 from '../assets/images/Ellipse 17.png'
import { Link } from 'react-router-dom'

const Onboarding2 = () => {
  return (
    <div>
        <div>
            <img src={ellipse16} className='OB2ellipse16'/>
            <img src={ellipse18} className='OB2ellipse18'/>
            <img src={ellipse17} className='OB2ellipse17' />
        </div>

        <div className='onboarding1-text'>
            <p className='font-semibold pt-8'>Post Your Readiness</p>
            <p className='text-sm pt-4'>Find verified tenants by listing your
            apartments or rooms for rent or sale.
            </p>
        </div>

        <div className='mt-12'>
            <Link to='/' className='mr-10'>Previous</Link>
            <Link to='/onboarding3'>Next</Link>
        </div>
        

    </div>
  )
}

export default Onboarding2