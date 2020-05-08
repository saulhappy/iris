import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getProfileByID } from "../../actions/profile";

const Profile = ({ getProfileByID, profile: { profile, loading }, match }) => {
  useEffect(() => {
    getProfileByID(match.params.id);
  }, [getProfileByID]);

  return <div>profile</div>;
};

Profile.propTypes = {
  getProfileByID: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByID })(Profile);
