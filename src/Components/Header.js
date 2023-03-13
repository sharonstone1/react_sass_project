import React from "react";
// import classes from "../sassStyles/layouts/Header.module.scss";

import logo from "../images/logo-yellow.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo_box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text_box">
        <h1 className="heading__primary">
          <p>
            <span className="heading__primary_main">Full Stack Developer</span>
          </p>
          <p>
            <span className="heading__primary_sub">
              Coding is my Life and It is funny when you like it.
            </span>
          </p>
        </h1>

        <a href="#" className="btn__btn_white__btn_animated">
          Dicover my Coding Tours
        </a>
      </div>
    </header>
  );
};
export default Header;
