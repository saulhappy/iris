import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateProfile = (props) => {
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

  const {
    city,
    state,
    zip,
    about,
    neighborhood,
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
  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Tell us about yourself and how you'd
        like to help others
      </p>
      <small>* = required field</small>

      <form className='form'>
        <div className='form-group'>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={city}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='State'
            name='state'
            value={state}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            placeholder='Zip Code'
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
          <small className='form-text'>Tell us a little about yourself</small>
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
        <a className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
