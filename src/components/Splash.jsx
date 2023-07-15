import React, { useState, useEffect } from 'react';
import Landing from './Landing'
import Home from './Home'

const Splash = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
      // Simulate a 4-second delay before hiding the splash screen
      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 4000);
  
      return () => clearTimeout(timeout);
    }, []);


    return (
        <div>
            {showSplash ? <Landing /> : <Home />}
        </div>
    )
}

export default Splash