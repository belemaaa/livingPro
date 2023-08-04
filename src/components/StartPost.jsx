import React, {useState, useEffect} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import woman from '../assets/images/womanDP.png'
import verified from '../assets/images/ic_baseline-verified.png'
import PostFooter from './PostFooter'
import Profile from './Profile';
import '../assets/css/styles.css'
import axios from 'axios'

const StartPost = () => {
    const navigate = useNavigate()
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [details, setDetails] = useState('')
    const [location, setLocation]  = useState('')
    const [postError, setPostError] = useState('')
    const maxWordLimit = 50;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
       
    const nigerianStates = [
        'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra',  
        'Bauchi', 'Bayelsa', 
    ];

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    // handle image upload
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };  
    
    const handlewordLimit = (event) => {
        const inputText = event.target.value;
        // Split the input text into words
        const words = inputText.trim().split(/\s+/);
        if (words.length <= maxWordLimit) {
          setDetails(inputText);
        }
    };

    // fetching post api
    const handlePost = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('image', selectedImage); 
        formData.append('details', details);
        formData.append('location', location);
    
        try {
          console.log('api data: ', formData)
          const response = await axios.post('https://lp-backend-production.up.railway.app/posts/', 
          formData, {
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
          });
    
          if (response.status === 200){
            console.log('Post created', response.data);
            navigate('/home')
          }
        } catch (error) {
            setPostError('Oops! Post was not created.')
            console.error('Error uploading image:', error);
        }
    };
    
    return (
        <div className='overflow-hidden'>
            <div className='hidden dk-profile border-r'>
                <Profile/>
            </div>

            <div className='start-post-page'>
                <form method='POST' onSubmit={handlePost}>
                    <div className='prev-next-options'>
                        <div className='signup-go-back-btn'>
                            <Link to='/post'>
                                <IoIosArrowBack size={25}/>
                            </Link>
                        </div>
                        <button type='submit' className='start-post-post'>
                            Post
                        </button>
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

                    {postError && <p className='postError'>{postError}</p>}
                    <textarea
                    type='text'
                    value={details}
                    placeholder='Add additional information'
                    className='post-information-input border'
                    onChange={handlewordLimit}
                    required
                    />
                    <p className='fifty-words'>50 words</p>

                    <input type="file" onChange={handleImageChange} />

                    {/* <div>
                        <div className='post-image-div'>
                            <label className='post-image-lbl'>Add Pictures <span>(please select all files)</span></label>
                            <br/>
                            {images.length === 0 ? (
                                <input
                                    type='file'
                                    accept='image/*'
                                    //value={images}
                                    className='image-field border'
                                    onChange={handleImageChange}
                                    multiple
                                />
                            ) : 
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
                            }
                        </div> */}

                        {/* {images.length > 0 && (
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
                        )}   */}
                    {/* </div>   */}

                    <div className='post-location-div'>
                        <label className='post-location-lbl'>Add Location</label>
                        <br/>
                        <select name='location' 
                            placeholder='Location'
                            className='post-location-box border' 
                            value={location} 
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
