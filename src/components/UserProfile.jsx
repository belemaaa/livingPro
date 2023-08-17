import React, {useEffect, useState} from 'react'
import HomeFooter from './HomeFooter';
import Profile from './Profile';
import {CiLocationOn} from 'react-icons/ci'
import { formatDistanceToNow, parseISO } from 'date-fns';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserProfile = ({user_id}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   // fetch profile api
   const [profileData, setProfileData] = useState([])
   useEffect(() => {
     const fetchProfile = async () => {
       try{
         const response = await axios.get(`https://lp-backend-production.up.railway.app/profile/${user_id}`)
         setProfileData(response.data)
       } 
       catch(error){
         console.error('error fetching profile data: ', error)
       }
     }
     fetchProfile()
   },[])

  return (
    <div className='overflow-hidden'>
        <div>
        <div className='user_profile'>
            <div className='hidden dk-profile border-r'>
                <Profile/>
            </div>

            <div className='user_profile_page'>
              <div className='lg:hidden signup-go-back-btn'>
                  <Link to='/profile'>
                      <IoIosArrowBack size={25}/>
                  </Link>
              </div>

              <div>
                <img src='' className='border'/>
                <p>Grace Belema</p>
                <p>Engineer</p>
                <p className='profile-location'>
                  <CiLocationOn className='location-icon'/> 
                  {profileData.location}
                </p>
              </div>

              <div>
                <p>Recent Posts</p>
                <div className='border'/>
                
              </div>
            </div>
        </div>

        <HomeFooter/>
        </div>
        

      
      
    </div>
  )
}

export default UserProfile