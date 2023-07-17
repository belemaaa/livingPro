import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <div>
        <Link to='/onboarding3'>
            <IoIosArrowBack className='signup-go-back-btn'/>
        </Link>
      </div>

      <div>
        <p>Welcome!!</p>
        <p>Kindly fill in these details to create an account ad find what you need</p>
      </div>

      <div>
        <form method='POST' className='signup-form'>
          <input type='text' name='name' placeholder='Enter your Full name'/>
        </form>
      </div>
    </div>
  )
}

export default Signup