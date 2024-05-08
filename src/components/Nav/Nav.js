import React from "react";
import Logo from "../../assets/Logo .svg";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <img src={Logo}></img>
        </li>
        <div className="nav-links">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservations</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </div>
        <div className="nav-actions">
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Log In</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
