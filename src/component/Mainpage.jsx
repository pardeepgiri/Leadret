import React, { useState } from 'react'
import Seatselactor from './Seatselactor'
import Seatmap from './Seatmap'
import SeatIcon from './SeatIcon';

const Mainpage = () => {
    const[seattype,setSeattype]=useState('standerd');
    const[quantity,setquantity]=useState(1);
  return (
    <div className='app'>
       <h1 style={{textAlign:'center'}}>Movie Booking </h1>
      <Seatselactor
      seattype={seattype}
      setSeattype={setSeattype}
      quantity={quantity}
      setquantity={setquantity}
      />
      <div className="seatflex">
        <div className="flex1">
        <Seatmap
      seattype={seattype}
      quantity={quantity}
      />
        </div>
        <div className="flex2">
          <SeatIcon/>
        </div>
      </div>
      
    </div>
  )
}

export default Mainpage;
