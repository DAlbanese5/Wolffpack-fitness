import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/products">
          <button>Product</button>
        </Link>
        <Link to="/workouts">
          <button>Workouts</button>
        </Link>

        <Link to="/about">
          <button>Meet Coach</button>
        </Link>

        <Link to="/aboutMe">
          <button>About Me</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>

      </div>
      <div className="navbar2">
        <Link to="/Logout">
          <button>Logout</button>
        </Link>

        <Link to="/Login">
          <button>Login</button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
