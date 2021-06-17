import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const SearchBar = () => {

  // eslint-disable-next-line no-unused-vars
  const [getEvents, setEvents] = useState([])
  // const [userInput, setUserInput] = useState('')

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      setEvents(data._embedded.events)
    }
    getData()

  }, [])


  // const getUserInput = e => {
  //   setUserInput(e.target.value)
  // }

  // console.log(userInput)

  return (
    <>
    
      <div className="container">
        <div className="row">
          {getEvents.map(ite =>
            <div className="col s6" key={ite.id}>
              <Card
                {...getEvents}
                id={ite.id}
                name={ite.name}
                date={ite.dates.start.localDate}
                image={ite.images[2].url}
              />
            </div>
          )}
        </div>
      </div>

      {/* <div className="divided"></div>
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
      </div> */}
    </>
  )
}

export default SearchBar
