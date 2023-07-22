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
    }
    const handleProfile = () => {
        setHome(false)
        setDiscover(false)
        setPost(true)
        setInbox(false)
        setProfile(true)
    }

  return (
    <div>
        <div className='home-footer-icons'>
            <div onClick={handleHome}>
                {home ? <HiHome /> : <HiHome />} 
                {home && (
                    <div>
                        
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default HomeFooter