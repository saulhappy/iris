import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    about,
    helpWith,
    user: { firstName },
  },
}) => (
  <div class='profile-about bg-light p-2'>
    {about && (
      <Fragment>
        <h2 class='text-primary'>About {firstName}</h2>
        <p>{about}</p>
        <div class='line'></div>
      </Fragment>
    )}

    <h2 class='text-primary'>{firstName} Can Help With: </h2>
    <div class='skills'>
      {helpWith.map((help, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i>
          {help}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
