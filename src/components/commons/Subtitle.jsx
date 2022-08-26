import PropTypes from "prop-types";
import React from "react";

function Subtitle(props) {
  const { children, className } = props;

  const subtitleClass = className ? `subtitle ${className}` : "subtitle";
  return <span className={subtitleClass}>{children}</span>;
}

Subtitle.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Subtitle.defaultProps = {
  className: null,
};

export default Subtitle;
