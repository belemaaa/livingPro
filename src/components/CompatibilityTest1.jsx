import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest1 = () => {
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
        navigate('/compatibility_test_2')
    }


  return (
    <div>
        <div className='prev-next-options'>
            <div className='signup-go-back-btn'>
                <Link to='/about'>
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

        <p className='personality'>Personality</p>
        <div className='p-border border'></div>

        <form method='POST' onSubmit={handleProceed}>
            <div className='personality-list'>
                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handlePatientBtn}>
                            {patient ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Patient
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Patient
                            </p>}
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleFunnyBtn}>
                            {funny ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text'>
                                Funny
                            </p> 
                            :
                            <p  style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Funny
                            </p>
                        }
                        </button>
                    </div>
                    
                    <div className='here-for-option-btn'>
                        <button onClick={handleStrictBtn}>
                            {strict ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Strict
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Strict
                            </p>}
                        </button>
                    </div>
                </div>
                

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleOrganizedBtn}>
                            {organized ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Organized
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Organized
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleNeatBtn}>
                            {neat ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Neat
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Neat
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleStraightforwardBtn}>
                            {straightForward ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                StraightForward
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                StraightForward
                            </p>}
                        </button>
                    </div>
                </div>    

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleTrustworthyBtn}>
                            {trustworthy ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                TrustWorthy
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                TrustWorthy
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleCreativeBtn}>
                            {creative ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Creative
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Creative
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleIntrovertBtn}>
                            {introvert ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Introvert
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Introvert
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleExtrovertBtn}>
                            {extrovert ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Extrovert
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Extrovert
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleOptimisticBtn}>
                            {optimistic ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Optimistic
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Optimistic
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleEgocentricBtn}>
                            {egocentric ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Egocentric
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Egocentric
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleSelfaware}>
                            {selfaware ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Self aware
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Self aware
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleHonestBtn}>
                            {honest ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Honest
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Honest
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn-P'>
                        <button onClick={handleGenerous}>
                            {generous ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Generous
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Generous
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handleLogicalBtn}>
                            {logical ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Logical
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Logical
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleEmotionalBtn}>
                            {emotional ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Emotional
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Emotional
                            </p>}
                        </button>
                    </div>

                    <div className='here-for-option-btn'>
                        <button onClick={handleStubbornBtn}>
                            {stubborn ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Stubborn
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Stubborn
                            </p>}
                        </button>
                    </div>
                </div> 

                <div className='here-for-option-btns-P'>
                    <div className='here-for-option-btn'>
                        <button onClick={handlePlayfulBtn}>
                            {playful ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                            className='here-for-btn-text border'>
                                Playful
                            </p> 
                            :
                            <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                                Playful
                            </p>}
                        </button>
                    </div>
                </div>                
            </div>
            
            <button type='submit' className='compat-proceed-btn'>
                Proceed
            </button>
        </form>
        
    </div>
  )
}

export default CompatibilityTest1