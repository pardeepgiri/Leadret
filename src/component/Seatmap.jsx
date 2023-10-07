import React, { useState,useEffect } from 'react'

const Seatmap = ({seattype}) => {
const premrow=['A','B','C','D','E','F','G','H','I','J'];
const[layout,setlayout]=useState([
  ['notavil','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','notavil','avilable','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','avilable','avilable','avilable','avilable','avilable','notavil','avilable','avilable'],
  ['avilable','avilable','avilable','notavil','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','avilable','notavil','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','notavil','avilable','avilable','avilable','avilable','avilable','avilable','avilable'],
  ['avilable','avilable','avilable','avilable','avilable','avilable','avilable','notavil','avilable','avilable'],
]
 )
useEffect(()=>{
console.log(layout,"+++++++")
},[layout])

 useEffect(() => {
  const updatedLayout = layout.map((row, rowIndex) =>
    row.map((seat) => {
      if (seattype === 'premium' && rowIndex <=2) {
        return 'notavail';
      } else if(seattype ==='standerd' && rowIndex>2){
        return 'notavail'
      }else{
        return 'available'
      }
    })
  );
  setlayout(JSON.parse(JSON.stringify(updatedLayout)));
  console.log(updatedLayout)
}, [seattype]);


  return (
    <div>
      {
        layout.map((row,index)=>{
          return(
            <div style={{display:'flex'}}> <span className='row-name'>{premrow[index]}</span>
               {
                row.map((seats,index2)=>(
                  <div>
                    <p key={index+"-"+index2}></p>
                    {
                      seats==='booked' ?(
                        <div><span className='booked'></span></div>
                      ):(
                        
                          seats==='available'?(
                            <div><span className='avil'></span> </div>
                          ):(
                            <div><span className='notavil'></span> </div>
                          )
                        
                      )
                    }
                  </div>
                ))
               }
              </div>
          )
        })
      }
    </div>
  )
}

export default Seatmap;
