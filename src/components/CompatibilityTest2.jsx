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

    const navigate = useNavigate()
    const handleProceed = () => {
        navigate('/compatibility_test_2')
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

        <form method='POST' onSubmit={handleProceed}>
           <div className='personality-list'>
                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleSmoke}>
                            {smoke ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Smoke
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Smoke
                            </p>}
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleTalkLoudly}>
                            {talkLoudly ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text'>
                                Talk loudly
                            </p> 
                            :
                            <p  style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Talk loudly
                            </p>
                        }
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleSnore}>
                            {snore ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Snore
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Snore
                            </p>}
                        </button>
                    </div>
                </div>
                

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleYell}>
                            {yell ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Yell
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Yell
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleDrink}>
                            {drink ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Drink
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Drink
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleQuarrelsome}>
                            {quarrelsome ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Quarrelsome
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Quarrelsome
                            </p>}
                        </button>
                    </div>
                </div>    

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleGossip}>
                            {gossip ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Gossip
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Goosip
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleIrritable}>
                            {irritable ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Irritable
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Irritable
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleTouchy}>
                            {touchy ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Touchy
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Touchy
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleStayUp}>
                            {stayUp ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Stay up all night
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Stay up all night
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleEat}>
                            {eat ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Eat a lot
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Eat a lot
                            </p>}
                        </button>
                    </div>
                </div> 
            </div>

            <button type='submit' className='compat-proceed-btn-H'>
                Proceed
            </button>
        </form>
    </div>
  )
}

export default CompatibilityTest2