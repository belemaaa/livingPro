import React from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'

const Matches = () => {
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
            <select>
                <option value='All time'></option>
                <option>24 hours</option>
            </select>
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