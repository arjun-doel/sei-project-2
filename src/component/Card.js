import React from 'react'
import image from './common/sample-1.jpg'

const Card = () => {
  return (
    <>
      <div className="divider"></div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <div className="card hoverable">
                <div className="card-image">
                  <img className="responsive-img" src={image} />
                  <span className="card-title">Card Event Title</span>
                  <a href="" className="btn-floating halfway-fab waves-effect waves-light red"><i className="far fa-heart hoverable"></i></a>
                </div>
                <div className="card-content">
                  <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
