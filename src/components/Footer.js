import React from "react";
import Logo from "../assets/Logo .svg";

const Footer = () => {
  return (
    <footer>
      <img src={Logo}></img>
      <ul>
        <li>
          <h4>Navigation</h4>
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
      <ul>
        <li>
          <h4>Contact</h4>
        </li>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>
      <ul>
        <li>
          <h4>Social Media</h4>
        </li>
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
        <li>
          <a>Google</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
