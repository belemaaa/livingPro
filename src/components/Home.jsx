import React, {useEffect} from 'react'
import HomeFooter from './HomeFooter';
import Profile from './Profile';
import {BsFillHouseHeartFill} from 'react-icons/bs'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className='home'>
          <div className='hidden md:flex dk-profile border-r'>
            <Profile/>
          </div>

          {/* <div className='grid-border border-r'></div> */}

          <div className='home-page'>
            <div className='home-icon-bg w-screen'>
              <BsFillHouseHeartFill size={35} className='lp-home-icon'/>
            </div>
          </div>
      </div>

      <HomeFooter/>
    </div>
  )
}

export default Home