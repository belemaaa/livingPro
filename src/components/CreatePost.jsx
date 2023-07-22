import React, {useEffect} from 'react'
import HomeFooter from './HomeFooter';

const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='post-page'>
      <div>Create Post</div>

      <HomeFooter/>
    </div>
  )
}

export default CreatePost