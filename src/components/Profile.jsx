import React, {useEffect} from 'react'
import ProfileFooter from './ProfileFooter';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='profile-page'>
        <div>
            Profile
        </div>
        <div>
          fvwefwyfeferygfeahrfbegfvev erfvebverebvcv
          fvevfbergfvbe febfefberfe
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum hic, 
          vel ipsa dolores veniam, in incidunt, iure cumque architecto optio magni nisi rem! 
          Exercitationem maxime culpa rerum deserunt. Itaque eligendi sapiente ad. Distinctio rem, 
          voluptas similique aut culpa eaque odit dicta omnis accusamus veniam excepturi dolore laudantium recusandae aliquid.
        </div>

        <div className='md:hidden'>
          <ProfileFooter/>
        </div>
        
    </div>
  )
}

export default Profile