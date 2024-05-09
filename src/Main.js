import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookings" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default Main;
