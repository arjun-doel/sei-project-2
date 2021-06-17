import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchBar = () => {

  // eslint-disable-next-line no-unused-vars
  const [getEvents, setEvents] = useState([])
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { events } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=${apiKey}`)
      console.log(events)
    }
    getData()

  }, [])


  const getUserInput = e => {
    setUserInput(e.target.value)
  }

  console.log(userInput)

  return (
    <>
      <div className="divided"></div>
      <div className="section">
        <div className="container">
          <label>Browser Select</label>
          <select onChange={getUserInput} className="browser-default">
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
