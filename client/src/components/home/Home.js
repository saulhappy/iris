import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import HomeActions from "./HomeActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Home = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

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
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'></i> Delete My Account
            </button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Home.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Home
);
