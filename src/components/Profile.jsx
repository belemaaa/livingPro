import React, {useEffect} from 'react'
import ProfileFooter from './ProfileFooter';

const Profile = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <div>
            Profile
        </div>

        <ProfileFooter/>
    </div>
  )
}

export default Profile