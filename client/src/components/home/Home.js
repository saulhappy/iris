import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";

const Home = ({ getCurrentProfile, auth, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // if there is no profile and jsx of component still loading, show the spinner
  return loading && profile === null ? <Spinner /> : <Fragment>test</Fragment>;
};

Home.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Home);
