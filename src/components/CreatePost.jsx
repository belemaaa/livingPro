import React, {useEffect} from 'react'
import PostFooter from './PostFooter';

const CreatePost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='post-page'>
      <div>Create Post</div>

      <PostFooter/>
    </div>
  )
}

export default CreatePost