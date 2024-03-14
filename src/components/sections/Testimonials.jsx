import React from 'react'
import "./testimonial.css";
import { useState, useEffect } from 'react';
import TestimonialCard from '../UI/TestimonialCard';
const Testimonials = () => {
  const [user, setUser] = useState([])
  const fetchUser = () => {
    fetch('https://randomuser.me/api?results=4').then
    (response => response.json()).then
    (data => setUser(data.results))
  }
  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <section>
      <div className="row">
        <div className="testimonial-container">
          <div className="testimonial-title">
            <h3>Testimonial</h3>
          </div>
          <div className="testimonial-card-container">
            {user.length > 0 ? user.map(el => <TestimonialCard key={el.login.uuid} user = {el}/>) : <h2 className='load'>Loading</h2>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;