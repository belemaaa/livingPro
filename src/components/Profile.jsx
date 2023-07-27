import React, {useEffect} from 'react'
import ProfileFooter from './ProfileFooter';
import woman from '../assets/images/Rectangle-52.png'
import verified from '../assets/images/ic_baseline-verified.png'
import {CiLocationOn} from 'react-icons/ci'
import {RiEditLine} from 'react-icons/ri'
import {IoIosArrowForward} from 'react-icons/io'
import {TbSettings} from 'react-icons/tb'
import matches from '../assets/images/matches.png'
import notifications from '../assets/images/notifications.png'
import recentPosts from '../assets/images/recentPosts.png'
import history from '../assets/images/history.png'
import logout from '../assets/images/logout.png'
import blueVerified from '../assets/images/blueVerified.png'

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='profile-page'>
        <div className='profile-header'>
          <div className='profile-image-div'>
            <img src={woman} className='profile_image'/>
          </div>
          <p className='profile_name'>Grace Belema 
            <span>
              <img src={verified} className='name_v'/>
            </span></p>
          <p className='profile-occupation'>An artiste/enterpreneur</p>
          <p className='profile-location'>
            <CiLocationOn className='location-icon'/> 
            Lagos
          </p>
        </div>

        <div className='profile-options'>
          <div className='profile-option'>
            <RiEditLine className='profle-icon'/>
            <p className='profile-option-name'>
              Edit Compatibilty test
            </p>
            <IoIosArrowForward className='profile-arrow-f'/>
          </div>

          <div className='profile-border-b'/>

          <div className='profile-option'>
            <img src={matches} className='profile-icon'/>
            <p className='profile-option-name'>
              Matches
            </p>
            <IoIosArrowForward className='profile-arrow-f'/>
          </div>

          <div className='profile-border-b'/>

          <div className='profile-option'>
            <img src={notifications} className='profile-icon'/>
            <p className='profile-option-name'>
              Notifications
            </p>
            <IoIosArrowForward className='profile-arrow-f'/>
          </div>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <img src={recentPosts} className='profile-icon'/>
          <p className='profile-option-name'>
            Check Recent Posts
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <RiEditLine className='profile-icon'/>
          <p className='profile-option-name'>
            Edit Profile
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <img src={history} className='profile-icon'/>
          <p className='profile-option-name'>
            History and Reviews
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <TbSettings className='profile-icon'/>
          <p className='profile-option-name'>
            Settings
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <img src={blueVerified} className='profile-icon'/>
          <p className='profile-option-name'>
            Verification
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='profile-option'>
          <img src={logout} className='profile-icon'/>
          <p className='profile-option-name'>
            Log out
          </p>
          <IoIosArrowForward className='profile-arrow-f'/>
        </div>

        <div className='profile-border-b'/>

        <div className='md:hidden'>
          <ProfileFooter/>
        </div>
        
    </div>
  )
}

export default Profile