import React from 'react'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse8 from '../assets/images/Ellipse 18-2.png'
import ellipse17 from '../assets/images/Ellipse 17.png'
import boardingempty from '../assets/images/boardingempty.png';
import boardingfill from '../assets/images/boardingfill.png';
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

        <div className='boarding-icons'>
            <div className='boarding-icons'>
                <Link to='/'>
                    <img src={boardingempty} className='boarding-icon rounded-am'/>
                </Link>
            
            <Link to='/onboarding2'>
                    <img src={boardingempty} className='boarding-icon rounded-sm'/>
            </Link>
                
                <Link to='/onboarding3'>
                    <img src={boardingfill} className='boarding-icon rounded-sm'/>
                </Link>
            </div>

        </div>

        <div className='boarding-options'>
            <Link to='/home' className='boarding-skip'>
                Skip
            </Link>

            <Link to='/home' className='boarding-next px-[70px] py-2'>
                Next
            </Link>
        </div>
    </div>
    
  )
}

export default Onboarding3