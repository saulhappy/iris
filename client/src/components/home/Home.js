import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import HomeActions from "./HomeActions";
import { getCurrentProfile } from "../../actions/profile";

const Home = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  // if there is no profile and jsx of component still loading, show the spinner
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>
        Welcome home, {user && user.firstName}
      </h1>

      {/* alternative style, unsure what to go with yet:  
      <h1 className='large text-primary'>Home</h1>
      <p className='lead'>
        <i className='fas fa-house-user'> Hello {user && user.firstName}</i>
      </p> */}
      {profile !== null ? (
        <Fragment>
          <HomeActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not set up a profile.</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
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
