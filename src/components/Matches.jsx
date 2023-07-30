import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'

const Matches = () => {
    const [dropdown, setDropdown] = useState(false)

    const toggleDropDown = () => {
        setDropdown(!dropdown)
    }

  return (
    <div className='matches-page'>
        <div className='signup-go-back-btn'>
            <Link to='/profile'>
                <IoIosArrowBack size={25}/>
            </Link>
        </div>

        <p className='matches-header'>Matches</p>

        <div className='matches-p'>
            <p>Total number of matches</p>    
            <div className='all-time border' onClick={toggleDropDown}>
                <p>All time <IoMdArrowDropdown className='all-time-icon'/> </p>
            </div>
        </div>

        <div className='matches-names'>
            <div className='matches-div'>
                <img src=''/>
                <p>Grace Belema</p>
                <p>70%</p>
            </div>
        </div>
    </div>
  )
}

export default Matches