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
            <div>
              <label className='about-form-label'>What's your full name? 
              <span className='required-asterik'>*</span></label>

              <input type='text' name='name' 
              className='about-form-input-box border'
              required/>
            </div>
            
            <br/>

            <div>
              <label className='about-form-label'>What do you do? (Occupation) 
              <span className='required-asterik'>*</span></label>

              <input type='text' name='occupation' 
              className='about-form-input-box border'
              required/>
            </div>     

            <br/>

            <div className='AD'>
              <div>
                <div className='age'>
                  <label className=''>Age? 
                    <span className='required-asterik'>*</span>
                  </label>
                </div>
                
                <br/>
                <input type='text' name='age' 
                className='about-form-input-box-A border'
                required/>
              </div>
              
              <div>
                <div className='dob'>
                  <label>Date of Birth 
                    <span className='required-asterik'>*</span>
                  </label>
                </div>
               
                <br/>
                <input type='date' 
                name='dateOfBirth' 
                className='about-form-input-box-D border'
                required/>
                </div>
            </div>

            <br/>

            <div>
              <label className='about-form-label'>Location 
              <span className='required-asterik'>*</span></label>

              <select name='location' 
              className='about-form-input-box border' 
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
            </div>
           

            <br/>

            <div>
              <label className='about-form-label'>Mobile number</label>
              <input type='phone' 
              name='phone' 
              className='about-form-input-box border'
              />
            </div>
           

            <br/>

            <div>
              <label className='about-form-label'>Here for:</label>
              <button className='here-for-option-btn'>Find apartment</button>
              <button className='here-for-option-btn'>Find a roomate</button>
              <button className='here-for-option-btn'>Post apartment</button>
            </div>
            

            <button type='submit' className='about-proceed-btn'
            >
                Proceed
            </button>
            {/* next */}
          </form>
        </div>
    </div>
  )
}

export default AboutInfo