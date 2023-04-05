import * as React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import Logo from '../../assets/Mask group.svg'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Header: React.FC = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/Login");
    setIsLoggedIn(false);
  };

  return (
    <div className={classes.container}>
      <div className={classes.navUpper}>
        Get Flat 15% off on first purchase! Use Code: JOINTHETEAM
      </div>
      <div className={classes.navBottom}>
        {/* <ToastContainer/> */}
        <div>
          <div className={classes.logo}>
            <img src="/assets/Mask group.svg" alt="logo" />
          </div>
          <div className={classes.inputField}>
            <span className={classes.searchIcon}>
              <FontAwesomeIcon icon={faSearch as IconProp} />
            </span>
            <input
              type="search"
              className={classes.search}
              placeholder="Search anything for your pet..."
            />
          </div>
          <div className={classes.icons}>
            <span className={classes.singleIcon}>
              <FontAwesomeIcon icon={faPhoneVolume as IconProp} /> Support
            </span>
            <span className={classes.singleIcon}>
              <FontAwesomeIcon icon={faCartShopping as IconProp} /> Cart
            </span>
            <span className={classes.singleIcon}>
              {isLoggedIn ? (
                <span onClick={handleLogout}>
               <FontAwesomeIcon icon={faUser as IconProp} />
               <Link to="/Login">
                 <a href="">Logout</a>
               </Link></span>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUser as IconProp} />
                  <Link to="/Login">
                    <a href="">Login</a>
                  </Link>
                </>
              )}
            </span>
          </div>
        </div>

        <div className={classes.navLinks}>
          <span className={classes.navLinks_text}>
            <Link to="/food">
              <a href="">Food</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/clothing">
              <a href="">Clothing</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/accessories">
              <a href="">Accessories</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/vaccine">
              <a href="">Vaccine</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/treat&toys">
              <a href="">Treat & Toys</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/petessentials">
              <a href="">Pet Essentials</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/health">
              <a href="">Health</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/personalisedme">
              <a href="">Personalised Me</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/faqs">
              <a href="">FAQs</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/aboutus">
              <a href="">About Us</a>
            </Link>
          </span>
          <span className={classes.navLinks_text}>
            <Link to="/contactus">
              <a href="">Contact Us</a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
