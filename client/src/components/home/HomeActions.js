import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HomeActions = ({ auth }) => {
  return (
    <div className='dash-buttons'>
      <Link to={`/profile/${auth.user._id}`} className='btn btn-light'>
        <i className='fas fa-user text-primary'></i> View My Profile
      </Link>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-edit text-primary'></i> Edit My Profile
      </Link>
      <Link to='/my-posts' className='btn btn-light'>
        <i className='fas fa-comments text-primary'></i> View My Posts
      </Link>
    </div>
  );
};

HomeActions.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(HomeActions);
