import React from 'react'

const Seatselactor = ({
  seattype,setSeattype,quantity,setquantity
}) => {

  const handleSeatTypeChange=(e)=>{
    setSeattype(e.target.value)
  }
  const handleSeatQuantityChange=(e)=>{
    setquantity(parseInt(e.target.value));
  }
  return (
    <div className="seat-selector">
      <label htmlFor="seat-type">Select Seat Type:</label>
      <select
        id="seat-type"
        value={seattype}
        onChange={handleSeatTypeChange}
      >
        <option value="standard">Standard</option>
        <option value="premium">Premium</option>
      </select>

      <label htmlFor="seat-quantity">Select Seat Quantity:</label>
      <input
        id="seat-quantity"
        type="number"
        min="1"
        max="15"
        value={quantity}
        onChange={handleSeatQuantityChange}
      />
    </div>
  )
}

export default Seatselactor
