import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i>Page Not Found
      </h1>
      <p className='large'> ¯\_(ツ)_/¯ nothing to see here...</p>
    </Fragment>
  );
};

export default NotFound;
