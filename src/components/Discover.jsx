import React, {useEffect} from 'react'
import DiscoverFooter from './DiscoverFooter'
import Profile from './Profile';

const Discover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='overflow-hidden'>
       <div className=''>
          <div className='hidden md:flex dk-profile border-r'>
            <Profile/>
          </div>

          <div className='discover-page'>
            Discover
          </div>

       </div>

       <DiscoverFooter/>
    </div>
  )
}

export default Discover