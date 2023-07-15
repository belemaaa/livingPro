import React from 'react'
import Onboarding1 from './Onboarding1'
import Onboarding2 from './Onboarding2'
import Onboarding3 from './Onboarding3'

const BoardingCarousel = () => {
    const boardingImages = [
        {id:1, page:<Onboarding1/>},
        {id:2, page:<Onboarding2/>},
        {id:3, page:<Onboarding3/>}
    ]
  return (
    <div>
        {boardingImages.map(({id, page}) => {
            <div key={id}>
                {page}
            </div>
        })}
    </div>
  )
}

export default BoardingCarousel