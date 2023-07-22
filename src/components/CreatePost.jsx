import React, {useEffect} from 'react'
import PostFooter from './PostFooter';
import needApartment from '../assets/images/needApartment.png'
import needRoomate from '../assets/images/needRoomate.png'
import newApartment from '../assets/images/needApartment.png'
import { Link } from 'react-router-dom';

const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='post-page'>
        <p>I want to post</p>

      <div>
        <div>
          <Link to='#'>
            <img src={needApartment}/>
          </Link>
        </div>

        <div>
          <Link to='#'>
            <img src={needRoomate}/>
          </Link>
        </div>
      </div>

      <div>
        <div>
          <Link to='#'>
            <img src={needApartment}/>
          </Link>
        </div>

        <div>
          <Link to='#'>
            <img src={needRoomate}/>
          </Link>
        </div>
      </div>

      <PostFooter/>
    </div>
  )
}

export default CreatePost