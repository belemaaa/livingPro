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
  const [apartments, setApartments] = useState(false)
  const [apResult, setApResult] = useState([])
  const [match, setMatch] = useState(false)
  const [matchResult, setMatchResult] = useState([])
  const [searchError, setSearchError] = useState('')


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleSearchApi = async (e) => {
    e.preventDefault()
    if (searchQuery.trim() === '') {
      setSearchResult([]);
      return;
    }
    const response = await fetch(`https://lp-backend-production.up.railway.app/discover/?search_filter=${searchQuery}`)
    const data = await response.json()

    if (response !== []){
      setSearchResult(data)
    }
    else{
      setSearchResult([])
      setSearchError('No results found.')
      console.log('Invalid search')
    }
  }

  const handleApartmentApi = async(e) => {
    e.preventDefault()
  
    const response = await fetch('https://lp-backend-production.up.railway.app/discover/apartments')
    const data = await response.json()
    setApResult(data)
  }

  const handleMatchesApi = async(e) => {
    e.preventDefault()

    const response = await fetch('https://lp-backend-production.up.railway.app/discover/match')
    const data = await response.json()
    setMatchResult(data)

    if(response.status !== 200){
      console.log('an error occurred')
    }
  }

  return (
    <div className=''>
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
                  autoCorrect='off'
                />
                <button type='submit'></button>
              </div>
            </form>

            {searchQuery.length > 0 && (
              <div>
                {searchError && <p>{searchError}</p>}
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
              <div className='apartments-filter'>
                <form onSubmit={handleApartmentApi}>
                  <button type='submit' onClick={(e) => setApartments(!apartments)} className='filter-btn'>
                    {apartments ? 
                      <div>
                        <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }}>
                          Apartments
                        </p>
                      </div>
                      :
                      <p  className='border'>
                        Apartments
                      </p>
                    }
                  </button>
                </form>
                {apartments && (
                  <div>
                    {apResult.map((item, index) => (
                      <div key={index}>
                        <div>
                          <p>{item.profile_image_url}</p>
                          <div>
                            <p>{item.fullname}</p>
                            <p>{item.details}</p>
                            <p>{item.location}</p>
                          </div>
                          <p>{item.created_at}</p>
                        </div>
                        <div>
                          <img src={item.image}/>
                        </div>   
                      </div>
                    ))}
                  </div>
                )}        
              </div>

              <div className='matches-filter'>
                <form onSubmit={handleMatchesApi}>
                  <button type='submit' onClick={(e) => setMatch(!match)} className='filter-btn'>
                    {match ? 
                      <div>
                        <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }}>
                          Matches
                        </p>
                      </div>
                      :
                      <p  className='border'>
                        Matches
                      </p>
                    }
                  </button>
                </form>
                {match && (
                  <div>
                    {matchResult.map((item, index) => (
                      <div>
                        
                      </div>
                    ))}
                  </div>
                )}        
              </div>
            </div>
          </div>

       </div>

       <DiscoverFooter/>
    </div>
  )
}

export default Discover