import React, {useState} from 'react'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import boardingempty from '../assets/images/boardingempty.png'
import boardingfill from '../assets/images/boardingfill.png'

const BoardingSection = () => {
    const boardingPages=[
        {id:1, page:<Onboarding1/>},
        {id:2, page:<Onboarding2/>},
    ]
    const [currentBoardingPage, setCurrentBoardingPage] = useState(0)

    const nextBoardingPage = () =>{
        setCurrentBoardingPage((prevBoardingPage) =>
        (prevBoardingPage + 1) % boardingPages.length
        )
    }
    const previousBoardingPage = () =>{
        setCurrentBoardingPage((prevBoardingPage) =>{
            if (prevBoardingPage === 0){
                return boardingPages.length - 1
            }
            else{
                return prevBoardingPage - 1
            }
        })
    }
    
  return (
    <div>

    </div>
  )
}

export default BoardingSection