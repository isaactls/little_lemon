import React from 'react'

const TestimonialCard = ({user}) => {
  return (
    <div className='testimonial-card'>
        <div className="testimonial-img">
            <figure className='testimonial-img-wrapper'>
            <img src={user.picture.large} alt="" />
        </figure>
        </div>
        <div className='testimonial-txt-container'>
            <h4 className="testimonial-name">{user.name.first}</h4>
        <p className="testimonial-description">it was very good experience, and the food was amazing</p>
        <span className="rate">⭐⭐⭐⭐⭐</span>
        </div>
    </div>
  )
}

export default TestimonialCard