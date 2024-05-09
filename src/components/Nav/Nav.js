import React from "react";
import Logo from "../../assets/Logo .svg";
import "./Nav.css";
import { Link } from "react-router-dom";
import BookingPage from "../../pages/BookingPage";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src={Logo}></img>
          </Link>
        </li>
        <div className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link>Menu</Link>
          </li>
          <li>
            <Link to="/bookings">Reservations</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
        </div>
        <div className="nav-actions">
          <li>
            <Link>Order Online</Link>
          </li>
          <li>
            <Link>Log In</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
