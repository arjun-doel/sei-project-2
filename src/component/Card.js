import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal'



const Card = ({ name, date, image, id }) => {
  const [modalShow, setModalShow] = useState(false)
  const [getEvents, setEvents] = useState([])
  const [modalID, setModalID] = useState('')

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'gCK1UZiAtKeL5bTCeol9GN91BXQYtQFa'
      const { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=GB&apikey=${apiKey}`)
      // setEvents(data._embedded.events)
      const filteredData = data._embedded.events.filter(ite => ite.id === modalID)
      console.log(filteredData)
      setEvents(filteredData)
    }
    getData()
  }, [modalID])
  
  console.log(getEvents)

  

  const loadModal = e => {
    setModalID(e.target.id)
    setModalShow(true)
  }

  return (
    <>
      <MyVerticallyCenteredModal
        {...getEvents}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="card hoverable">
        <div className="card-image">
          <img onClick={loadModal} className="responsive-img" src={image} alt={name} id={id} />
          <span className="card-title">{name}</span>
          <a href="" className="btn-floating halfway-fab waves-effect waves-light red"><i className="far fa-heart hoverable"></i></a>
        </div>
        <div className="card-content">
          <p>{date}</p>
        </div>
      </div>
    </>
  )
}

export default Card
