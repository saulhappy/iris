import React from "react";

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i></i> Iris
        </a>
      </h1>
      <ul>
        <li>
          <a href='profiles.html'>People Helping</a>
        </li>
        <li>
          <a href='register.html'>Register</a>
        </li>
        <li>
          <a href='login.html'>Login</a>
        </li>
        <li>
          <a href='about.html'>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
