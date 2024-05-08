import React from "react";

const TestimonialsCard = (props) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    }
    return stars;
  };
  return (
    <div className="testimonials-card">
      <img src={props.pfp} />
      <h4>{props.name}</h4>
      <p>{props.testimonial}</p>
      <div className="rating">{renderStars(props.rating)}</div>
    </div>
  );
};

export default TestimonialsCard;
