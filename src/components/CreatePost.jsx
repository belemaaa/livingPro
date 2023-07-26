import React, {useEffect} from 'react'
import PostFooter from './PostFooter';
import Profile from './Profile';
import needApartment from '../assets/images/needApartment.png'
import needRoomate from '../assets/images/needRoomate.png'
import newApartment from '../assets/images/newApartment.png'
import happyMan from '../assets/images/happyMan.png'
import { Link } from 'react-router-dom';

const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='overflow-hidden'>
      <div className='hidden md:flex dk-profile border-r'>
          <Profile/>
      </div>

      <div className='post-page'>
        <p className='post-p'>I want to post</p>

        <div className='post-images-div'>
          <div className='post-image'>
            <Link to='/start_post'>
              <img src={newApartment} className='main-post-image'/>
              <p className='post-image-p'>A New Apartment</p>
            </Link>
          </div>

          <div className='post-image'>
            <Link to='/start_post'>
              <img src={needRoomate} className='main-post-image'/>
              <p className='post-image-p'>Need a Roomate</p>
            </Link>
          </div>
        </div>

        <div className='post-images-div'>
          <div className='post-image'>
            <Link to='/start_post'>
              <img src={happyMan} className='main-post-image'/>
              <p className='post-image-p'>Got what I needed</p>
            </Link>
          </div>

          <div className='post-image'>
            <Link to='/start_post'>
              <img src={needApartment} className='main-post-image'/>
              <p className='post-image-p'>Need an Apartment</p>
            </Link>
          </div>
        </div>
      </div>
      

      <PostFooter/>
    </div>
  )
}

export default CreatePost