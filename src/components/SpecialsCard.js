import React from "react";

const SpecialCard = (props) => {
  return (
    <div className="special-card">
      <div></div>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h4 className="price">${props.price}</h4>
    </div>
  );
};

export default SpecialCard;
