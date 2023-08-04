import React, {useEffect, useState} from 'react'
import HomeFooter from './HomeFooter';
import Profile from './Profile';
import {BsFillHouseHeartFill} from 'react-icons/bs'
import SquareLoader from "react-spinners/SquareLoader";
import Loader from './Loader';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
  }, [])

  return (
    <div className='overflow-hidden'>
      {
        loading ?
          <Loader/>  
        :
          <div>
            <div className='home'>
                <div className='hidden dk-profile border-r'>
                  <Profile/>
                </div>

                <div className='home-page'>
                  <div className='home-icon-bg w-screen'>
                    <BsFillHouseHeartFill size={35} className='lp-home-icon'/>
                  </div>
                </div>
            </div>

            <HomeFooter/>
          </div>
        
      }
      
      
    </div>
  )
}

export default Home