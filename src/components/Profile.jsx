import React, {useEffect, useState} from 'react'
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
import axios from 'axios';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // fetch profile api
    const [profileData, setProfileData] = useState([])
    const [userId, setUserId] = useState(null);
    
    useEffect(() => {
      const fetchProfile = async () => {
        try{
          const response = await axios.get('https://lp-backend-production.up.railway.app/profile/2')
          setProfileData(response.data)
        } 
        catch(error){
          console.error('error fetching profile data: ', error)
        }
      }
      fetchProfile()
    }, [])

  return (
    <div className='profile-page'>
        <div className='profile-header'>
          <div className='profile-image-div'>
            <img src={profileData.profile_image_url} className='border'/>
          </div>

          <div className='profile-name-div'>
            <p className='profile-name'>{profileData.fullname}</p>
            {/* <img src={verified} className='name_v'/>  */}
          </div>
          
          <p className='profile-occupation'>{profileData.occupation}</p>

          <p className='profile-location'>
            <CiLocationOn className='location-icon'/> 
            {profileData.location}
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

          <Link to='/matches' className='profile-option'>
            <img src={matches} className='profile-icon'/>
            <p className='profile-option-name'>
              Matches
            </p>
            <IoIosArrowForward className='profile-arrow-m'/>
          </Link>

          <div className='profile-border-b border'/>

          <Link to='/notifications' className='profile-option'>
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



// useEffect(() => {
//   const fetchUserInformation = async () => {
//     try {
//       const response = await axios.get('https://lp-backend-production.up.railway.app/profile');
//       setUserId(response.data.userId); 
//     } catch (error) {
//       console.error('error fetching user information: ', error);
//     }
//   };

//   fetchUserInformation();
// }, []);

// useEffect(() => {
//   const fetchProfile = async () => {
//     try {
//       if (userId) {
//         const response = await axios.get(`https://lp-backend-production.up.railway.app/profile/${userId}`);
//         setProfileData(response.data);
//       }
//     } catch (error) {
//       console.error('error fetching profile data: ', error);
//     }
//   };