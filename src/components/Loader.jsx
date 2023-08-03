import React, {useEffect, useState} from 'react'
import SquareLoader from "react-spinners/SquareLoader";

const Loader = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
  


  return (
    <div className='loader-page'>
        <SquareLoader
            color={'#000000'}
            loading={loading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            className='loader'
        />
    </div>
  )
}

export default Loader