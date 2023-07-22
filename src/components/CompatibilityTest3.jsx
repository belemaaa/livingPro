import React, {useState, useEffect} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// remember to change state names
const CompatibilityTest1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [patient, setPatient] = useState(false)
    const [funny, setFunny] = useState(false)
    const [strict, setStrict] = useState(false)
    const [organized, setOrganized] = useState(false)
    const [neat, setNeat] = useState(false)
    const [straightForward, setStraightforward] = useState(false)
    const [trustworthy, setTrustworthy] = useState(false)
    const [creative, setCreative] = useState(false)
    const [introvert, setIntrovert] = useState(false)
    const [extrovert, setExtrovert] = useState(false)
    const [optimistic, setOptimistic] = useState(false)
    const [egocentric, setEgocentric] = useState(false)
    const [selfaware, setSelfaware] = useState(false)
    const [honest, setHonest] = useState(false)
    const [generous, setGenerous] = useState(false)
    const [logical, setLogical] = useState(false)
    const [emotional, setEmotional] = useState(false)
    const [stubborn, setStubborn] = useState(false)
    const [playful, setPlayful] = useState(false)

    const handlePatientBtn = (e) => {
        e.preventDefault()
        setPatient(!patient)
    }
    const handleFunnyBtn = (e) => {
        e.preventDefault()
        setFunny(!funny)
    }
    const handleStrictBtn = (e) => {
        e.preventDefault()
        setStrict(!strict)
    }
    const handleOrganizedBtn = (e) => {
        e.preventDefault()
        setOrganized(!organized)
    }
    const handleNeatBtn = (e) => {
        e.preventDefault()
        setNeat(!neat)
    }
    const handleStraightforwardBtn = (e) => {
        e.preventDefault()
        setStraightforward(!straightForward)
    }
    const handleTrustworthyBtn = (e) => {
        e.preventDefault()
        setTrustworthy(!trustworthy)
    }
    const handleCreativeBtn = (e) => {
        e.preventDefault()
        setCreative(!creative)
    }
    const handleIntrovertBtn = (e) => {
        e.preventDefault()
        setIntrovert(!introvert)
    }
    const handleExtrovertBtn = (e) => {
        e.preventDefault()
        setExtrovert(!extrovert)
    }
    const handleOptimisticBtn = (e) => {
        e.preventDefault()
        setOptimistic(!optimistic)
    }
    const handleEgocentricBtn = (e) => {
        e.preventDefault()
        setEgocentric(!egocentric)
    }
    const handleSelfaware = (e) => {
        e.preventDefault()
        setSelfaware(!selfaware)
    }
    const handleHonestBtn = (e) => {
        e.preventDefault()
        setHonest(!honest)
    }
    const handleGenerous = (e) => {
        e.preventDefault()
        setGenerous(!generous)
    }
    const handleLogicalBtn = (e) => {
        e.preventDefault()
        setLogical(!logical)
    }
    const handleEmotionalBtn = (e) => {
        e.preventDefault()
        setEmotional(!emotional)
    }
    const handleStubbornBtn = (e) => {
        e.preventDefault()
        setStubborn(!stubborn)
    }
    const handlePlayfulBtn = (e) => {
        e.preventDefault()
        setPlayful(!playful)
    }

    const navigate = useNavigate()
    const handleProceed = () => {
        navigate('/compatibility_test_4')
    }


  return (
    <div className='compat-test-3-page'>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/compatibility_test_2'>
                    <IoIosArrowBack size={25}/>
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

        <p className='personality'>Interests</p>
        <div className='p-border border'></div>

        <form method='POST' onSubmit={handleProceed}>
            <div className='personality-list'>
                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handlePatientBtn}>
                            {patient ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Sports
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Sports
                            </p>}
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleFunnyBtn}>
                            {funny ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text'>
                                Traveling
                            </p> 
                            :
                            <p  style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Traveling
                            </p>
                        }
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleStrictBtn}>
                            {strict ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Reading
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Reading
                            </p>}
                        </button>
                    </div>
                </div>
                

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleOrganizedBtn}>
                            {organized ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Cooking
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Cooking
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleNeatBtn}>
                            {neat ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Movies
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Movies
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleStraightforwardBtn}>
                            {straightForward ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Socializing
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Socializing
                            </p>}
                        </button>
                    </div>
                </div>    

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleTrustworthyBtn}>
                            {trustworthy ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Acting
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Acting
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleCreativeBtn}>
                            {creative ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Photography
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Photography
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleIntrovertBtn}>
                            {introvert ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Coding
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Coding
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleExtrovertBtn}>
                            {extrovert ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Shopping
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Shopping
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleOptimisticBtn}>
                            {optimistic ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Designing
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Designing
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleEgocentricBtn}>
                            {egocentric ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Music
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Music
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleSelfaware}>
                            {selfaware ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Dancing
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Dancing
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleHonestBtn}>
                            {honest ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Singing
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Singing
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn-P'>
                        <button onClick={handleGenerous}>
                            {generous ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Swimming
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Swimming
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleLogicalBtn}>
                            {logical ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Podcasts
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Podcasts
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleEmotionalBtn}>
                            {emotional ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Religion
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Religion
                            </p>}
                        </button>
                    </div>
                </div>                
            </div>
            
            <button type='submit' className='compat-proceed-btn-I'>
                Proceed
            </button>
        </form>
        
    </div>
  )
}

export default CompatibilityTest1