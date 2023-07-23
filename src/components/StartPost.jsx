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
    const [images, setImages] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        const imageList = [];
        for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
            imageList.push(e.target.result);
            if (imageList.length === files.length) {
            setImages(imageList);
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
                    <Link to='/about'>
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

                <div className='post-image-div'>
                    <label className='post-image-lbl'>Add Pictures</label>
                    <input 
                    type='file'
                    accept='image/*'
                    className='image-field border'
                    onChange={handleImageChange}
                    multiple
                    />
                    {images.map((image, index) => (
                        <div key={index}>
                        <img src={image} alt={`Image ${index}`} style={{ width: '200px', height: '200px', margin: '10px' }} />
                        </div>
                    ))}
                </div>
            </form>
        </div>

        <PostFooter/>
    </div>
  )
}

export default StartPost