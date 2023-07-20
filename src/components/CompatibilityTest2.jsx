import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest2 = () => {
    const [smoke, setSmoke] = useState(false)
    const [talkLoudly, setTalkLoudly] = useState(false)
    const [snore, setSnore] = useState(false)
    const [yell, setYell] = useState(false)
    const [drink, setDrink] = useState(false)
    const [quarrelsome, setQuarrelsome] = useState(false)
    const [gossip, setGossip] = useState(false)
    const [irritable, setIrritable] = useState(false)
    const [touchy, setTouchy] = useState(false)
    const [stayUp, setStayUp] = useState(false)
    const [eat, setEat] = useState(false)

    const handleSmoke = (e) => {
        e.preventDefault()
        setSmoke(!smoke)
    }
    const handleTalkLoudly = (e) => {
        e.preventDefault()
        setTalkLoudly(!talkLoudly)
    }
    const handleSnore = (e) => {
        e.preventDefault()
        setSnore(!snore)
    }
    const handleYell = (e) => {
        e.preventDefault()
        setYell(!yell)
    }
    const handleDrink = (e) => {
        e.preventDefault()
        setDrink(!drink)
    }
    const handleQuarrelsome = (e) => {
        e.preventDefault()
        setQuarrelsome(!quarrelsome)
    }
    const handleGossip = (e) => {
        e.preventDefault()
        setGossip(!gossip)
    }
    const handleIrritable = (e) => {
        e.preventDefault()
        setIrritable(!irritable)
    }
    const handleTouchy = (e) => {
        e.preventDefault()
        setTouchy(!touchy)
    }
    const handleStayUp = (e) => {
        e.preventDefault()
        setStayUp(!stayUp)
    }
    const handleEat = (e) => {
        e.preventDefault()
        setEat(!eat)
    }

  return (
    <div>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/compatibility_test_1'>
                    <IoIosArrowBack size={30}/>
                </Link>
            </div>
            <Link to='/home' className='compat-skip'>
                Skip
            </Link>
        </div>
        
        <p className='about-welcome'>Compatibility test</p>
        <p className='compat-p'>
            This helps make finding the right roomate easier.
            Changes can be made later.
        </p>

        <p className='habits'>Habits</p>
        <div className='p-border border'></div>

    </div>
  )
}

export default CompatibilityTest2