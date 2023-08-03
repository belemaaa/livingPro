import React, {useState} from 'react'
import Profile from './Profile.jsx'
import InboxFooter from './InboxFooter'
import {BsTelephone} from 'react-icons/bs'
import {BsCameraVideo} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'

import { Link } from 'react-router-dom'

const Chat = () => {
  return (
    <div>
        <div className='hidden md:flex dk-profile border-r'>
          <Profile/>
        </div>

        <div className='chat-page'>
            <div className='chat-header'>
                <div className='signup-go-back-btn'>
                    <Link to='/about'>
                        <IoIosArrowBack size={25}/>
                    </Link>
                </div>

                <div className='chat-header-title'>
                    <img src='' className='border'/>
                    <p>Grace Belema</p>
                </div>

                <div className='chat-header-icons'>
                    <BsCameraVideo className='chat-header-icon'/>
                    <BsTelephone className='chat-header-icon'/>
                </div>
            </div>
        </div>

        <InboxFooter/>
    </div>
  )
}

export default Chat