import React from 'react'
import './chicago.css'
import image1 from '../../assets/images//Mario and Adrian A.jpg'
import image2 from '../../assets/images/Mario and Adrian b.jpg'
const Chicago = () => {
  return (
    <section>
    <div className="chicago-container row">
      <div className="chicago-about-article-container">
        <article>
          <h2>little lemon</h2>
          <h3>chicago</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </article>
      </div>
      <div className="chicago-about-img-container">
        <figure className='chef-img-container img-1'><img src={image1} alt="" /></figure>
        <figure className='chef-img-container img-2'><img src={image2} alt="" /></figure>
      </div>
    </div>
    </section>
  )
}

export default Chicago