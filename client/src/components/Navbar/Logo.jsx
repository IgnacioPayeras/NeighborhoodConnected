import React from 'react'
import svgLogo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className='flex justify-center items-center'>
      <img src={svgLogo} alt="Neighborhood Connected Logo" />
      <h2 className='font-bold'>NEIGHBORHOOD CONNECTED</h2>
    </div>
  )
}

export default Logo