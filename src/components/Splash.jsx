import React, { useState, useEffect } from 'react';
import Landing from './Landing'
import Onboarding1 from './Onboarding1';
import BoardingSection from './BoardingSection';
import BoardingCarousel from './BoardingCarousel';

const Splash = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
      // Simulate a 4-second delay before hiding the splash screen
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);


    return (
        <div>
            {showSplash ? <Landing /> : <Onboarding1/>}
        </div>
    )
}

export default Splash