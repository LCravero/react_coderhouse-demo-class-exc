import PropTypes from "prop-types";
import React from "react";

function Location(props) {
  const { place } = props;

  return <address>{place}</address>;
}

Location.propTypes = {
  place: PropTypes.string.isRequired,
};

export default Location;
