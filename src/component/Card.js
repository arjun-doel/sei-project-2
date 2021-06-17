import React, { useState } from 'react'
// import ModalEvent from './ModalEvent'


const Card = ({ name, date, image, id }) => {
  const [getIDs, setIDs] = useState('')
  const [isModal, setIsModal] = useState(false)

  const triggerModal = e => {
    setIDs(e.target.id)
    setIsModal(true)
  }

  console.log(getIDs)
  console.log(isModal)

  return (
    <>
      <div className="card hoverable">
        <div className="card-image">
          <img onClick={triggerModal} className="responsive-img" src={image} alt={name} id={id} />
          <span className="card-title">{name}</span>
          <a href="" className="btn-floating halfway-fab waves-effect waves-light red"><i className="far fa-heart hoverable"></i></a>
        </div>
        <div className="card-content">
          <p>{date}</p>
        </div>
        {/* <button className="ui button">Show Modal</button> */}
      </div>
    </>
  )
}

export default Card
