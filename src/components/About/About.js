import React from "react";
import img from "../../assets/AboutImg.png";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <img src={img} alt="Little Lemon Chef showing off their food."></img>
      <div id="about-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Subway venmo mi ascot vibecession irony baby woke portland pbr&b. Woke
          knausgaard tile pok plz gentrify hashtag pabst literally
          intelligentsia. 90's plaid they actually it brunch batch.
        </p>
      </div>
    </section>
  );
};

export default About;
