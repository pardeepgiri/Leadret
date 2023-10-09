import React, { useState } from 'react';
// import 'react-toastify/dist/ReactToastify.css'
import { TbArmchair } from "react-icons/tb";

const Seatmap = ({ seattype }) => {
  const premrow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const [layout, setlayout] = useState([
    [0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10,0, 11, 12, 0, 13, 14],
    [0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 8, 7,  0, 9, 10, 0,11,12,0, 13, 14],
    [0, 0, 0, 0, 0,0, 1,2,3, 3, 0, 5,6, 7, 8, 9,0,0, 10,11,12,0,14,15,16],
    [0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
    [0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
    [0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
    [1,1,1,1,0,0, 1, 2, 0, 3, 4, 0,  6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
    [1,1,1,1, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
    [0, 0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 0, 7, 8, 0, 9, 10, 11, 12, 0, 13, 14],
  ]
  )

  const [seats, setSeats] = useState(layout.map((item, index) => {
    const seatType = index > 1 ? "standard" : "premium"
    item.map((data) => (
      {
        id: data, isZero: !!data, isSelected: false, isBooked: false, type: seatType
      }
    ))
  }))

  return (
    <div >
      <div className='seatmap'>
        {
          layout.map((row, index1) => {
            return (
              <div key={index1} style={{ display: "flex", width: "100%" }}>
                <div style={{ width: "80px", marginTop: "15px" }}>
                  {premrow[index1]}

                </div>
                {
                  row.map((seat, index2) => (
                    <div key={index2}>
                    {seat === 0 ? (
                      <span style={{ marginRight: "20px"}} ></span>
                    ) : (
                      <TbArmchair  style={{marginTop:'20px'}}/>
                    )}
                  </div>
                  ))
                }

              </div>
            )
          })
        }

      </div>
      <button className='procbtn' >Proceed</button>
    </div>
  )
}

export default Seatmap;
