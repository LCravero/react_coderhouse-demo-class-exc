import PropTypes from "prop-types";
import React from "react";
import Subtitle from "./commons/Subtitle";

function Background(props) {
  const { academic } = props;

  return (
    <div className="user__academic-background">
      <ul className="academic-background">
        {academic.map((acadExp) => (
          <li key={acadExp}>
            <Subtitle>{acadExp}</Subtitle>
          </li>
        ))}
      </ul>
    </div>
  );
}

Background.propTypes = {
  academic: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Background;
