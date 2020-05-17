import React from "react";
import { Link } from "react-router-dom";

const HomeActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit My Profile
      </Link>
      <Link to='/posts/my-posts' className='btn btn-light'>
        <i className='far fa-comments'></i> View My Posts
      </Link>
    </div>
  );
};

export default HomeActions;
