import React, {useEffect} from 'react'
import DiscoverFooter from './DiscoverFooter'

const Discover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='discover-page'>
       <div>

        Discover   

       </div>

       <DiscoverFooter/>
    </div>
  )
}

export default Discover