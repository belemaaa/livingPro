import React, {useEffect, useState} from 'react'
import DiscoverFooter from './DiscoverFooter'
import Profile from './Profile';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io';
import { formatDistanceToNow, parseISO } from 'date-fns';


const Discover = ({accessToken}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [apartments, setApartments] = useState(false)
  const [apResult, setApResult] = useState([])
  const [match, setMatch] = useState(false)
  const [matchResult, setMatchResult] = useState([])
  const [Error, setError] = useState('')


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
      setError('No results found.')
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
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    try {
      const response = await fetch('https://lp-backend-production.up.railway.app/discover/match', { 
        headers: headers 
      });
      const data = await response.json();
  
      if (response.status === 200) {
        setMatchResult(data);
      } else {
        console.log('An error occurred');
        setError('Please log in to view your matches.')
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
  }

  // restrict filter display to one at a time
  const apDisplay = () => {
    setApartments(!apartments)
    setMatch(false)
  }
  const matchDisplay = () => {
    setMatch(!match)
    setApartments(false)
  }

  return (
    <div className='overflow-hidden'>
        <div className='discover'>
          <div className='hidden dk-profile border-r'>
            <Profile/>
          </div>

          <div className='discover-page'>
            <div className='signup-go-back-btn lg:hidden'>
              <Link to='/home'>
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
            <div className='discover-options'>
              <div className='apartments-filter'>
                <form onSubmit={handleApartmentApi}>
                  <button type='submit' onClick={apDisplay} className='filter-btn '>
                    {apartments ? 
                      <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }}>
                        Apartments
                      </p>

                      :
                      <p  className='border'>
                        Apartments
                      </p>
                    }
                  </button>
                </form>     
              </div>
              <div className='matches-filter'>
                <form onSubmit={handleMatchesApi}>
                  <button type='submit' onClick={matchDisplay} className='matches filter-btn'>
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
              </div>
            </div>

            {/* render search results - these are displayed here to set the order of execution */}
            {searchQuery.length > 0 && (
              <div>
                {Error && <p>{Error}</p>}
                {searchResult.map((item, index) => (
                  <div key={index} className='search-result border-b'>
                      <img src={item.profile_image_url} className='border'/>
                      <div>
                        <p className='search-result-name'>{item.fullname}</p>
                        <p className='search-result-occ'>{item.occupation}</p>
                      </div>
                  </div>
                ))}
              </div>
            )}
            {apartments && (
              <div className='aps'>
                {apResult.map((item, index) => (
                  <div key={index} className='apartment border-t border-b'>
                    <div className='ap-header'>
                      <img src={item.profile_image_url} className='border'/>
                      <div>
                        <p className='ap-name'>{item.owner.fullname}</p>
                        <p className='ap-details'>{item.details}</p>
                        <p className='ap-location'>{item.location}</p>
                      </div>
                      <p className='ap-created-at'>
                        {formatDistanceToNow(parseISO(item.created_at), { addSuffix: true })}
                      </p>
                    </div>
                    <div className='ap-image hover:mb-[10px] hover:mt-[10px]'>
                      <img src={item.image} className='border duration-500'/>
                    </div>   
                  </div>
                ))}
              </div>
            )}
            {match && (
              <div>
                {Error && 
                <Link to='/login'>
                  <p className='Error'>{Error}</p>
                </Link>
                }
                {matchResult.map((item, index) => (
                  <div key={index} className='search-result border-b'>
                    <img src={item.profile_image_url} className='border'/>
                    <div>
                      <p className='search-result-name'>{item.fullname}</p>
                      <p className='search-result-occ'>{item.occupation}</p>
                    </div>
                  </div>
            
                ))}
              </div>
            )}       
          </div>

        </div>

       <DiscoverFooter/>
    </div>
  )
}

export default Discover