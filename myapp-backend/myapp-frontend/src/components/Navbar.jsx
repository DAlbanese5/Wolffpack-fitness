import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/product">
          <button>Product</button>
        </Link>
        <Link to="/workouts">
          <button>Workouts</button>
        </Link>
        <Link to="/about">
          <button>Meet Coach</button>
        </Link>
        <Link to="/contact">
          <button>Contact</button>
        </Link>
        {/* <Link
          to="/Logout"
          onClick={handleLogout}
          style={{ marginLeft: "auto" }}
        >
          Logout
        </Link> */}
        <Link to="/Login"> 
        <button>Login</button>
        </Link>
       
      </div>
      <button className="cart-button">Cart</button>{" "}
      {/* Cart button on the right */}
    </>
  );
};

export default Navbar;
