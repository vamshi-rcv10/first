import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-links">
        <div className="app__navbar-links__logo">
          <img src={images.gericht} alt="logo image" />
        </div>
        <ul className="app__navbar-links__list">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div />
          <a href="/" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="app__navbar-menu">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => {
              setToggleMenu(true);
            }}
            className="toggle__menu"
          />
          {toggleMenu && (
            <div className="app__navbar-menu__overlay slide-bottom">
              <MdOutlineRestaurantMenu
               
                fontSize={27}
                onClick={() => {
                  setToggleMenu(false);
                }}
                className="overlay_close"
              />
              <div className="app__navbar-menu-links__list">
                <li className="p__opensans">
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans">
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans">
                  <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans">
                  <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans">
                  <a href="#contact">Contact</a>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
