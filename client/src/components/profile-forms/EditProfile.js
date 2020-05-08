import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { Link, withRouter } from "react-router-dom";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    zip: "",
    about: "",
    openForRequests: "",
    helpWith: "",
    youtube: "",
    twitter: "",
    instagram: "",
    linkedin: "",
    facebook: "",
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      city: loading || !profile.city ? "" : profile.city,
      state: loading || !profile.state ? "" : profile.state,
      zip: loading || !profile.zip ? "" : profile.zip,
      about: loading || !profile.about ? "" : profile.about,
      openForRequests:
        loading || !profile.openForRequests ? "" : profile.openForRequests,
      helpWith: loading || !profile.helpWith ? "" : profile.helpWith.join(","),
      youtube: loading || !profile.social ? "" : profile.social.youtube,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
    });
  }, [loading]);

  const {
    city,
    state,
    zip,
    about,
    openForRequests,
    helpWith,
    youtube,
    twitter,
    instagram,
    linkedin,
    facebook,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Tell us about yourself and how you'd
        like to help others
      </p>
      <small>* = required field</small>

      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* City'
            name='city'
            value={city}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <select name='state' value={state} onChange={(e) => onChange(e)}>
            <option value='0'>* Select State</option>
            <option value='AL'>AL</option>
            <option value='AK'>AK</option>
            <option value='AR'>AR</option>
            <option value='AZ'>AZ</option>
            <option value='CA'>CA</option>
            <option value='CO'>CO</option>
            <option value='CT'>CT</option>
            <option value='DC'>DC</option>
            <option value='DE'>DE</option>
            <option value='FL'>FL</option>
            <option value='GA'>GA</option>
            <option value='HI'>HI</option>
            <option value='IA'>IA</option>
            <option value='ID'>ID</option>
            <option value='IL'>IL</option>
            <option value='IN'>IN</option>
            <option value='KS'>KS</option>
            <option value='KY'>KY</option>
            <option value='LA'>LA</option>
            <option value='MA'>MA</option>
            <option value='MD'>MD</option>
            <option value='ME'>ME</option>
            <option value='MI'>MI</option>
            <option value='MN'>MN</option>
            <option value='MO'>MO</option>
            <option value='MS'>MS</option>
            <option value='MT'>MT</option>
            <option value='NC'>NC</option>
            <option value='NE'>NE</option>
            <option value='NH'>NH</option>
            <option value='NJ'>NJ</option>
            <option value='NM'>NM</option>
            <option value='NV'>NV</option>
            <option value='NY'>NY</option>
            <option value='ND'>ND</option>
            <option value='OH'>OH</option>
            <option value='OK'>OK</option>
            <option value='OR'>OR</option>
            <option value='PA'>PA</option>
            <option value='RI'>RI</option>
            <option value='SC'>SC</option>
            <option value='SD'>SD</option>
            <option value='TN'>TN</option>
            <option value='TX'>TX</option>
            <option value='UT'>UT</option>
            <option value='VT'>VT</option>
            <option value='VA'>VA</option>
            <option value='WA'>WA</option>
            <option value='WI'>WI</option>
            <option value='WV'>WV</option>
            <option value='WY'>WY</option>
          </select>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='* Zip Code'
            name='zip'
            value={zip}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <textarea
            placeholder='* Tell us a bit about yourself'
            name='about'
            value={about}
            onChange={(e) => onChange(e)}
          ></textarea>
          <small className='form-text'>
            Your neighborhood, what you do for a living, favorite beer, etc...
          </small>
        </div>

        <div className='form-group'>
          <select
            name='openForRequests'
            value={openForRequests}
            onChange={(e) => onChange(e)}
          >
            <option value='0'>* Are you currently open for requests?</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
          <small className='form-text'>
            Can others contact you to help them out?
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='I can help with...'
            name='helpWith'
            value={helpWith}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Please seperate with commas (eg. grocery shopping, lawn work,
            repairs, masks)
          </small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/home'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
