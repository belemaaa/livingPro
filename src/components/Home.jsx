import React, {useEffect} from 'react'
import HomeFooter from './HomeFooter';
import {BsFillHouseHeartFill} from 'react-icons/bs'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='home-page'>
        <div className='home-icon-bg w-screen'>
          <BsFillHouseHeartFill size={35} className='lp-home-icon'/>
        </div>
      </div>

      <HomeFooter/>
    </div>
  )
}

export default Home