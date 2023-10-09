import React from 'react'

const Seatselactor = ({
  seattype, setSeattype, quantity, setquantity
}) => {

  const handleSeatTypeChange = (e) => {
    setSeattype(e.target.value)
  }
  const handleSeatQuantityChange = (e) => {
    setquantity(parseInt(e.target.value));
  }

  return (
    <div className="seat-selector">
      <div className="tickettype">
        <label htmlFor="seat-type" >Ticket Type:</label>
        <select
          id="seat-type"
          value={seattype}
          onChange={handleSeatTypeChange}
        >
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div className='tickettype'>
        <label htmlFor="seat-quantity">Qty:</label>
        <input
          id="seat-quantity"
          type="number"
          min="1"
          max="15"
          value={quantity}
          onChange={handleSeatQuantityChange}
        />
      </div>
    </div>
  )
}

export default Seatselactor
