import React, {useEffect, useState} from 'react'
import DiscoverFooter from './DiscoverFooter'
import Profile from './Profile';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io';

const Discover = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchApi = async (e) => {
    e.preventDefault()

    const response = await fetch(`https://lp-backend-production.up.railway.app/discover/?search_filter=${searchQuery}`)
    const data = await response.json()
    setSearchResult(data)
  
  }

  return (
    <div className='overflow-hidden'>
       <div className=''>
          <div className='hidden dk-profile border-r'>
            <Profile/>
          </div>

          <div className='discover-page'>
            <div className='signup-go-back-btn'>
              <Link to='/signup'>
                  <IoIosArrowBack size={25}/>
              </Link>
            </div>

            <form onSubmit={handleSearchApi}>
              <div>
                <input 
                  className='discover-search-bar border'
                  type='text'
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                <button type='submit'><IoIosArrowForward/></button>
              </div>
            </form>

            {searchQuery.length > 0 && (
              <div>
                {searchResult.map((item, index) => (
                  <div key={index}>
                      <img src={item.profile_image_url}/>
                      <p>{item.fullname}</p>
                      <p>{item.occupation}</p>
                  </div>
                ))}
              </div>
            )}
            
            

            <div className='discover-options'>
              <div>
                <p>Apartment</p>
              </div>
            </div>
          </div>

       </div>

       <DiscoverFooter/>
    </div>
  )
}

export default Discover