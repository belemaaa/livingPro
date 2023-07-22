import React, {useState, useEffect} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const AboutInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const [selectedLocation, setSelectedLocation] = useState('');
  const [apartBtn, setApartBtn] = useState(false)
  const [roomateBtn, setRoomateBtn] = useState(false)
  const [postbtn, setPostBtn] = useState(false)

  // Array of Nigerian state names
  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra',  
    'Bauchi', 'Bayelsa', 
  ];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleApartBtn = (e) => {
    e.preventDefault()
    setApartBtn(!apartBtn)
  }
  const handleRoomateBtn = (e) => {
    e.preventDefault()
    setRoomateBtn(!roomateBtn)
  }
  const handlePostBtn = (e) => {
    e.preventDefault()
    setPostBtn(!postbtn)
  }

  const handleProceed = () => {
    navigate('/compatibility_test_1')
  }

  return (
    <div className='about-page'>
        <div className='signup-go-back-btn'>
            <Link to='/email_verification'>
                <IoIosArrowBack size={25}/>
            </Link>
        </div>
        <p className='about-welcome'>Let's get to know you better</p>

        <div>
          <form method='POST' onSubmit={handleProceed}>
            <div>
              <label className='about-form-label'>What's your full name? 
              <span className='required-asterik'>*</span></label>

              <input type='text' name='name' 
              className='about-form-input-box border'
              required
              />
            </div>
            
            <br/>

            <div>
              <label className='about-form-label'>What do you do? (Occupation) 
              <span className='required-asterik'>*</span></label>

              <input type='text' name='occupation' 
              className='about-form-input-box border'
              required
              autoComplete='off'/>
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
                required
                autoComplete='off'/>
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

            <div className='about-2'>
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
                autoComplete='off'/>
              </div>
            

              <br/>

              <div>
                <label className='about-form-label'>Here for:</label>
                <br/>

                <div className='here-for-option-btns'>
                  <div className='here-for-option-btn'>
                    <button onClick={handleApartBtn}>
                      {apartBtn ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                      className='here-for-btn-text border'>
                        Find apartment
                      </p> 
                      :
                      <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                        Find apartment
                      </p>}
                    </button>
                  </div>
                  
                  <div className='here-for-option-btn'>
                    <button onClick={handleRoomateBtn}>
                      {roomateBtn ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                      className='here-for-btn-text'>
                        Find a roomate
                      </p> 
                      :
                      <p  style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                        Find a roomate
                      </p>
                    }
                    </button>
                  </div>
                  
                  <div className='here-for-option-btn'>
                    <button onClick={handlePostBtn}>
                      {postbtn ? <p style={{ backgroundColor: '#007FE0', color:'#FFFFFF' }} 
                      className='here-for-btn-text border'>
                        Post apartment
                      </p> 
                      :
                      <p style={{ backgroundColor: '#E8E8E8' }} className='here-for-btn-text'>
                        Post apartment
                      </p>}
                    </button>
                  </div>
                </div>
                
              </div>
            
            </div>
            

            <button type='submit' className='about-proceed-btn'>
                Proceed
            </button>
          </form>
        </div>
    </div>
  )
}

export default AboutInfo