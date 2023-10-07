import React from 'react'

const SeatIcon = () => {
  return (
    <div>
        <h2>Key to Seat Layout:</h2>
        <div><span className='avil'></span>Available</div>
        <p > <span className='notavil'></span>Unavailable</p>
        <p > <span className='booked'></span>Your Sealection</p>
    </div>
  )
}

export default SeatIcon
