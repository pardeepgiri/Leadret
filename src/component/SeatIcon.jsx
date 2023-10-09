import React from 'react'
import {TbArmchair} from "react-icons/tb";
const SeatIcon = () => {
  return (
    <div>
        <h2>Key to Seat Layout:</h2>
        <div><TbArmchair style={{background:'red'}}/>  Available</div>
        <p > <TbArmchair/>  Unavailable</p>
        <p ><TbArmchair/>  Your Sealection</p>
    </div>
  )
}

export default SeatIcon
