import { Link } from 'gatsby';
import PropTypes from "prop-types";
import React, { useState } from "react";

import { FaAlignJustify, FaTimes} from "react-icons/fa";
import Logo from '../images/site-logo.png';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <Link>
          <img src={Logo} alt="Site Logo" className="logo"  width="320" />
        </Link>
        <nav className={isOpen ? "show-nav" : "hide-nav"}>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/appointment">Appointment</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? ( <FaTimes className="nav-icon" />) : 
          (<FaAlignJustify className="nav-icon" />)}
        </button>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
