import React from "react";
import SpecialsCard from "./SpecialsCard";
import lemon from "../../assets/lemon.jpg";
import salad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import "./Specials.css";

const Specials = (props) => {
  const specialsData = [
    {
      name: "Greek Salad",
      description:
        "Mixtape chic 8-bit a deep asymmetrical. Snackwave boys tilde readymade salvia vape they retro brooklyn. ",
      image: salad,
      price: 9.99,
    },
    {
      name: "Bruchetta",
      description:
        "Mixtape chic 8-bit a deep asymmetrical. Snackwave boys tilde readymade salvia vape they retro brooklyn. ",
      image: bruchetta,
      price: 12.99,
    },
    {
      name: "Lemon Dessert",
      description:
        "Mixtape chic 8-bit a deep asymmetrical. Snackwave boys tilde readymade salvia vape they retro brooklyn. ",
      image: lemon,
      price: 14.99,
    },
  ];

  return (
    <section className="specials">
      <div className="specials-text">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials-container">
        {specialsData.map((special, index) => (
          <SpecialsCard key={index} {...special} />
        ))}
      </div>
    </section>
  );
};

export default Specials;
