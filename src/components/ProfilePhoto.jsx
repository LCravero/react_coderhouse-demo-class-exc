import PropTypes from "prop-types";
import React from "react";

function ProfilePhoto(props) {
  const { src } = props;

  return (
    <div className="profile-image__container">
      <div className="profile-image">
        <img src={src} alt="profile-image" />
      </div>
    </div>
  );
}

ProfilePhoto.propTypes = {
  src: PropTypes.string,
};

ProfilePhoto.defaultProps = {
  src: "",
};

export default ProfilePhoto;
