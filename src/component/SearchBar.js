import React, { useState } from 'react'
// import axios from 'axios'

const SearchBar = () => {

  // eslint-disable-next-line no-unused-vars
  const [getEvents, setEvents] = useState([])



  return (
    <>
      <div className="container">
        <label>Browser Select</label>
        <select className="browser-default">
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
      </div>
    </>
  )
}

export default SearchBar
