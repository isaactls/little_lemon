import React from "react";
import restaurantfood from "../../assets/images/restauranfood.jpg";
import "./Cta.css";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section>
      <div className="row">
        <div className="cta-container">
          <div className="cta-text">
            <h1>Little Lemon</h1>
            <h2>chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <NavLink to="/Reservation" className='hero-button'>
              <button>Reserve a table</button>
            </NavLink>
          </div>
          <figure className="cta-image">
            <img
              src={restaurantfood}
              alt="restaurant food"
              style={{ width: "300px", height: "380px" }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
