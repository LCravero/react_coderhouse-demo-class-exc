import PropTypes from "prop-types";
import React from "react";

function Contacts(props) {
  const { followers, connections } = props;

  return (
    <div className="user__followers-connections">
      <a href="#" className="followers">
        {followers} followers
      </a>
      <a href="#" className="connections">
        {connections}+ connections
      </a>
    </div>
  );
}

Contacts.propTypes = {
  followers: PropTypes.number,
  connections: PropTypes.number,
};

Contacts.defaultProps = {
  followers: 0,
  connections: 0,
};

export default Contacts;
