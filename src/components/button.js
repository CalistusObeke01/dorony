import { Link } from 'gatsby';
import React from 'react';
import PropTypes from "prop-types";
import "./layout.css";

const Button = ({ children, btnStyling, path }) => (
    <Link className={btnStyling} to={path} >
        {children}
    </Link>
)

Button.propTypes = {
    children: PropTypes.node.isRequired
}

Button.defaultProps = {
    btnStyling: "btnStyling"
}

export default Button;