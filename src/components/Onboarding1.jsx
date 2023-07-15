import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse15 from '../assets/images/Ellipse 15.jpg'
import ellipse17 from '../assets/images/Ellipse 17.png'

const Onboarding1 = () => {
  return (
    <div>
        <div>
            <img src={ellipse16} className='ellipse16'/>
            <img src={ellipse15} className='ellipse15'/>
            <img src={ellipse17} className='ellipse17' />
        </div>

        <div className='onboarding1-text'>
            <p className='font-semibold pt-8'>Find Your Roomate</p>
            <p className='text-sm pt-4'>Find like-minded individuals to interact with and find the
                roomate you've been looking for or needing.
            </p>
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Onboarding1