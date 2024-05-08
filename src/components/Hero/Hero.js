import React from "react";
import img from "../../assets/heroimg.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Subway venmo mi ascot vibecession irony baby woke portland pbr&b. Woke
          knausgaard tile pok plz gentrify hashtag pabst literally
          intelligentsia. 90's plaid they actually it brunch batch.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={img} alt="Little Lemon Chef showing off their food."></img>
    </section>
  );
};

export default Hero;
