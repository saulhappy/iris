import React from "react";
import { Link } from "react-router-dom";

const HomeActions = () => {
  return (
    <div class='dash-buttons'>
      <Link to href='/edit-profile' class='btn btn-light'>
        <i class='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
    </div>
  );
};

export default HomeActions;
