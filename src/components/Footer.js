import React from "react";
import Logo from "../images/SQ-logo.png";

const Footer = () => {
  return (
    <>
      <div class="footer">
        <div class="footer__logo">
          <img src={Logo} alt="Safari logo" />
        </div>

        <ul class="footer__nav">
          <li>
            <a href="#">About us</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
