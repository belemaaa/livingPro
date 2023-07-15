import React from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import ellipse16 from '../assets/images/Ellipse 16.jpg'
import ellipse15 from '../assets/images/Ellipse 15.jpg'
import ellipse17 from '../assets/images/Ellipse 17.png'
import boardingempty from '../assets/images/boardingempty.png';
import boardingfill from '../assets/images/boardingfill.png';
import Onboarding2 from './Onboarding2'
import { Link } from 'react-router-dom'

const Onboarding1 = () => {
    const page2 = () =>{
        return <Onboarding2/>
    }
  return (
    <div>
        <div>
            <img src={ellipse16} className='OB1ellipse16'/>
            <img src={ellipse15} className='OB1ellipse15'/>
            <img src={ellipse17} className='OB1ellipse17' />
        </div>

        <div className='onboarding-text'>
            <p className='font-semibold pt-8'>Find Your Roomate</p>
            <p className='text-xs pt-4 px-8'>Find like-minded individuals to interact with and find the
                roomate you've been looking for or needing.
            </p>
        </div>

        <div className='boarding-icons'>
            <img src={boardingfill} className='boarding-icon rounded-am'/>
            <img src={boardingempty} className='boarding-icon rounded-sm'/>
            <img src={boardingempty} className='boarding-icon rounded-sm'/>
        </div>

        <div className='boarding-options'>
            <Link to='/home' className='boarding-skip'>
                Skip
            </Link>

            <Link to='/' className='boarding-next px-[70px] py-2'>
                Next
            </Link>
        </div>

    </div>

  )
}

export default Onboarding1