import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, firstName, avatar },
    city,
    state,
    zip,
    about,
    openForRequests,
    helpWith,
  },
}) => {
  return (
    <div>
      {openForRequests ? (
        <div className='profile bg-light'>
          <img src={avatar} alt='' className='round-img' />
          <div>
            <h2>{firstName}</h2>
            <h4>
              {city}, {state} {zip}{" "}
            </h4>
            <p>{about}</p>
            <Link to={`/profile/${_id}`} className='btn btn-primary'>
              View Profile
            </Link>
          </div>
          <ul>
            {helpWith.slice(0, 3).map((help, index) => (
              <li key={index} className='text-primary'>
                <i className='fas fa-check'></i>
                {help}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
