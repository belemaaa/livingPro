import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowBack} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'

const Matches = () => {
    const [filter, setFilter] = useState(false)
    const [matches, setMatches] = useState(false)

    const handleFilterClick = () => {
        setFilter(!filter)
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
            <div onClick={handleFilterClick}>
                {filter ? 
                    <div className='twenty-four-hours border'>
                        <p>24 hours <IoMdArrowDropdown size={15} className='twenty-four-hours-icon'/> </p> 
                    </div>
                :
                    <div className='all-time border'>
                        <p>All time <IoMdArrowDropdown className='all-time-icon'/> </p> 
                    </div>
                }
            </div>
        </div>

        <div className='matches-names'>
            <div className='matches-div border'>
                <img src='' className='border'/>
                <p className='matches-name'>Grace Belema</p>
                <p className='matches-percent'>70%</p>
                
            </div>
        </div>
    </div>
  )
}

export default Matches