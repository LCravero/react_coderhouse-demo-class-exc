import PropTypes from "prop-types";
import React from "react";
import "./title.css";

function Title(props) {
  const { children, className } = props;
  const titleClass = className ? `title ${className}` : "title";

  return <span className={titleClass}>{children}</span>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: null,
};

export default Title;
