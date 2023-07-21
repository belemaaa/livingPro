import React from 'react'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse18 from '../assets/images/Ellipse 18.png'
import ellipse17 from '../assets/images/Ellipse 17.png'
import boardingempty from '../assets/images/boardingempty.png';
import boardingfill from '../assets/images/boardingfill.png';
import { Link } from 'react-router-dom'

const Onboarding2 = () => {
  return (
    <div>
        <div>
            <img src={ellipse16} className='OB2ellipse16'/>
            <img src={ellipse18} className='OB2ellipse18'/>
            <img src={ellipse17} className='OB2ellipse17' />
        </div>

        <div className='onboarding-text'>
            <p className='font-semibold pt-8'>Get appartments/rooms close to you</p>
            <p className='text-xs pt-4 px-8'>Get apartments easily and within your budget that are close to you
            and whatever you want.
            </p>
        </div>

        <div className='boarding-icons'>
            <Link to='/livingPro'>
                <img src={boardingempty} className='boarding-icon rounded-am'/>
            </Link>
        
        <Link to='/onboarding2'>
                <img src={boardingfill} className='boarding-icon rounded-sm'/>
        </Link>
            
            <Link to='/onboarding3'>
                <img src={boardingempty} className='boarding-icon rounded-sm'/>
            </Link>
        </div>

        <div className='boarding-options'>
            <Link to='/signup' className='boarding-skip'>
                Skip
            </Link>

            <Link to='/onboarding3' className='boarding-next px-[70px] py-2'>
                Next
            </Link>
        </div>
        

    </div>
  )
}

export default Onboarding2