import React, {useState} from 'react'
import {HiHome} from 'react-icons/hi'
import {FiSearch} from 'react-icons/fi'
import {BiSolidSearch} from 'react-icons/bi'
import {BsPencilSquare} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'


const HomeFooter = () => {
    const navigateToHome = useNavigate()
    const navigateToDiscover = useNavigate()
    const navigateToPost = useNavigate()
    const navigateToInbox = useNavigate()
    const navigateToProfile = useNavigate()

    const [home, setHome] = useState(false)
    const [discover, setDiscover] = useState(false)
    const [post, setPost] = useState(false)
    const [inbox, setInbox] = useState(false)
    const [profile, setProfile] = useState(false)

    const handleHome = () => {
        setHome(true)
        setDiscover(false)
        setPost(false)
        setInbox(false)
        setProfile(false)

        navigateToHome('/home')
    }
    const handleDiscover = () => {
        setHome(false)
        setDiscover(true)
        setPost(false)
        setInbox(false)
        setProfile(false)

        navigateToDiscover('/discover')
    }
    const handlePost = () => {
        setHome(false)
        setDiscover(false)
        setPost(true)
        setInbox(false)
        setProfile(false)

        navigateToPost('/post')
    }
    const handleInbox = () => {
        setHome(false)
        setDiscover(false)
        setPost(false)
        setInbox(true)
        setProfile(false)

        navigateToInbox('/inbox')
    }
    const handleProfile = () => {
        setHome(false)
        setDiscover(false)
        setPost(true)
        setInbox(false)
        setProfile(true)

        navigateToProfile('/profile')
    }

  return (
    <div className='home-footer-div w-screen'>
        <div className='home-footer-icons border-t w-screen'>
            <div onClick={handleHome}>
                {home ? <HiHome size={28} className='home-footer-icon-open'/>
                 : 
                <HiHome  size={28} className='home-footer-icon-closed'/>
                } 
                <p className='home-footer-icon-name'>
                    Home
                </p>
            </div>

            <div onClick={handleDiscover}>
                {discover ? <BiSolidSearch size={28} className='home-footer-icon-open'/>
                 : 
                <FiSearch size={28} className='home-footer-icon-closed'/>
                }
                <p className='home-footer-icon-name'>
                    Discover
                </p>
            </div>

            <div onClick={handlePost}>
                {post ? <BsPencilSquare size={28} className='home-footer-icon-open'/>
                 : 
                <BsPencilSquare size={28} className='home-footer-icon-closed'/>
                }
                <p className='home-footer-icon-name'>
                    Post
                </p>
            </div>

            <div onClick={handleInbox}>
                {post ? <AiFillMessage size={28} className='home-footer-icon-open'/>
                 : 
                <AiOutlineMessage size={28} className='home-footer-icon-closed'/>
                }
                <p className='home-footer-icon-name'>
                    Inbox
                </p>
            </div>

            <div onClick={handleProfile}>
                {post ? <CgProfile size={28} className='home-footer-icon-open'/>
                 : 
                <CgProfile size={28} className='home-footer-icon-closed'/>
                }
                <p className='home-footer-icon-name'>
                    Profile
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeFooter