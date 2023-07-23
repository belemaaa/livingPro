import React, {useState, useEffect} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import GoogleFrame from '../assets/images/GoogleFrame.png'
import woman from '../assets/images/womanDP.png'
import verified from '../assets/images/ic_baseline-verified.png'
import PostFooter from './PostFooter'
import '../assets/css/styles.css'
import axios from 'axios'

const StartPost = () => {
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

      // Array of Nigerian state names
    const nigerianStates = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra',  
        'Bauchi', 'Bayelsa', 
    ];

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageList = [];
        for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
            imageList.push(e.target.result);
            if (imageList.length + images.length <= 4) {
              setImages([...images, ...imageList]);
            } else {
              alert('Maximum of 4 images allowed!');
            }
        };
        reader.readAsDataURL(file);
        }
    };

  return (
    <div>
        <div>
            <div className='prev-next-options'>
                <div className='signup-go-back-btn'>
                    <Link to='/post'>
                        <IoIosArrowBack size={25}/>
                    </Link>
                </div>
                <Link to='#' className='start-post-post'>
                    Post
                </Link>
            </div>

            <p className='start-post-p'>Start Post</p>

            <div className='post-header'>
                <img src={woman} className='post-pp'/>
                <p className='post-username'>Amanda Einstein 
                    <span>
                        <img src={verified} className='verified-img'/>
                    </span> 
                </p>
            </div>

            <div className='header-border border'></div>

            <form method='POST'>
                <textarea
                type='text'
                maxLength={50}
                placeholder='Add additional information'
                className='post-information-input border'
                required
                />
                <p className='fifty-words'>50 words</p>

                <div>
                    <div className='post-image-div'>
                        <label className='post-image-lbl'>Add Pictures <span>(please select all files)</span></label>
                        {images.length === 0 ? (
                            <input
                                type='file'
                                accept='image/*'
                                className='image-field border'
                                onChange={handleImageChange}
                                multiple
                            />
                        ) : null}
                    </div>

                    {images.length > 0 && (
                        <div className='uploaded-images-grid border'>
                            {images.map((image, index) => (
                                <div key={index}>
                                <img
                                    src={image}
                                    alt={`Image ${index}`}
                                    className='uploaded-images'
                                />
                                </div>
                            ))}
                        </div>
                    )}  
                </div>  

                <div className='post-location-div'>
                    <label className='post-location-lbl'>Add Location</label>
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
            </form>
        </div>

        <PostFooter/>
    </div>
  )
}

export default StartPost