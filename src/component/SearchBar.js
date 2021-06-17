import React, { useState } from 'react'
// import axios from 'axios'

const SearchBar = () => {

  // eslint-disable-next-line no-unused-vars
  const [getEvents, setEvents] = useState([])

  


  return (
    <>
      <div className="divided"></div>
      <div className="section">
        <div className="container">
          <label>Browser Select</label>
          <select className="browser-default">
            <option value="" disabled selected>Choose your option</option>
            <option value="rock">Rock</option>
            <option value="comedy">Comedy</option>
            <option value="jazz">Jazz</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default SearchBar
