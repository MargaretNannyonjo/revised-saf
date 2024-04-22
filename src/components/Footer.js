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
            <a href="#">
              <i class="fa-brands fa-square-x-twitter"></i>
            </a>
          </li>

          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:questsafari43@gmail.com ">
              <i class="fa-solid fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
        </ul>

        <p>Email Address: questsafari43@gmail.com </p>
      </div>
    </>
  );
};
export default Footer;
