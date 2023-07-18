import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AboutInfo = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  // Array of Nigerian state names
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra',   
  ];


  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
        <div className='signup-go-back-btn'>
            <Link to='/email-verification'>
                <IoIosArrowBack size={30}/>
            </Link>
        </div>
        <div className=''>
          <p className='about-welcome'>Let's get to know you better</p>
        </div>

        <div>
          <form method='POST'>
            <label>What's your full name? <span>*</span></label>
            <input type='text' name='name' 
            className='about-form-input-box'
            required/>

            <label>What do you do? (Occupation) <span>*</span></label>
            <input type='text' name='occupation' 
            className='about-form-input-box'
            required/>

            <label>Age? <span>*</span></label>
            <input type='text' name='age' 
            className='about-form-input-box'
            required/>

            <label>Date of Birth <span>*</span></label>
            <input type='date' 
            name='dateOfBirth' 
            className='about-form-input-box'
            required/>

            <label>Location <span>*</span></label>
            <select name='location' 
            className='about-form-input-box' 
            value={selectedLocation} 
            onChange={handleLocationChange}
            required>
              <option value=""></option>
                {nigerianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>

            <label>Mobile number</label>
            <input type='phone' 
            name='phone' 
            className='about-form-input-box'
            />

            <label>Here for:</label>
            <button className='here-for-option-btn'>Find apartment</button>
            <button className='here-for-option-btn'>Find a roomate</button>
            <button className='here-for-option-btn'>Post apartment</button>

            <button type='submit' className='about-proceed-btn'
            >
                Proceed
            </button>
          </form>
        </div>
    </div>
  )
}

export default AboutInfo