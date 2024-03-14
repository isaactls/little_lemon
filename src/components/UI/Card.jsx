import React from 'react'

const Card = ({info}) => {
  return (
    <div className='special-card'>
        <figure className='special-card-img'>
            <img src={info.cardImage} alt={`${info.cardTitle}`} />
        </figure>
        <div className='special-card-txt'>
            <div className="special-card-title">
                <h3>{info.cardTitle}</h3> <span className='price'>{info.price}</span>
            </div>
            <p className="special-card-description">{info.description}</p>
            <p className="card-link">Order a delivery</p>
        </div>
    </div>
  )
}

export default Card