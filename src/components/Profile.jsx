import React, {useEffect} from 'react'
import ProfileFooter from './ProfileFooter';
import woman from '../assets/images/womanDP.png'
import verified from '../assets/images/ic_baseline-verified.png'
import {CiLocationOn} from 'react-icons/ci'

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='profile-page'>
        <div>
            <img src={woman} className='profile_image' />
            <p>Grace Belema 
              <span>
                <img src={verified}/>
              </span></p>
            <p>An artiste/enterpreneur</p>
            <p><CiLocationOn/> Lagos</p>
        </div>

        <div>
          
        </div>

        <div className='md:hidden'>
          <ProfileFooter/>
        </div>
        
    </div>
  )
}

export default Profile