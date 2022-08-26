import PropTypes from "prop-types";
import React from "react";
import "./button.css";

function Button(props) {
  const { className, children, variant } = props;

  const buttonClass = className
    ? `button button--${variant} ${className}`
    : `button button--${variant}`;

  return (
    <button className={buttonClass} onClick={() => {}}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

Button.defaultProps = {
  className: null,
  variant: "primary",
};

export default Button;
