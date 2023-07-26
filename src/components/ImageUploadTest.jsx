import React, { useState } from 'react';
import axios from 'axios';

const ImageUploadTest = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState('')
  const [details, setDetails] = useState('')

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage); // Append the selected image to the FormData

    // Add any other form data to the FormData if needed
    formData.append('details', details);
    formData.append('location', location);

    try {
      const response = await axios.post('https://lp-backend-production.up.railway.app/posts/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the 'Content-Type' header to 'multipart/form-data'
        },
      });

      if (response.status === 200){
        console.log('Image uploaded successfully:', response.data);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload Image</button>

        <input type='text' className='border' onChange={(e) => setDetails(e.target.value)}/>
        <input type='text' className='border' onChange={(e) => setLocation(e.target.value)}/>
      </form>
    </div>
  );
};

export default ImageUploadTest;
