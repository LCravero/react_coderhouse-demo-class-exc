import PropTypes from "prop-types";
import React from "react";
import Subtitle from "./commons/Subtitle";

function Position(props) {
  const { role, workingIn } = props;

  return (
    <Subtitle className="user__current-position">
      {role} at {workingIn}
    </Subtitle>
  );
}

Position.propTypes = {
  role: PropTypes.string.isRequired,
  workingIn: PropTypes.string.isRequired,
};

export default Position;
