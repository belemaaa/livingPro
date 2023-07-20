import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const CompatibilityTest1 = () => {
    // const personalityTestBtns = [
    //     {id:1, text:'Patient'},
    //     {id:2, text:'Funny'},
    //     {id:3, text:'Strict'},
    //     {id:4, text:'Organized'},
    //     {id:5, text:'Neat'},
    //     {id:6, text:'Straightforward'},
    //     {id:7, text:'Trustworthy'},
    //     {id:8, text:'Creative'},
    //     {id:9, text:'Introvert'},
    //     {id:10, text:'Extrovert'},
    //     {id:11, text:'Optimistc'},
    //     {id:12, text:'Egocentric'},
    //     {id:13, text:'Self aware'},
    //     {id:14, text:'Honest'},
    //     {id:15, text:'Generous'},
    //     {id:16, text:'Logical'},
    //     {id:17, text:'Emotional'},
    //     {id:18, text:'Stubborn'},
    //     {id:19, text:'Playful'},
    // ]

    // const [btnClick, setBtnClick] = useState(false)
    // const handleBtnClick = (e) => {
        
    //     setBtnClick(!btnClick)
    // }

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

        
    </div>
  )
}

export default CompatibilityTest1