import React from "react";
import Card from "../UI/Card";
import bruchetta from "../../assets/images/bruchetta.webp";
import greeksalad from "../../assets/images/greek salad.jpg";
import lemondessert from "../../assets/images/lemon dessert.jpg";
import "./specials.css";
const Specials = () => {
  const cardInfo = [
    {
      cardTitle: "Greek salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      cardImage: greeksalad,
      price: `$${12.99}`,
      id: 1,
    },
    {
      cardTitle: "bruchetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      cardImage: bruchetta,
      price: `$${5.99}`,
      id: 2,
    },
    {
      cardTitle: "Lemon Dessert",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      cardImage: lemondessert,
      price: `$${5.0}`,
      id: 3,
    },
  ];
  return (
    <section>
      <div className="special-container">
        <div className="row">
          <div className="special-title">
            <h3>this week specials</h3>
            <button>online menu</button>
          </div>
          <div className="special-card-container">
            {cardInfo.map((el) => {
              return <Card info={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
