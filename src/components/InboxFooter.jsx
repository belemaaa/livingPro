import React, {useState} from 'react'
import {HiHome} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import {BiSolidSearch} from 'react-icons/bi'
import {BsPencilSquare} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'


const InboxFooter = () => {
    const navigateToHome = useNavigate()
    const navigateToDiscover = useNavigate()
    const navigateToPost = useNavigate()
    const navigateToInbox = useNavigate()
    const navigateToProfile = useNavigate()

    const handleHome = () => {
        navigateToHome('/home')
    }
    const handleDiscover = () => {
        navigateToDiscover('/discover')
    }
    const handlePost = () => {
        navigateToPost('/post')
    }
    const handleInbox = () => {
        navigateToInbox('/inbox')
    }
    const handleProfile = () => {
        navigateToProfile('/profile')
    }

  return (
    <div className='home-footer-div w-screen'>
        <div className='home-footer-icons border-t w-screen'>
            <div onClick={handleHome}> 
                <HiHome  size={28} className='home-footer-icon-closed'/>
                <p className='home-footer-icon-name'>
                    Home
                </p>
            </div>

            <div onClick={handleDiscover}>
                <FiSearch size={28} className='home-footer-icon-closed'/>
                <p className='home-footer-icon-name'>
                    Discover
                </p>
            </div>

            <div onClick={handlePost}> 
                <BsPencilSquare size={28} className='home-footer-icon-closed'/>
                <p className='home-footer-icon-name'>
                    Post
                </p>
            </div>

            <div onClick={handleInbox}>
                <AiFillMessage size={28} className='home-footer-icon-open'/>
                <p className='home-footer-icon-name'>
                    Inbox
                </p>
            </div>

            <div onClick={handleProfile}> 
                <CgProfile size={28} className='home-footer-icon-closed'/>
                <p className='home-footer-icon-name'>
                    Profile
                </p>
            </div>
        </div>
    </div>
  )
}

export default InboxFooter