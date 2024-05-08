import React from "react";
import "./TestimonialsCard";
import TestimonialsCard from "./TestimonialsCard";
import pfp from "../../assets/pfp.png";
import pfp2 from "../../assets/pfp2.png";
import pfp3 from "../../assets/pfp3.png";
import pfp4 from "../../assets/pfp4.png";
import "./Testimonials.css";

const Testimonials = (props) => {
  const testimonialData = [
    {
      name: "Alice Johnson",
      pfp: pfp,
      testimonial:
        "My experience at My Little Lemon Restaurant was truly memorable. The lemon-infused dishes were a delightful culinary adventure.",
      rating: 5,
    },
    {
      name: "David Brown",
      pfp: pfp2,
      testimonial:
        "I thoroughly enjoyed dining at My Little Lemon Restaurant. The flavors in each dish were expertly balanced.",
      rating: 4,
    },
    {
      name: "Emily Johnson",
      pfp: pfp3,
      testimonial:
        "My dining experience at My Little Lemon Restaurant was simply fantastic. The food was exquisite, and the atmosphere was charming.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      pfp: pfp4,
      testimonial:
        "My Little Lemon Restaurant is a hidden gem! The lemon-inspired menu items are a delightful twist on traditional dishes.",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialData.map((testimonial, index) => (
          <TestimonialsCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
