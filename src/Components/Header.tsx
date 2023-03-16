import * as React from 'react';
import classes from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import  { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = (props) => {

    return (
      <div className={classes.container}>
     <div className={classes.navUpper}>Get Flat 15% off on first purchase! Use Code: JOINTHETEAM
     </div>
     <div className={classes.navBottom}>
        <div>
          <div className={classes.logo}></div>
          <div className={classes.inputField}>
            <input type="search" className={classes.search}/>
          </div>
          <div className={classes.icons}>
          <span className={classes.singleIcon}><FontAwesomeIcon icon={faPhoneVolume as IconProp} /> Support</span>
          <span className={classes.singleIcon}><FontAwesomeIcon icon={faUser as IconProp} /> Account</span>
          <span className={classes.singleIcon}><FontAwesomeIcon icon={faCartShopping as IconProp} /> Cart</span>
          </div>
        </div>
        <div className={classes.navLinks}>
          <span className={classes.navLinks_text}><a href="" >Food</a></span>
          <span className={classes.navLinks_text}><a href="">Clothing</a></span>
          <span className={classes.navLinks_text}><a href="">Accessories</a></span>
          <span className={classes.navLinks_text}><a href="">Vaccine</a></span>
          <span className={classes.navLinks_text}><a href="">Treat & Toys</a></span>
          <span className={classes.navLinks_text}><a href="">Pet Essentials</a></span>
          <span className={classes.navLinks_text}><a href="">Health</a></span>
          <span className={classes.navLinks_text}><a href="">Personalised Me</a></span>
          <span className={classes.navLinks_text}><a href="">FAQs</a></span>
          <span className={classes.navLinks_text}><a href="">About Us</a></span>
          <span className={classes.navLinks_text}><a href="">Contact Us</a></span>
        </div>
     </div>
     </div>
  );
};

export default Header;