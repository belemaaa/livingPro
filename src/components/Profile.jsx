import React, {useEffect} from 'react'
import ProfileFooter from './ProfileFooter';
import woman from '../assets/images/womanDP.png'
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
          <div>
            <RiEditLine/>
            <p>Edit Compatibilty test</p>
            <IoIosArrowForward/>
          </div>

          <div className='profile-border-b'/>

          <div>
            <img src={matches}/>
            <p>Matches</p>
            <IoIosArrowForward/>
          </div>

          <div className='profile-border-b'/>

          <div>
            <img src={notifications}/>
            <p>Notifications</p>
            <IoIosArrowForward/>
          </div>
        </div>

        <div className='profile-border-b'/>

        <div>
          <img src={recentPosts} />
          <p>Check Recent Posts</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div>
          <RiEditLine />
          <p>Edit Profile</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div>
          <img src={history} />
          <p>History and Reviews</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div>
          <TbSettings/>
          <p>Settings</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div>
          <img src={blueVerified} />
          <p>Verification</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div>
          <img src={logout} />
          <p>Log out</p>
          <IoIosArrowForward/>
        </div>

        <div className='profile-border-b'/>

        <div className='md:hidden'>
          <ProfileFooter/>
        </div>
        
    </div>
  )
}

export default Profile