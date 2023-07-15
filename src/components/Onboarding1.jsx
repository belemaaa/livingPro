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

        <div className='onboarding1-text'>
            <p className='font-semibold pt-8'>Find Your Roomate</p>
            <p className='text-sm pt-4'>Find like-minded individuals to interact with and find the
                roomate you've been looking for or needing.
            </p>
        </div>

        {/* <div className='flex flex-row mt-10'>
            <img src={boardingfill} 
            onClick={page2}
            className='mx-4'
            />

            <img src={boardingfill}  className='mx-4'/>
            <img src={boardingfill} className='ml-4'/>
        </div> */}
        <Link to='/onboarding2'>Next</Link>
    </div>
  )
}

export default Onboarding1