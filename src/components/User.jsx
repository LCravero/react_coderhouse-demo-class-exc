import PropTypes from "prop-types";
import React from "react";
import Title from "./commons/Title";

function User(props) {
  const { name } = props;

  return <Title className="user-name">{name}</Title>;
}

User.propTypes = { name: PropTypes.string.isRequired };

export default User;
