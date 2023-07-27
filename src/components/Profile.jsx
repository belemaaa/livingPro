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
import { Link } from 'react-router-dom';

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

          <div className='profile-name-div'>
            <p className='profile-name'>Grace Belema</p>
            <img src={verified} className='name_v'/> 
          </div>
          
          <p className='profile-occupation'>An artiste/enterpreneur</p>

          <p className='profile-location'>
            <CiLocationOn className='location-icon'/> 
            Lagos
          </p>
        </div>

        <div className='profile-options'>
          
          <div className='profile-border-b border'/>

          <Link to='#' className='profile-option'>
            <RiEditLine className='profile-icon'/>
            <p className='profile-option-name'>
              Edit Compatibilty test
            </p>
            <IoIosArrowForward className='profile-arrow-ec'/>
          </Link>

          <div className='profile-border-b border'/>

          <Link to='#' className='profile-option'>
            <img src={matches} className='profile-icon'/>
            <p className='profile-option-name'>
              Matches
            </p>
            <IoIosArrowForward className='profile-arrow-m'/>
          </Link>

          <div className='profile-border-b border'/>

          <Link to='#' className='profile-option'>
            <img src={notifications} className='profile-icon'/>
            <p className='profile-option-name'>
              Notifications
            </p>
            <IoIosArrowForward className='profile-arrow-n'/>
          </Link>
        </div>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <img src={recentPosts} className='profile-icon'/>
          <p className='profile-option-name'>
            Check Recent Posts
          </p>
          <IoIosArrowForward className='profile-arrow-cr'/>
        </Link>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <RiEditLine className='profile-icon'/>
          <p className='profile-option-name'>
            Edit Profile
          </p>
          <IoIosArrowForward className='profile-arrow-ep'/>
        </Link>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <img src={history} className='profile-icon'/>
          <p className='profile-option-name'>
            History and Reviews
          </p>
          <IoIosArrowForward className='profile-arrow-h'/>
        </Link>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <TbSettings className='profile-icon'/>
          <p className='profile-option-name'>
            Settings
          </p>
          <IoIosArrowForward className='profile-arrow-s'/>
        </Link>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <img src={blueVerified} className='profile-icon'/>
          <p className='profile-option-name text-[#296240]'>
            Verification
          </p>
          <IoIosArrowForward className='profile-arrow-v'/>
        </Link>

        <div className='profile-border-b border'/>

        <Link to='#' className='profile-option'>
          <img src={logout} className='profile-icon'/>
          <p className='profile-option-name text-[#FF0000]'>
            Log out
          </p>
          <IoIosArrowForward className='profile-arrow-l'/>
        </Link>

        <div className='profile-border-b border'/>

        <div className='md:hidden'>
          <ProfileFooter/>
        </div>
        
    </div>
  )
}

export default Profile