import React from "react";
import Logo from "../assets/Logo .svg";

const Nav = () => {
  return (
    <nav className="Nav-Container">
      <ul>
        <li>
          <img src={Logo}></img>
        </li>
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
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
