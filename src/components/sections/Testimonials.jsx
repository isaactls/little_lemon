import React from "react";
import "./testimonial.css";
import { useState, useEffect } from "react";
import TestimonialCard from "../UI/TestimonialCard";
const Testimonials = () => {
  const [user, setUser] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchUser = () => {
    setLoading(true)
    setTimeout(() => {
      fetch("https://randomuser.me/api?results=4")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch a data");
          }
          return response.json();
        })
        .then((data) => setUser(data.results))
        .catch((error) => {
          console.error("error fetching data", error);
          setLoading(false);
        });
    }, 3000);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <section>
      <div className="row">
        <div className="testimonial-container">
          <div className="testimonial-title">
            <h3>Testimonial</h3>
          </div>
          <div className="testimonial-card-container">
            {user.length > 0 ? (
              user.map((el) => (
                <TestimonialCard key={el.login.uuid} user={el} />
              ))
            ) : Loading === true ? (
              <h2 className="load">
                Loading <span className="load-dot dot-1"></span>
                <span className="load-dot dot-2"></span>
                <span className="load-dot dot-3"></span>
              </h2>
            ) : (
              <>
                <h2 className="load">
                  unable to fetch the data due to bad internet
                </h2>
                <button onClick={fetchUser}>retry</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
