import React, {useEffect, useState} from 'react'
import HomeFooter from './HomeFooter';
import Profile from './Profile';
import {BsFillHouseHeartFill} from 'react-icons/bs'
import SquareLoader from "react-spinners/SquareLoader";
import Loader from './Loader';
import { formatDistanceToNow, parseISO } from 'date-fns';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = ({setUsername_param, username_param}) => {
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

  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      try{
        const response = await axios.get(`https://lp-backend-production.up.railway.app/posts/`)
        setPosts(response.data)
        setUsername_param(response.data.owner.fullname)
      } 
      catch(error){
        console.error('error fetching posts: ', error)
      }
    }
    getPosts()
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

                  <div className='feed'>
                    {posts.map((post, index) => (
                     <Link to={`/profile/${username_param}`}>
                        <div key={index} className='feed-post border'>
                          <div className='ap-header'>
                            <img src={post.profile_image_url} className='border'/>
                            <div>
                              <p className='ap-name'>{post.owner.fullname}</p>
                              <p className='ap-details'>{post.details}</p>
                              <p className='ap-location'>{post.location}</p>
                            </div>
                            <p className='ap-created-at'>
                              {formatDistanceToNow(parseISO(post.created_at), { addSuffix: true })}
                            </p>
                          </div>
                          <div className='ap-image hover:mb-[10px] hover:mt-[10px]'>
                            <img src={post.image} className='border duration-500'/>
                          </div>   
                        </div>
                      </Link>
                      
                    ))}
                    <div className='follow-more'>
                      <Link to='/discover'>
                        Follow more people and see their posts!
                      </Link>
                    </div>
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