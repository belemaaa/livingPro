import React, {useState} from 'react'
import Profile from './Profile.jsx'
import InboxFooter from './InboxFooter'

const Chat = () => {
  return (
    <div>
        <div className='hidden md:flex dk-profile border-r'>
          <Profile/>
        </div>

        <div className='chat-page'>
            <p>Chat page</p>
        </div>

        <InboxFooter/>
    </div>
  )
}

export default Chat