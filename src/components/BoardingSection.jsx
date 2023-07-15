import React, { useState } from 'react';
import Onboarding1 from './Onboarding1';
import Onboarding2 from './Onboarding2';
import boardingempty from '../assets/images/boardingempty.png';
import boardingfill from '../assets/images/boardingfill.png';

const BoardingSection = () => {
  const [currentBoardingPage, setCurrentBoardingPage] = useState(0);
  const [nextPageIcon, setNextPageIcon] = useState(false);
  const [prevPageIcon, setPrevPageIcon] = useState(false);

  const boardingPages = [
    { id: 1, page: <Onboarding1 /> },
    { id: 2, page: <Onboarding2 /> },
  ];

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

  const goToNextPage = () => {
    setNextPageIcon(true);
    nextBoardingPage();
  };

  const goToPreviousPage = () => {
    setPrevPageIcon(true);
    previousBoardingPage();
  };

  return (
    <div>
      {boardingPages[currentBoardingPage].page}

      <div>
        {currentBoardingPage < boardingPages.length - 1 && (
          <img
            src={boardingempty}
            className='h-40 w-44'
            alt="Previous"
            onClick={goToPreviousPage}
          />
        )}
        {prevPageIcon ? (
          <img src={boardingfill} alt="Previous" />
        ) : (
          <img src={boardingempty} alt="Previous" />
        )}
      </div>

      <div>
        {currentBoardingPage > 0 && (
          <img
            src={boardingempty}
            className='h-40 w-44'
            alt="Next"
            onClick={goToNextPage}
          />
        )}
        {nextPageIcon ? (
          <img src={boardingfill} alt="Next" />
        ) : (
          <img src={boardingempty} alt="Next" />
        )}
      </div>

    </div>
  );
};

export default BoardingSection;
