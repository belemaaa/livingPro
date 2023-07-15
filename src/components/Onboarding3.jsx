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

        <div className='onboarding1-text'>
            <p className='font-semibold pt-8'>Get appartments/rooms close to you</p>
            <p className='text-sm pt-4'>Get apartments easily and within your budget that are close to you
            and whatever you want.
            </p>
        </div>

        {/* <div className='mt-12'>
            <Link to='/onboarding2' className='mr-10'>Previous</Link>
        </div> */}
    </div>
  )
}

export default Onboarding3