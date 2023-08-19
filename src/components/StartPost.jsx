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

const StartPost = ({accessToken, user_id}) => {
    const navigate = useNavigate()
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
        'Bauchi', 'Bayelsa', 'Lagos', 'Abuja' 
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
    // console.log(accessToken)
    const handlePost = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('image', selectedImage);
        formData.append('details', details);
        formData.append('location', location);
      
        try {
          console.log('api data: ', formData);
      
          const response = await axios.post(
            'https://lp-backend-production.up.railway.app/posts/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${accessToken}`
              },
            }
          );
      
          if (response.status === 200) {
            console.log('Post created', response.data);
            navigate('/home');
          }
        } catch (error) {
          setPostError('Oops! Post was not created.');
          console.error('Error uploading image:', error);
        }
    };

    // fetch profile api
    const [profileData, setProfileData] = useState([])
    useEffect(() => {
      const fetchProfile = async () => {
        try{
          const response = await axios.get(`https://lp-backend-production.up.railway.app/profile/${user_id}`)
          setProfileData(response.data)
        } 
        catch(error){
          console.error('error fetching profile data: ', error)
        }
      }
      fetchProfile()
    },[])
    const handleGoBack = () => {
        navigate(-1)
    }
      
    
    return (
        <div className='overflow-hidden'>
            <div className='hidden dk-profile border-r'>
                <Profile/>
            </div>

            <div className='start-post-page'>
                <form method='POST' onSubmit={handlePost}>
                    <div className='prev-next-options'>
                        <div className='signup-go-back-btn'>
                            <button onClick={handleGoBack}>
                                <IoIosArrowBack size={25}/>
                            </button>
                        </div>
                        <button type='submit' className='start-post-post'>
                            Post
                        </button>
                    </div>

                    <p className='start-post-p'>Start Post</p>

                    <div className='post-header'>
                        <img src={profileData.profile_image_url} className='post-pp'/>
                        <p className='post-username'>{profileData.fullname} 
                            {/* <span>
                                <img src={verified} className='verified-img'/>
                            </span>  */}
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

                    <div className='flex flex-col'>
                        <label className='post-image-lbl'>Add Pictures <span>(please select all files)</span></label>
                        <input type="file" onChange={handleImageChange} className='image-field border'/>
                    </div>

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
