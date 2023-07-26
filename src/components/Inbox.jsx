import React, {useEffect} from 'react'
import InboxFooter from './InboxFooter.jsx'
import Profile from './Profile.jsx';

const Inbox = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className='overflow-hidden'>
        <div className='hidden md:flex dk-profile border-r'>
          <Profile/>
        </div>

        <div className='inbox-page'>
            Inbox
        </div>

        <InboxFooter/>
    </div>
  )
}

export default Inbox