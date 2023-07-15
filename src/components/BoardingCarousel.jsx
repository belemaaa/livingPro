import React, {useState} from 'react'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'
import { Link } from 'react-router-dom'

const BoardingCarousel = () => {
    const [currentBoardingPage, setCurrentBoardingPage] = useState(0)
    const boardingPages = [
        <Onboarding1/>,
        <Onboarding2/>,
        <Onboarding3/>
    ]

    const nextBoardingPage = () => {
        setCurrentBoardingPage((prevBoardingPage) =>
          (prevBoardingPage + 1) % boardingPages.length
        );
      };
    
      const previousBoardingPage = () => {
        setCurrentBoardingPage((prevBoardingPage) => {
          if (prevBoardingPage === 0) {
            return boardingPages.length - 1;
          } else {
            return prevBoardingPage - 1;
          }
        });
      };

  return (
    <div>
        {boardingPages[currentBoardingPage]}

        <div className='boarding-options'>
            <Link to='/home' className='boarding-skip'>
                Skip
            </Link>

            <button onClick={nextBoardingPage} className='boarding-next'>
                Next
            </button>
        </div>
    </div>
  )
}

export default BoardingCarousel