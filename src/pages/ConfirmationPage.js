import React from "react";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "../components/BookingForm/BookingForm.css";
import check from "../assets/check.png";
import { Link } from "react-router-dom";

const ConfirmationPage = (props) => {
  return (
    <>
      <Nav />
      <div className="bookings-container">
        <img src={check} />
        <h1 className="booking-title">Reservation Confirmed</h1>
        <p>
          Congratulations! Your table at Little Lemon is all set. Relax and get
          excited for a delicious meal. See you soon!
        </p>
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmationPage;
